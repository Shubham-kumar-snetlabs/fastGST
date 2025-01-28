import React, { createContext, useState, useContext } from "react";

// Define the type for a team member
interface Clients {
  id: number;
  name: string;
  contact: string;
  business: string;
  photo: string;
}

// Define the context type
interface ClientsContextType {
  clients: Clients[];
  setClients: React.Dispatch<React.SetStateAction<Clients[]>>;
}

// Create the context with a default value of `undefined`
const ClientsContext = createContext<ClientsContextType | undefined>(undefined);

// Create the provider component
export const ClientsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clients, setClients] = useState<Clients[]>([
    {
      id: 1,
      name: 'Client-1',
      contact: '1234567890',
      business: '5',
      photo: '/ShivangSir.png',
    },
    {
        id: 2,
        name: 'Client-2',
        contact: '1234567890',
        business: '3',
        photo: '/ShivangSir.png',
    },
    {
        id: 3,
        name: 'Client-3',
        contact: '1234567890',
        business: '1',
        photo: '/ShivangSir.png',
    },
    {
        id: 4,
        name: 'Client-4',
        contact: '1234567890',
        business: '7',
        photo: '/ShivangSir.png',
    },
    {
        id: 5,
        name: 'Client-5',
        contact: '1234567890',
        business: '5',
        photo: '/ShivangSir.png',
    },
    
  ]);

  return (
    <ClientsContext.Provider value={{ clients, setClients }}>
      {children}
    </ClientsContext.Provider>
  );
};

// Custom hook to use the TeamMemberContext
export const useClients = () => {
  const context = useContext(ClientsContext);
  if (!context) {
    throw new Error("useClients must be used within a ClientsProvider");
  }
  return context;
};
