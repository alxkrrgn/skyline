import React, { useEffect, useState } from "react";
import axios from "axios";

const PhpTest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from PHP script
    axios
      .get("http://localhost/api.php")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from PHP:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>React & PHP Integration</h1>
      <p>{data.message}</p>
    </div>
  );
};

export default PhpTest;
