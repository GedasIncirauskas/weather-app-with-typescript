import { useState, createContext } from 'react';
import { Storage } from '../services/localStorage';

type Props = {
  children?: React.ReactNode;
};

export const DarkModeContext = createContext(undefined);

const DarkModeProvider: React.FC<Props> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(Storage.getTheme());

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
