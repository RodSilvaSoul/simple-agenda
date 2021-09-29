import React from 'react';

export const useUpdateEffect: typeof React.useEffect = (effect, deps) => {
  const mounted = React.useRef(false);

  React.useEffect(() => {
    if (mounted.current) {
      return effect();
    }

    mounted.current = true;

    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return mounted.current;
};
