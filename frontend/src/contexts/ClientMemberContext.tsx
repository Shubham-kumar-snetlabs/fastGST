import React, { createContext, useState, useContext } from "react";

// Define the type for a team member
interface ClientMember {
  id: number;
  client: string;
  business: string;
  businessNumber: string;
  filingType: string;
  gstPeriod: string;
  filedBy: string;
  filedAt: string;
}

// Define the context type
interface ClientMemberContextType {
  clientMembers: ClientMember[];
  setClientMembers: React.Dispatch<React.SetStateAction<ClientMember[]>>;
}

// Create the context with a default value of `undefined`
const ClientMemberContext = createContext<ClientMemberContextType | undefined>(undefined);

// Create the provider component
export const ClientMemberProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clientMembers, setClientMembers] = useState<ClientMember[]>([
    {
      id: 1,
      client: 'Bill Gates',
      business: 'Microsoft',
      businessNumber: 'AA060724637341B',
      filingType: 'R1',
      gstPeriod: 'Nov 2024',
      filedBy : 'Lokesh Kumar',
      filedAt: '15 Jan 2024',
    },
    {
        id: 2,
        client: 'Bill Gates',
        business: 'Microsoft',
        businessNumber: 'AA060724637341B',
        filingType: 'R1',
        gstPeriod: 'Dec 2024',
        filedBy : 'Lokesh Kumar',
        filedAt: '15 Jan 2024',
      },
      {
        id: 3,
        client: 'Elon Musk',
        business: 'SpaceX',
        businessNumber: 'AA060724637341B',
        filingType: 'R1',
        gstPeriod: 'Nov 2024',
        filedBy : 'Lokesh Kumar',
        filedAt: '15 Jan 2024',
      },
      {
        id: 4,
        client: 'Elon Musk',
        business: 'SpaceX',
        businessNumber: 'AA060724637341B',
        filingType: 'R1',
        gstPeriod: 'Nov 2024',
        filedBy : 'Lokesh Kumar',
        filedAt: '15 Jan 2024',
      },
      {
        id: 5,
        client: 'Jeff Bezos',
        business: 'Amazon',
        businessNumber: 'AA060724637341B',
        filingType: 'R1',
        gstPeriod: 'Nov 2024',
        filedBy : 'Lokesh Kumar',
        filedAt: '15 Jan 2024',
      },
  ]);

  return (
    <ClientMemberContext.Provider value={{ clientMembers, setClientMembers }}>
      {children}
    </ClientMemberContext.Provider>
  );
};

// Custom hook to use the TeamMemberContext
export const useClientMembers = () => {
  const context = useContext(ClientMemberContext);
  if (!context) {
    throw new Error("useClientMembers must be used within a ClientMemberProvider");
  }
  return context;
};
