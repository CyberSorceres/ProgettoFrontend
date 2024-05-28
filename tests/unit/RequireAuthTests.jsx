import React from 'react';
import { render, screen } from '@testing-library/react';
import { RequireAuth } from '../../src/RequireAuth';

describe('RequireAuth', () => {
  it('renders children when auth is true', () => {
    render(
      <RequireAuth auth={true}>
        <div data-testid="child">Test child</div>
      </RequireAuth>
    );
    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
  });

  it('redirects to login when auth is false', () => {
    render(
      <RequireAuth auth={false}>
        <div data-testid="child">Test child</div>
      </RequireAuth>
    );
    const login = screen.getByRole('link', { name: 'Login' });
    expect(login).toBeInTheDocument();
  });
});