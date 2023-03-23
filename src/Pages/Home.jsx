import React from "react";
import "./Home.css";
import UserList from "../Components/UserList/UserList";
const Home = (props) => {
  return (
    <section className="home">
      <div className="container">
        <div className="users">
          <h4>Select an account</h4>
          <div className="users-list">
            <UserList users={props.users} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
