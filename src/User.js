import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      username
      phone
    }
  }
`;
function User() {
  const [id, setId] = useState("");
  const { loading, data, error } = useQuery(GET_USER, {
    variables: { id: id },
  });
  //   console.log({ loading, data, error });
  return (
    <div>
      <input
        placeholder="Enter user ID"
        onChange={(e) => setId(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div style={{paddingTop:"1rem"}}>
          {Object.values(data).map((item) => {
            return (
              <div key={item.id}>
                <span>{item.id}-</span>
                <span>{item.name}-</span>
                <span>{item.username}</span>
                <p>{item.phone}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default User;
