import React from "react";
import { gql, useQuery } from "@apollo/client";
const GET_USER = gql`
  query {
    users {
      data {
        name,
        username,
        email,
        phone
      }
    }
  }
`;
function Users() {
  const { data, loading, error } = useQuery(GET_USER);
  console.log({data, loading, error});
  return (
    <div>
      {loading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        data.users.data.map((item) => <p key={item.id}>{item.username}</p>)
      )}
    </div>
  );
}

export default Users;
