import { gql, useMutation } from "@apollo/client";
import { GET_WEIGHTS } from "./useGetWeights";

export const UPDATE_WEIGHT = gql`
  mutation updateWeight(
    $id: Int
    $weight: Float
    $measurement: String
    $date: String
    $userId: Int
  ) {
    updateWeight(
      id: $id
      weight: $weight
      measurement: $measurement
      date: $date
      userId: $userId
    ) {
      id
    }
  }
`;

export const useUpdateWeight = (userId: number) => {
  return useMutation(UPDATE_WEIGHT, {
    refetchQueries: [
      {
        query: GET_WEIGHTS,
        variables: { userId },
      },
    ],
  });
};
