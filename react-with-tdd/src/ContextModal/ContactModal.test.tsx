import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { ContactModal } from './ContactModal';

afterEach(cleanup);

test('initializes empty forms', async () => {
  //Arrange
  render(<ContactModal />);
  const nameInput = screen.queryByPlaceholderText('Name');
  const phoneInput = screen.queryByPlaceholderText('Phone Number');
  const emailInput = screen.queryByPlaceholderText('Email Address');
  const submitButton = screen.getByText('Submit');

  //Act

  //Assert
  expect(nameInput).toBeInTheDocument();
  expect(phoneInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(nameInput).toHaveValue('');
  expect(phoneInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
  expect(submitButton).toBeDisabled();
});

test('Enable submit button until form is valid', async () => {
  //Arrange
  render(<ContactModal />);
  const nameInput = screen.queryByPlaceholderText('Name');
  const phoneInput = screen.queryByPlaceholderText('Phone Number');
  const emailInput = screen.queryByPlaceholderText('Email Address');
  const submitButton = screen.getByText('Submit');

  //Act
  if (nameInput != null && phoneInput != null && emailInput != null) {
    fireEvent.change(nameInput, { target: { value: 'Port Exe' } });
    fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
    fireEvent.change(emailInput, {
      target: { value: 'portexeofficial@gmail.com' },
    });
  }

  //Assert
  expect(nameInput).toBeInTheDocument();
  expect(phoneInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(nameInput).toHaveValue('Port Exe');
  expect(phoneInput).toHaveValue('123-456-7890');
  expect(emailInput).toHaveValue('portexeofficial@gmail.com');
  expect(submitButton).toBeEnabled();
});

test('Disable submit button if inserted email is out of format', async () => {
  //Arrange
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

  //Act
  if (emailInput != null) {
    fireEvent.change(emailInput, {
      target: { value: 'portexeofficial' },
    });
  }

  //Assert
  expect(submitButton).toBeDisabled();
});

test('Disable submit button if inserted phone number is out of format', async () => {
  //Arrange
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

  //Act
  if (phoneInput != null) {
    fireEvent.change(phoneInput, { target: { value: '123-4567890' } });
  }

  //Assert
  expect(submitButton).toBeDisabled();
});

test('Displays error messages for invalid inputs', () => {
  //Arrange
  render(<ContactModal />);

  const phoneInput = screen.queryByPlaceholderText('Phone Number');
  const emailInput = screen.queryByPlaceholderText('Email Address');

  //Act
  if (phoneInput != null && emailInput != null) {
    fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
    fireEvent.change(emailInput, {
      target: { value: 'portexeofficial' },
    });
  }

  const phoneError = screen.getByText('Phone is improperly formatted');
  const emailError = screen.getByText('Email is improperly formatted');

  //Assert
  expect(phoneError).toBeInTheDocument();
  expect(emailError).toBeInTheDocument();
});

test('Displays error for invalid inputs', () => {
  //Arrange
  render(<ContactModal />);

  const phoneInput = screen.queryByPlaceholderText('Phone Number');
  const emailInput = screen.queryByPlaceholderText('Email Address');

  //Act
  if (phoneInput != null && emailInput != null) {
    fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
    fireEvent.change(emailInput, {
      target: { value: 'portexeofficial' },
    });
  }

  const emailError = screen.getByText('Email is improperly formatted');

  if (emailInput != null) {
    fireEvent.change(emailInput, {
      target: { value: 'portexeofficial@gmail.com' },
    });
  }

  //Assert
  expect(emailError).not.toBeInTheDocument();
});

test('Displays error for invalid inputs haha', () => {
  //Arrange
  render(<ContactModal />);

  const phoneInput = screen.queryByPlaceholderText('Phone Number');
  const emailInput = screen.queryByPlaceholderText('Email Address');

  //Act
  if (phoneInput != null && emailInput != null) {
    fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
    fireEvent.change(emailInput, {
      target: { value: 'portexeofficial' },
    });
  }

  const phoneError = screen.getByText('Phone is improperly formatted');

  if (phoneInput != null) {
    fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
  }

  //Assert
  expect(phoneError).not.toBeInTheDocument();
});
