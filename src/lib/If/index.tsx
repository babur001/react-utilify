interface TypeProps {
  children: React.ReactNode;
  is: boolean;
}

function If({ is, children }: TypeProps): JSX.Element {
  return <>{is ? children : null}</>;
}

export default If;
