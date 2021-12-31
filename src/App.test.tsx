import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Apollo provider import
import { ApolloProvider } from '@apollo/client';
import { client } from 'apollo/client';

import "@testing-library/jest-dom";
import { LoadResult } from 'components/LoadResult/LoadResult';

test('App component render', () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
});

test('Load result component exist', () => {
  expect(render(<ApolloProvider client={client}><LoadResult /></ApolloProvider>)).toBeDefined();
});

test('App component check text', () => {
  const str = screen.queryByText('Test App Data');
  expect(str).toBeDefined();
});