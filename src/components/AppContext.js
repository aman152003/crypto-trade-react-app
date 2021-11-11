import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [id, setID] = useState("bitcoin");
  const [cryptoData, setCryptoData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isNavToggled, setIsNavToggled] = useState(false);
  return (
    <AppContext.Provider
      value={{
        id,
        setID,
        cryptoData,
        setCryptoData,
        searchTerm,
        setSearchTerm,
        isNavToggled,
        setIsNavToggled,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
