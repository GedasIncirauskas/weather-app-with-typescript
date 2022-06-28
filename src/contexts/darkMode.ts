// import React = require('react');
// import { Storage } from '../services/localStorage';

// interface DarkModeContextInterface {
//   isDarkMode: boolean;
//   setIsDarkMode: () => void;
// }

// export const DarkModeContext = React.createContext<Partial<DarkModeContextInterface>>({});

// const DarkModeProvider = ({ children }: { children: any }) => {
//   const [isDarkMode, setIsDarkMode] = React.useState(Storage.getTheme());

//   return (
//     <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// export default DarkModeProvider;
