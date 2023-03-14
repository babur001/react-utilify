import { render, screen } from '@testing-library/react';
import Switch from '.';

it('should render child when `is` true, the opposite when `is` false', () => {
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
