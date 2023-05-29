import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query {
    user(id: 1) {
      id
      name
      username
      phone
    }
  }
`;
function User() {
  return <div></div>;
}

export default User;
