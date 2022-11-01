import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { ContactModal } from './ContactModal';

afterEach(cleanup);

test('initializes empty forms', async () => {
  render(<ContactModal />);
  const nameInput = screen.queryByPlaceholderText('Name');
  const phoneInput = screen.queryByPlaceholderText('Phone Number');
  const emailInput = screen.queryByPlaceholderText('Email Address');
  const submitButton = screen.getByText('Submit');

  expect(nameInput).toBeInTheDocument();
  expect(phoneInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();

  expect(nameInput).toHaveValue('');
  expect(phoneInput).toHaveValue('');
  expect(emailInput).toHaveValue('');

  expect(submitButton).toBeDisabled();
});

test('Disable submit button until form is valid', async () => {
  render(<ContactModal />);

  const nameInput = screen.queryByPlaceholderText('Name');
  const phoneInput = screen.queryByPlaceholderText('Phone Number');
  const emailInput = screen.queryByPlaceholderText('Email Address');
  const submitButton = screen.getByText('Submit');

  if (nameInput != null && phoneInput != null && emailInput != null) {
    fireEvent.change(nameInput, { target: { value: 'Port Exe' } });
    fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
    fireEvent.change(emailInput, {
      target: { value: 'portexeofficial@gmail.com' },
    });
  }

  expect(nameInput).toBeInTheDocument();
  expect(phoneInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();

  expect(nameInput).toHaveValue('Port Exe');
  expect(phoneInput).toHaveValue('123-456-7890');
  expect(emailInput).toHaveValue('portexeofficial@gmail.com');

  expect(submitButton).toBeEnabled();
});
