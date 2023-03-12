import React from 'react';

const SwitchContent = React.createContext({} as any);

function Switch({ children }: { children: React.ReactNode }) {
  const [els, setEls] = React.useState<React.ReactNode[]>([]);

  const push = (el: React.ReactNode) => {
    setEls((prev) => {
      return prev.length === 0 ? prev.concat(el) : prev;
    });
  };

  return (
    <SwitchContent.Provider value={push}>
      {children} {els}
    </SwitchContent.Provider>
  );
}

function Case({ is, children }: { is: boolean; children: React.ReactNode }) {
  const push = React.useContext(SwitchContent);

  React.useLayoutEffect(() => {
    if (is) {
      push(children);
    }
  }, []);

  return null;
}

Switch.Case = Case;

export default Switch;
