import React from 'react';

interface TypeProps<T> {
  children: (el: T, idx: number) => React.ReactNode;
  each: T[];
}

function For<T>({ children, each }: TypeProps<T>) {
  return (
    <>
      {React.Children.map(
        each.map((child, idx) => children(child, idx)),
        (child) => child
      )}
    </>
  );
}

export default For;
