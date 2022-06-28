// import React = require('react');
// import { DarkModeContext } from '../../contexts/darkMode';
// import { translations } from '../../utils/translations';
// import { Storage } from '../../services/localStorage';
// import * as S from './ThemeSwitcher.styles';

// const ThemeSwitcher = () => {
//   const { isDarkMode, setIsDarkMode } = React.useContext(DarkModeContext);

//   const themeChange = () => {
//     setIsDarkMode(!isDarkMode);
//     Storage.setTheme(!isDarkMode);
//   };

//   return (
//     <S.ButtonWrapper>
//       <S.Button onClick={themeChange}>
//         {isDarkMode ? translations.msg_light : translations.msg_dark}
//       </S.Button>
//     </S.ButtonWrapper>
//   );
// };

// export default ThemeSwitcher;
