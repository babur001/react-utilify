interface IProps {
  children: React.ReactNode;
  times: number;
}

function Loop({ times, children }: IProps): JSX.Element {
  const rendered = [];

  for (let i = 0; i < times; i++) {
    rendered.push(children);
  }

  return <>{rendered}</>;
}

export default Loop;
