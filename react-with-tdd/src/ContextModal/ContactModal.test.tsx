import { cleanup, render, screen } from '@testing-library/react';
import { ContactModal } from './ContactModal';

afterEach(cleanup);

test('initializes empty forms', async () => {
  render(<ContactModal />);
  const text = await screen.findByText('I am the contact modal');
  const nameInput = screen.queryByPlaceholderText('Name');
  const phoneInput = screen.queryByPlaceholderText('Phone Number');
  const emailInput = screen.queryByPlaceholderText('Email Address');

  expect(nameInput).toBeInTheDocument();
  expect(phoneInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();

  expect(nameInput).toHaveValue('');
  expect(phoneInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
