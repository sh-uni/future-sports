import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';
import { Carousel } from 'react-responsive-carousel';

describe('App sections', () => {
  test('renders welcome text', () => {
    render(<App />);
    expect(screen.getByText(/introduce/)).toBeInTheDocument();
  });
  test('renders main text', () => {
    render(<App />);
    expect(screen.getByText(/Quidditch/)).toBeInTheDocument();
  });
  test('renders news', () => {
    render(<App />);
    expect(screen.getByText(/Latest News/)).toBeInTheDocument();
  });
  test('renders events', () => {
    render(<App />);
    expect(screen.getByText(/Upcoming Events/)).toBeInTheDocument();
  });
  test('renders links', () => {
    render(<App />);
    expect(screen.getByText(/Links/)).toBeInTheDocument();
  });
  
});

describe('App components', () => {
  test('renders main img', () => {
    render(<App />); 
    expect(screen.getByAltText(/Quadball Team Break/)).toBeInTheDocument();
  });

  test('renders search component', () => {
    render(<App />); 
    expect(screen.getByPlaceholderText("search...")).toBeInTheDocument();
  });

});