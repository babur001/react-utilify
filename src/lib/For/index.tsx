import React from 'react';

interface TypeProps<T> {
  children: (el: T, idx: number) => React.ReactNode;
  each: T[];
}

function For<T>({ children, each }: TypeProps<T>) {
  return <>{each.map((data: T, idx) => children(data, idx))}</>;
}

export default For;
