import React, { createContext, useState, useContext } from "react";

// Define the type for a team member
interface Business {
  id: number;
  name: string;
  gstNo: string;
  lastFiled: string;
}

// Define the context type
interface BusinessContextType {
  business: Business[];
  setBusiness: React.Dispatch<React.SetStateAction<Business[]>>;
}

// Create the context with a default value of `undefined`
const BusinessContext = createContext<BusinessContextType | undefined>(
  undefined
);

// Create the provider component
export const BusinessProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [business, setBusiness] = useState<Business[]>([
    {
      id: 1,
      name: "Tesla",
      gstNo: "EM060724637341T",
      lastFiled: "15 Nov 2024",
    },
    {
      id: 2,
      name: "Space X",
      gstNo: "EM060724637341T",
      lastFiled: "15 Nov 2024",
    },

    {
      id: 3,
      name: "Neuralink",
      gstNo: "EM060724637341T",
      lastFiled: "15 Nov 2024",
    },
  ]);

  return (
    <BusinessContext.Provider value={{ business, setBusiness }}>
      {children}
    </BusinessContext.Provider>
  );
};

// Custom hook to use the TeamMemberContext
export const useBusiness = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error("useBusiness must be used within a BusinessProvider");
  }
  return context;
};
