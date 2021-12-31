import { gql } from '@apollo/client';

// GraphQL query object
export const GET_CHARACTERS = gql`
  query($page: Int) {
    characters(page: $page){
        info {
        count
      }
      results{
          id
          name
          status
          type
          gender
          created
      }
    }
  }
`;