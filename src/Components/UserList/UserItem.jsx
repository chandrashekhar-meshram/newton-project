import React from "react";

const UserItem = (props) => {
  const data = props.users.users;
  console.log("UserItem - ",data);
  return (
    <ul>
      {data && data.map((item) => {
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

/* 
Error: props.users.map is not a function - https://www.youtube.com/watch?v=jcLW2tVsZis

Error: Cannot read properties of undefined (reading 'map') - https://www.youtube.com/watch?v=UZT1V-VJxZE
*/
