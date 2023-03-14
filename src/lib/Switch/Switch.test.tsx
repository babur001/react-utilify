import { render, screen } from '@testing-library/react';
import Switch from '.';

it('should render only first and only element when case `is` falls to truthy', () => {
  const isGoz = true;

  render(
    <Switch>
      <Switch.Case is={isGoz}>Babur</Switch.Case>
      <Switch.Case is={isGoz}>Babur</Switch.Case>
      <Switch.Case is={isGoz}>Babur</Switch.Case>
      <Switch.Case is={isGoz}>Goz</Switch.Case>
    </Switch>
  );

  const text = screen.getByText('Babur');

  expect(text).toBeInTheDocument();
});

it('should render none of the children when none of them are thruthy', () => {
  const isGoz = false;

  render(
    <Switch>
      <Switch.Case is={isGoz}>Babur</Switch.Case>
      <Switch.Case is={isGoz}>Babur</Switch.Case>
      <Switch.Case is={isGoz}>Babur</Switch.Case>
      <Switch.Case is={isGoz}>Goz</Switch.Case>
    </Switch>
  );

  const text = screen.queryAllByText('Babur');
  const text2 = screen.queryAllByText('Goz');

  expect(text).toEqual([]);
  expect(text2).toEqual([]);
});
