import { gql, useQuery } from "@apollo/client";
import { Weight } from "../../interfaces/weight";
import React, { useState } from "react";

export const GET_WEIGHTS = gql`
  query getAllWeight($userId: Int) {
    getAllWeights(userId: $userId) {
      id
      weight
      measurement
      date
    }
  }
`;

export const useGetWeights = (userId: number) => {
  const [weights, setWeights] = useState<Weight[]>([]);
  const result = useQuery(GET_WEIGHTS, {
    variables: { userId: userId },
    onCompleted: (data) => {
      setWeights(data?.getAllWeights);
    },
    fetchPolicy: "cache-and-network",
  });

  return {
    ...result,
    weights,
  };
};
