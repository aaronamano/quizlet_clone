import React from 'react';
import { CiFolderOn } from "react-icons/ci";
import { useFolders } from '../contexts/FolderContext';

export default function FolderPage() {
  const { folders } = useFolders();

  return (
    <div className="space-y-4">
      <h1 className="text-[#F6F7FB] text-3xl font-bold mb-6">Your Folders</h1>
      
      <div className="grid gap-4">
        {folders.map((folder) => (
          <div key={folder.id} className="bg-[#2E3856] w-full max-w-4xl h-16 rounded-md p-4 hover:bg-[#3a4568] transition-colors cursor-pointer">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <CiFolderOn className="w-7 h-7 text-[#F6F7FB]" />
                <div>
                  <p className="text-[#F6F7FB] font-bold">{folder.name}</p>
                  <p className="text-[#F6F7FB] text-sm opacity-75">{folder.itemCount} items</p>
                </div>
              </div>
              <p className="text-[#F6F7FB] text-sm opacity-50">
                {folder.createdAt.toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
        
        {folders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#F6F7FB] opacity-50">No folders yet. Create your first folder!</p>
          </div>
        )}
      </div>
    </div>
  );
}