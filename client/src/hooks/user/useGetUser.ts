import { gql, useQuery } from "@apollo/client";

export const GET_USER = gql(`
	query getUser($id: Int) {
		getUser(id: $id) {
			id
			firstName
			lastName
		}
	}
`);

export const useGetUser = (id: number) => {
  const result = useQuery(GET_USER, { variables: { id } });
  return { ...result, user: result.data?.getUser };
};
