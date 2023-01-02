interface IProps {
  children: React.ReactNode;
  is: boolean;
}

function If({ is, children }: IProps): JSX.Element {
  return <>{is ? children : null}</>;
}

export default If;
