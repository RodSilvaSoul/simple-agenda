import { DependencyList, useCallback, useLayoutEffect, useRef } from 'react';

export const useCallbackRef = <T extends (...args: any[]) => any>(
  fn: T | undefined,
  deps: DependencyList = [],
) => {
  const ref = useRef(fn);

  useLayoutEffect(() => {
    ref.current = fn;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(((...args) => ref.current?.(...args)) as T, deps);
};
