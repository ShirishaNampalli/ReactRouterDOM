import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleUserPage = () => {
  const [data, setData] = useState({});
  const param = useParams();

  async function fetchingData(param) {
    try {
      let response = await fetch(`https://reqres.in/api/users/${param.id}`);
      let data = await response.json();
      console.log(data);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchingData(param);
  }, []);

  return (
    <div>
      <img src={data.avatar} alt="" />
      <p>{data.first_name}</p>
      <Link to="/users">
        <button>go back</button>
      </Link>
    </div>
  );
};

export default SingleUserPage;
