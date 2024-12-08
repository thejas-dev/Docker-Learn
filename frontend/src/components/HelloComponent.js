import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchMessageUrl, generateTokenUrl } from "../utils/ApiRoutes";

const HelloComponent = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

    // Function to generate a valid JWT token
    const generateToken = () => {
        return new Promise((resolve, reject) => {
            axios
            .get(generateTokenUrl)
            .then((response) => resolve(response.data.generatedToken))
            .catch((error) => reject(error));
        });
    }

  const fetchData = async () => {
    try {
      const token = await generateToken(); // Generate token dynamically
      const response = await axios.get(fetchMessageUrl, {
        headers: {
          authorization: token,
        },
      });
      setData(response.data);
    } catch (err) {
      setError(err.response ? err.response.data.error : "Network Error");
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Fetch Data</h1>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
};

export default HelloComponent;
