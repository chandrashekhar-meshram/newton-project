import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://panorbit.in/api/users.json");
      if (!response.ok) {
        throw new Error("Something is went wrong");
      }
      const data = await response.json();

      setUserData(data);
    };
    fetchUser();
  }, []);

  return <Layout users={userData} />;
}

export default App;
