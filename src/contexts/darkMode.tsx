import { useState, createContext } from 'react';
import { ChildrenProps } from '../ts/types';
import { Storage } from '../services/localStorage';

export const DarkModeContext = createContext(undefined);

const DarkModeProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(Storage.getTheme());

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
