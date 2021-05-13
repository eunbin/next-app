import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Footer from 'components/Footer';

describe('Footer', () => {
  it('matches snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it('render text', () => {
    const { getByText } = render(<Footer />);
    const text = getByText('Powered by');
    expect(text).toBeInTheDocument();
  });

  it('render img alt', () => {
    const { getByAltText } = render(<Footer />);

    const img = getByAltText('Vercel Logo');
    expect(img).toBeInTheDocument();
  });

  it('render img', () => {
    render(<Footer />);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', '/vercel.svg');
    expect(logo).toHaveAttribute('alt', 'Vercel Logo');
  });
});
