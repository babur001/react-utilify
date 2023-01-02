interface IProps<T> {
  children: (el: T, idx: number) => React.ReactNode;
  each: T[];
}

function For<T>({ children, each }: IProps<T>): JSX.Element {
  // @todo: Memoize render
  const rendered = each.map((el, idx) => children(el, idx));

  return <>{rendered}</>;
}

export default For;
