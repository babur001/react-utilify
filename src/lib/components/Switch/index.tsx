import React, { useContext, useMemo, useState } from 'react';

const SwitchContent = React.createContext({} as any);

function Switch({ children }: { children: React.ReactNode }) {
  const [rendered, setRendered] = useState<React.ReactNode[]>([]);

  const value = useMemo(
    () => [
      rendered,
      (el: React.ReactNode) => {
        setRendered((prev) => (prev.length === 0 ? prev.concat(el) : prev));
      },
    ],
    [rendered]
  );

  return (
    <SwitchContent.Provider value={value}>
      {children} {rendered}
    </SwitchContent.Provider>
  );
}

function useSwitchContext() {
  const [rendered, push] = useContext(SwitchContent);
  return { rendered, push };
}

function Case({ is, children }: { is: boolean; children: React.ReactNode }) {
  const { rendered, push } = useSwitchContext();

  React.useLayoutEffect(() => {
    if (is && rendered.length === 0) {
      push(children);
    }
  }, []);

  return null;
}

Switch.Case = Case;

export default Switch;
