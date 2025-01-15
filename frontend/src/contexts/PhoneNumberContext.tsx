import React, { createContext, useState, useContext } from "react";


interface PhoneNumberContextType {
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
};


const PhoneNumberContext = createContext<PhoneNumberContextType | undefined>(undefined);

// Create a provider component
export const PhoneNumberProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <PhoneNumberContext.Provider value={{ phoneNumber, setPhoneNumber }}>
      {children}
    </PhoneNumberContext.Provider>
  );
};


export const usePhoneNumber = () => {
  const context = useContext(PhoneNumberContext);
  if (!context) {
    throw new Error("usePhoneNumber must be used within a PhoneNumberProvider");
  }
  return context;
};
