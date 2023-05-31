import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('example test', ()=> {
  it('h1 test', ()=> {
    render(<App />);
    const h1 = screen.getByTestId('main_headline');
    expect(h1).toHaveClass('text-3xl');
    expect(h1).toHaveClass('font-bold');
    expect(h1).toHaveClass('underline');
    expect(h1).toHaveTextContent('React & Typescript boilerplate');
  });
});