import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://rickandmortyapi.com/graphql',
    name: 'test-app',
    queryDeduplication: false,
    defaultOptions: {
    mutate: {
       fetchPolicy: 'no-cache'
    },
    watchQuery: {
       fetchPolicy: 'network-only',
       nextFetchPolicy: 'no-cache',
       errorPolicy: 'all'
    },
    query: {
       fetchPolicy: 'network-only',
       errorPolicy: 'all'
    }
}
});