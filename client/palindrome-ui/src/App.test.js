import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

/**
This method is used to verify "Palindrome" text is visible on the web page.
**/
test('renders text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Palindrome/i);
  expect(linkElement).toBeInTheDocument();
});

/**
This method is used to verify "The answer is:" text is visible on the web page.
**/
test('renders text', () => {
  render(<App />);
  const linkElement = screen.getByText(/The answer is:/i);
  expect(linkElement).toBeInTheDocument();
});

/**
This method is used to get the nearest palindrome value for an given integer value
**/
test('finds nearest palindrome', async () => {
  const mockResponse = { data: 12321 };
  axios.get.mockResolvedValueOnce(mockResponse);

  render(<App />);

  fireEvent.change(screen.getByRole('region'), { target: { value: '12345' } });
  fireEvent.click(screen.getByLabelText('button'));

  expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/palindrome/12345');

  await waitFor(() => screen.getByText('12321'));

  expect(screen.getByText('12321')).toBeInTheDocument();
});

/**
This method is used to validate when user inputs min int value it successfully gets the nearest palindrome value
**/
test('finds min integer palindrome', async () => {
  const mockResponse = { data: 2147447412 };
  axios.get.mockResolvedValueOnce(mockResponse);

  render(<App />);

  fireEvent.change(screen.getByRole('region'), { target: { value: '-2147483648' } });
  fireEvent.click(screen.getByLabelText('button'));

  expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/palindrome/-2147483648');

  await waitFor(() => screen.getByText('2147447412'));

  expect(screen.getByText('2147447412')).toBeInTheDocument();
});

/**
This method is used to validate when user inputs max int value it successfully gets the nearest palindrome value
**/
test('finds max integer palindrome', async () => {
  const mockResponse = { data: 2147447412 };
  axios.get.mockResolvedValueOnce(mockResponse);

  render(<App />);

  fireEvent.change(screen.getByRole('region'), { target: { value: '2147483647' } });
  fireEvent.click(screen.getByLabelText('button'));

  expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/palindrome/2147483647');

  await waitFor(() => screen.getByText('2147447412'));

  expect(screen.getByText('2147447412')).toBeInTheDocument();
});
