import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const auth = useContext(AuthContext)
  return(
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;