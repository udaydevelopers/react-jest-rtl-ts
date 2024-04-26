
import { render, screen } from '@testing-library/react';
import Greet from './Greet';


test('Greet Render Correctly', () => {
    render(<Greet />);
    const linkElement = screen.getByText("Hello");
    expect(linkElement).toBeInTheDocument();
  });

  test('Greet Render with name', () => {
    render(<Greet name='Uday' />);
    const linkElement = screen.getByText("Hello Uday");
    expect(linkElement).toBeInTheDocument();
  });