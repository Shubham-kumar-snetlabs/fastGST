import React, { createContext, useState, useContext } from "react";

// Define the type for a team member
interface TeamMember {
  id: number;
  name: string;
  phoneNumber: string;
  role: string;
  photo: string;
}

// Define the context type
interface TeamMemberContextType {
  teamMembers: TeamMember[];
  setTeamMembers: React.Dispatch<React.SetStateAction<TeamMember[]>>;
}

// Create the context with a default value of `undefined`
const TeamMemberContext = createContext<TeamMemberContextType | undefined>(undefined);

// Create the provider component
export const TeamMemberProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: 'Shivang Patel',
      phoneNumber: '123-456-7890',
      role: 'Owner',
      photo: 'ShivangSir.png',
    },
    {
      id: 2,
      name: 'Chirag Jain',
      phoneNumber: '987-654-3210',
      role: 'Super Admin',
      photo: 'ShivangSir.png',
    },
    {
      id: 3,
      name: 'Aman Singh',
      phoneNumber: '987-654-3210',
      role: 'Admin',
      photo: 'ShivangSir.png',
    },
    {
      id: 4,
      name: 'Sourav Saini',
      phoneNumber: '987-654-3210',
      role: 'Member',
      photo: 'ShivangSir.png',
    },
    {
      id: 5,
      name: 'Shubham Kumar',
      phoneNumber: '987-654-3210',
      role: 'Member',
      photo: 'ShivangSir.png',
    },
    {
      id: 6,
      name: 'Member-5',
      phoneNumber: '987-654-3210',
      role: 'Member',
      photo: 'ShivangSir.png',
    },
  ]);

  return (
    <TeamMemberContext.Provider value={{ teamMembers, setTeamMembers }}>
      {children}
    </TeamMemberContext.Provider>
  );
};

// Custom hook to use the TeamMemberContext
export const useTeamMembers = () => {
  const context = useContext(TeamMemberContext);
  if (!context) {
    throw new Error("useTeamMembers must be used within a TeamMemberProvider");
  }
  return context;
};
