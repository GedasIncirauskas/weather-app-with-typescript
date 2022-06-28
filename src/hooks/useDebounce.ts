// import React = require('react');

// const useDebounce = (debounceTime: any) => {
//   const [timer, setTimer] = React.useState();
//   React.useEffect(() => {
//     return () => {
//       timer && clearTimeout(timer);
//     };
//   }, [timer]);

//   const debounce = React.useCallback(
//     functionToCall => {
//       setTimer(
//         setTimeout(() => {
//           functionToCall();
//         }, debounceTime)
//       );
//     },
//     [debounceTime]
//   );
//   return debounce;
// };

// export default useDebounce;
