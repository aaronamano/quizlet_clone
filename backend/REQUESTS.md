# Quizlet Clone API - Postman Collection

## Base URL
```
http://localhost:3000
```

## User Routes

### Create User
**POST** `/api/users`

**Body:**
```json
{
  "email": "john.doe@example.com",
  "username": "johndoe",
  "password": "password123"
}
```

### Get User's Study Sets
**GET** `/api/users/{userId}/study-sets`

**Example:** `GET /api/users/1/study-sets`

## Study Set Routes

### Get All Public Study Sets
**GET** `/api/study-sets`

### Get Study Set by ID
**GET** `/api/study-sets/{studySetId}`

**Example:** `GET /api/study-sets/1`

### Create Study Set
**POST** `/api/study-sets`

**Body:**
```json
{
  "title": "Spanish Vocabulary",
  "description": "Basic Spanish words and phrases",
  "isPublic": true,
  "userId": "1",
  "flashcards": [
    {
      "term": "Hola",
      "definition": "Hello"
    },
    {
      "term": "Adiós",
      "definition": "Goodbye"
    },
    {
      "term": "Por favor",
      "definition": "Please"
    }
  ]
}
```

### Update Study Set
**PUT** `/api/study-sets/{studySetId}`

**Body:**
```json
{
  "title": "Updated Spanish Vocabulary",
  "description": "Updated description",
  "isPublic": false
}
```

### Delete Study Set
**DELETE** `/api/study-sets/{studySetId}`

## Flashcard Routes

### Add Flashcard to Study Set
**POST** `/api/study-sets/{studySetId}/flashcards`

**Body:**
```json
{
  "term": "Gracias",
  "definition": "Thank you"
}
```

### Update Flashcard
**PUT** `/api/flashcards/{flashcardId}`

**Body:**
```json
{
  "term": "Updated Term",
  "definition": "Updated Definition"
}
```

### Delete Flashcard
**DELETE** `/api/flashcards/{flashcardId}`

## Sample Workflow

1. **Create a user:**
   - POST `/api/users` with user data
   - Note the returned user ID

2. **Create a study set:**
   - POST `/api/study-sets` with the user ID and flashcards
   - Note the returned study set ID

3. **Get all public study sets:**
   - GET `/api/study-sets`

4. **Get specific study set:**
   - GET `/api/study-sets/{studySetId}`

5. **Add more flashcards:**
   - POST `/api/study-sets/{studySetId}/flashcards`

6. **Update a flashcard:**
   - PUT `/api/flashcards/{flashcardId}`

7. **Get user's study sets:**
   - GET `/api/users/{userId}/study-sets`

## Response Examples

### Success Response (200)
```json
{
  "id": "1",
  "title": "Spanish Vocabulary",
  "description": "Basic Spanish words and phrases",
  "isPublic": true,
  "createdAt": "2023-12-01T10:00:00.000Z",
  "updatedAt": "2023-12-01T10:00:00.000Z",
  "userId": "1",
  "flashcards": [
    {
      "id": "1",
      "term": "Hola",
      "definition": "Hello",
      "studySetId": "1",
      "createdAt": "2023-12-01T10:00:00.000Z",
      "updatedAt": "2023-12-01T10:00:00.000Z"
    }
  ]
}
```

### Error Response (500)
```json
{
  "error": "Failed to create study set"
}
```

### Not Found Response (404)
```json
{
  "error": "Study set not found"
}
```