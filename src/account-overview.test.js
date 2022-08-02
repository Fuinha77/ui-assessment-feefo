import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';

test('renders learn react link', () => {
  render(<AccountOverview />);
  const element = screen.getByText(/button/i);
  expect(element).toBeInTheDocument();
});
