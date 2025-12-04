require('dotenv/config')
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require("@prisma/adapter-pg");

const connectionString = process.env.DATABASE_URL;
console.log('Database URL configured:', connectionString ? 'Yes' : 'No');

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// Test database connection
prisma.$connect()
  .then(() => console.log('Database connected successfully'))
  .catch((error) => {
    console.error('Database connection failed:', error);
    console.error('Connection string:', connectionString);
  });

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.json({
        message: 'Quizlet Clone API',
        version: '1.0.0',
        endpoints: {
            users: {
                create: 'POST /api/users',
                getStudySets: 'GET /api/users/:id/study-sets'
            },
            studySets: {
                getAll: 'GET /api/study-sets',
                getById: 'GET /api/study-sets/:id',
                create: 'POST /api/study-sets',
                update: 'PUT /api/study-sets/:id',
                delete: 'DELETE /api/study-sets/:id',
                addFlashcard: 'POST /api/study-sets/:id/flashcards'
            },
            flashcards: {
                update: 'PUT /api/flashcards/:id',
                delete: 'DELETE /api/flashcards/:id'
            }
        }
    });
});

// Debug route to check database connection and data
app.get('/debug', async (req, res) => {
  try {
    console.log('Debug: Testing database connection...');
    
    // Test basic connection
    await prisma.$queryRaw`SELECT 1`;
    console.log('Debug: Database connection OK');
    
    // Check if StudySet table exists and count records
    const totalCount = await prisma.studySet.count();
    console.log('Debug: Total study sets:', totalCount);
    
    const publicCount = await prisma.studySet.count({
      where: { isPublic: true }
    });
    console.log('Debug: Public study sets:', publicCount);
    
    // Try to get one record without includes
    const firstSet = await prisma.studySet.findFirst();
    console.log('Debug: First study set:', firstSet);
    
    res.json({
      databaseConnected: true,
      totalStudySets: totalCount,
      publicStudySets: publicCount,
      firstStudySet: firstSet
    });
  } catch (error) {
    console.error('Debug error:', error);
    res.status(500).json({ 
      error: 'Debug failed', 
      details: error.message,
      stack: error.stack 
    });
  }
});

// Get all public study sets
app.get('/api/study-sets', async (req, res) => {
  try {
    const studySets = await prisma.studySet.findMany({
      where: { isPublic: true },
      include: {
        user: { select: { username: true } },
        flashcards: true,
        _count: { select: { flashcards: true } }
      }
    });
    res.json(studySets);
  } catch (error) {
    console.error('Error fetching study sets:', error);
    res.status(500).json({ error: 'Failed to fetch study sets', details: error.message });
  }
});

// Get study set by ID
app.get('/api/study-sets/:id', async (req, res) => {
  try {
    const studySet = await prisma.studySet.findUnique({
      where: { id: req.params.id },
      include: {
        user: { select: { username: true } },
        flashcards: true
      }
    });
    if (!studySet) {
      return res.status(404).json({ error: 'Study set not found' });
    }
    res.json(studySet);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch study set' });
  }
});

// Create new study set
app.post('/api/study-sets', async (req, res) => {
  try {
    const { title, description, isPublic, userId, flashcards } = req.body;
    const studySet = await prisma.studySet.create({
      data: {
        title,
        description,
        isPublic,
        userId,
        flashcards: {
          create: flashcards || []
        }
      },
      include: { flashcards: true }
    });
    res.json(studySet);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create study set' });
  }
});

// Update study set
app.put('/api/study-sets/:id', async (req, res) => {
  try {
    const { title, description, isPublic } = req.body;
    const studySet = await prisma.studySet.update({
      where: { id: req.params.id },
      data: { title, description, isPublic },
      include: { flashcards: true }
    });
    res.json(studySet);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update study set' });
  }
});

// Delete study set
app.delete('/api/study-sets/:id', async (req, res) => {
  try {
    await prisma.studySet.delete({
      where: { id: req.params.id }
    });
    res.json({ message: 'Study set deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete study set' });
  }
});

// Add flashcard to study set
app.post('/api/study-sets/:id/flashcards', async (req, res) => {
  try {
    const { term, definition } = req.body;
    const flashcard = await prisma.flashcard.create({
      data: {
        term,
        definition,
        studySetId: req.params.id
      }
    });
    res.json(flashcard);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add flashcard' });
  }
});

// Update flashcard
app.put('/api/flashcards/:id', async (req, res) => {
  try {
    const { term, definition } = req.body;
    const flashcard = await prisma.flashcard.update({
      where: { id: req.params.id },
      data: { term, definition }
    });
    res.json(flashcard);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update flashcard' });
  }
});

// Delete flashcard
app.delete('/api/flashcards/:id', async (req, res) => {
  try {
    await prisma.flashcard.delete({
      where: { id: req.params.id }
    });
    res.json({ message: 'Flashcard deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete flashcard' });
  }
});

// User routes
app.post('/api/users', async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await prisma.user.create({
      data: { email, username, password },
      select: { id: true, email: true, username: true, createdAt: true }
    });
    res.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    res.status(500).json({ error: 'Failed to create user', details: error.message });
  }
});

app.get('/api/users/:id/study-sets', async (req, res) => {
  try {
    const studySets = await prisma.studySet.findMany({
      where: { userId: req.params.id },
      include: {
        flashcards: true,
        _count: { select: { flashcards: true } }
      }
    });
    res.json(studySets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user study sets' });
  }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`Press Ctrl+C to stop the server.`);
})