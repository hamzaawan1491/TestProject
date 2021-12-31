import React from 'react';
import { render } from '@testing-library/react';
import { LoadResult } from '../LoadResult';

import "@testing-library/jest-dom/extend-expect";

// Apollo provider import
import { ApolloProvider } from '@apollo/client';
import { client } from 'apollo/client';

test('LoadResult component render', () => {
    render(
        <ApolloProvider client={client}>
            <LoadResult />
        </ApolloProvider>
    );
});