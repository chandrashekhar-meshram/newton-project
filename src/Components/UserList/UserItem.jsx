import React from "react";

const UserItem = (props) => {
  return (
    <ul>
      {props.users.map((item) => {
        return (
          <li>
            <div className="user">
              <div className="user-image">
                <img src={item.profilepicture} alt="" />
              </div>
              <div className="user-name">
                <h4>{item.name}</h4>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default UserItem;
