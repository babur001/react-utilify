import React from 'react';

interface TypeProps {
  children: React.ReactNode;
  times: number;
}

function Loop({ times, children }: TypeProps): JSX.Element {
  return React.Children.map([...new Array(times).fill(' . ')], (child) => children);
}

export default Loop;
