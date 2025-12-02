import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Folder {
  id: string;
  name: string;
  itemCount: number;
  createdAt: Date;
}

interface FolderContextType {
  folders: Folder[];
  addFolder: (name: string) => void;
  removeFolder: (id: string) => void;
  updateFolder: (id: string, name: string) => void;
}

const FolderContext = createContext<FolderContextType | undefined>(undefined);

export function FolderProvider({ children }: { children: ReactNode }) {
  const [folders, setFolders] = useState<Folder[]>([
    { id: '1', name: 'Test Folder', itemCount: 5, createdAt: new Date() },
    { id: '2', name: 'Study Materials', itemCount: 12, createdAt: new Date() },
  ]);

  const addFolder = (name: string) => {
    const newFolder: Folder = {
      id: Date.now().toString(),
      name,
      itemCount: 0,
      createdAt: new Date(),
    };
    setFolders([...folders, newFolder]);
  };

  const removeFolder = (id: string) => {
    setFolders(folders.filter(folder => folder.id !== id));
  };

  const updateFolder = (id: string, name: string) => {
    setFolders(folders.map(folder => 
      folder.id === id ? { ...folder, name } : folder
    ));
  };

  return (
    <FolderContext.Provider value={{ folders, addFolder, removeFolder, updateFolder }}>
      {children}
    </FolderContext.Provider>
  );
}

export function useFolders() {
  const context = useContext(FolderContext);
  if (context === undefined) {
    throw new Error('useFolders must be used within a FolderProvider');
  }
  return context;
}