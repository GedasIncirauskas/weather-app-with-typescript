import { useState, useEffect, useCallback } from 'react';

const useDebounce = (debounceTime: number) => {
  const [timer, setTimer] = useState(null);
  useEffect(() => {
    return () => {
      timer && clearTimeout(timer);
    };
  }, [timer]);

  const debounce = useCallback(
    (functionToCall: () => void) => {
      setTimer(
        setTimeout(() => {
          functionToCall();
        }, debounceTime)
      );
    },
    [debounceTime]
  );
  return debounce;
};

export default useDebounce;
