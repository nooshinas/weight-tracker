import { gql, useMutation } from "@apollo/client";
import { GET_WEIGHTS } from "./useGetWeights";

export const DELETE_WEIGHT = gql`
  mutation deleteWeight($id: Int, $userId: Int) {
    deleteWeight(id: $id, userId: $userId) {
      id
    }
  }
`;

export const useDeleteWeight = (userId: number) => {
  return useMutation(DELETE_WEIGHT, {
    refetchQueries: [
      {
        query: GET_WEIGHTS,
        variables: { userId: userId },
      },
    ],
  });
};
