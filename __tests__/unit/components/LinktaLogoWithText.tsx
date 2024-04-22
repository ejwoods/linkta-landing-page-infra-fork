import React from 'react';
import { render, screen } from '@testing-library/react';
import LinktaLogoWithText from '../../../app/components/layout/LinktaLogoWithText';

describe('LinktaLogoWithText', () => {
  it('renders the component with the correct title', () => {
    render(<LinktaLogoWithText />);
    const titleElement = screen.getByText('Linkta');
    expect(titleElement).toBeInTheDocument();
  });
});
