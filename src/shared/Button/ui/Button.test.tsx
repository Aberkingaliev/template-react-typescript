import { render, fireEvent } from '@testing-library/react';
import styles from './Button.module.css';
import Button from './Button';
import { vi } from 'vitest';


describe('Button', () => {
  it('renders the button with the correct text', () => {
    const { getByText } = render(<Button value="Click me" />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    const { getByText } = render(<Button value="Click me" onClick={handleClick} />);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct CSS class', () => {
    const { container } = render(<Button value="Click me" />);
    expect(container.firstChild).toHaveClass(styles['button-test']);
  });
});

