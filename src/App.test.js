// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DexVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DexVault/i);
    expect(titleElement).toBeInTheDocument();
});
