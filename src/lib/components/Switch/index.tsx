import React, { useCallback, useContext, useMemo, useState } from 'react';

const SwitchContent = React.createContext({} as any);

function Switch({ children }: { children: React.ReactNode }) {
  const [els, setEls] = useState<React.ReactNode[]>([]);

  const push = useCallback((el: React.ReactNode) => {
    setEls((prev) => {
      return prev.length === 0 ? prev.concat(el) : prev;
    });
  }, []);

  const value = useMemo(() => [els, push], []);

  return (
    <SwitchContent.Provider value={value}>
      {children} {els}
    </SwitchContent.Provider>
  );
}

function Case({ is, children }: { is: boolean; children: React.ReactNode }) {
  const [, push] = useContext(SwitchContent);

  React.useLayoutEffect(() => {
    if (is) {
      push(children);
    }
  }, []);

  return null;
}

Switch.Case = Case;

export default Switch;
