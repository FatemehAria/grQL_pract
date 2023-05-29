import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

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

const CREATE_USER = gql`
  mutation {
    createUser {
      mutation {
        createUser(
          input: {
            name: "Shara"
            username: "Sharaaaa"
            email: "sharaa@gmail.com"
          }
        ) {
          name
          username
          email
        }
      }
    }
  }
`;
function User() {
  const [id, setId] = useState("");
  // const { loading, data, error } = useQuery(GET_USER, {
  //   variables: { id: id },
  // });
  const [createUser, { loading, called, data, error }] =
    useMutation(CREATE_USER);
  //   console.log({ loading, data, error });
  return (
    <div>
      {/* <input
        placeholder="Enter user ID"
        onChange={(e) => setId(e.target.value)}
      /> */}
      <button onClick={() => createUser()}>CLick to create</button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        called && <div style={{ paddingTop: "1rem" }}>
          {Object.values(data).map((item) => {
            return (
              <div>
                <span>{item.name}-</span>
                <span>{item.username}</span>
                <p>{item.email}</p>
              </div>
            );
          })}
        </div>
      )}
      {/* {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div style={{ paddingTop: "1rem" }}>
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
      )} */}
    </div>
  );
}

export default User;
