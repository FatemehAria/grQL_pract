import React, { useState } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";

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
function LazyUser() {
  const [id, setId] = useState("");
  const [getUser, { data, loading, error, called }] = useLazyQuery(GET_USER, {
    variables: { id: id },
  });
  console.log(data);
  //   console.log(response);
  return (
    <div>
      <input
        placeholder="Enter user ID"
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={() => getUser()}>Click to get Info</button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        called && <div>{Object.values(data).map(item => {return <div key={item.id}>
            <span>{item.id} - {item.username}</span>
            <p>{item.name} - {item.phone}</p>
        </div>})}</div>
      )}
    </div>
  );
}

export default LazyUser;
