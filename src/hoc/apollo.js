import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

export const apolloAsteroids = graphql(gql`
  query {
    getNeos {
      _id
      neo_reference_id
      name
      estimated_diameter {
        kilometers {
          estimated_diameter_max
        }
      }
      is_potentially_hazardous_asteroid
      close_approach_data {
        close_approach_date
        miss_distance {
          kilometers
        }
      }
      orbital_data {
        orbital_period
      }
    }
  }
`);
