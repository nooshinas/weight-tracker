import { gql, useMutation, useQuery } from "@apollo/client";
import { GET_WEIGHTS } from "./useGetWeights";

export const CREATE_WEIGHT = gql`
  mutation createWeight(
    $weight: Float
    $measurement: String
    $date: String
    $userId: Int
  ) {
    createWeight(
      weight: $weight
      measurement: $measurement
      date: $date
      userId: $userId
    ) {
      id
    }
  }
`;

export const useCreateWeight = (userId: number) => {
  return useMutation(CREATE_WEIGHT, {
    refetchQueries: [
      {
        query: GET_WEIGHTS,
        variables: { userId },
      },
    ],
  });
};
