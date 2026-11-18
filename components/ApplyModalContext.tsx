'use client';

import React, { createContext, useContext, useState } from 'react';

interface ApplyModalContextType {
  isOpen: boolean;
  selectedCourse: string;
  openModal: (courseName?: string) => void;
  closeModal: () => void;
}

const ApplyModalContext = createContext<ApplyModalContextType>({
  isOpen: false,
  selectedCourse: 'Generative AI Launchpad',
  openModal: () => {},
  closeModal: () => {},
});

export const useApplyModal = () => useContext(ApplyModalContext);

export const ApplyModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('Generative AI Launchpad');

  const openModal = (courseName = 'Generative AI Launchpad') => {
    setSelectedCourse(courseName);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <ApplyModalContext.Provider value={{ isOpen, selectedCourse, openModal, closeModal }}>
      {children}
    </ApplyModalContext.Provider>
  );
};

