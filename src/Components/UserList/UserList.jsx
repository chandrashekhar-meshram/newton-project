import React from "react";
import UserItem from "./UserItem";
const UserList = (props) => {
  const data = props.users;
  console.log(data);
  return <UserItem users={data} />;
};

export default UserList;
