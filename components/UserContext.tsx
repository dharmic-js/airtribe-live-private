'use client';

import React, { createContext, useContext, useState } from 'react';

export interface EnrolledCourse {
  id: string;
  title: string;
  href: string;
  status: string;
  badge: string;
  startDate: string;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  initials: string;
  role: string;
  institute: string;
  memberSince: string;
  isLoggedIn: boolean;
  enrolledCourses: EnrolledCourse[];
}

export const defaultUser: UserProfile = {
  name: 'Dhruv Malhotra',
  email: 'dhruv.tapmiblr2024@learner.manipal.edu',
  phone: '+91 84880 08438',
  initials: 'DM',
  role: 'AI & Software Builder',
  institute: 'TAPMI Bengaluru (MAHE)',
  memberSince: 'November 2024',
  isLoggedIn: true,
  enrolledCourses: [
    {
      id: 'genai',
      title: 'The GenAI Launchpad',
      href: '/courses/generative-ai-launchpad',
      status: 'Enrolled & Active',
      badge: 'Active Cohort',
      startDate: '22 November 2024',
    },
    {
      id: 'backend',
      title: 'AI-First Software Engineering',
      href: '/courses/backend-engineering-launchpad',
      status: 'Admitted',
      badge: 'Starts Soon',
      startDate: '29 November 2024',
    },
    {
      id: 'pm',
      title: 'AI-First Product Management',
      href: '/courses/product-management-launchpad',
      status: 'Admitted',
      badge: 'Starts Soon',
      startDate: '29 November 2024',
    },
  ],
};

interface UserContextType {
  user: UserProfile;
  setUser: React.Dispatch<React.SetStateAction<UserProfile>>;
  isProfileModalOpen: boolean;
  openProfileModal: () => void;
  closeProfileModal: () => void;
}

const UserContext = createContext<UserContextType>({
  user: defaultUser,
  setUser: () => {},
  isProfileModalOpen: false,
  openProfileModal: () => {},
  closeProfileModal: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(defaultUser);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isProfileModalOpen,
        openProfileModal: () => setIsProfileModalOpen(true),
        closeProfileModal: () => setIsProfileModalOpen(false),
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
