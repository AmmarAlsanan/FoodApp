import { useState, useEffect } from "react";
import yelp from "../../section8/section9/API/yelpApi";

export default () => {
  const [result, setResults] = useState([]);
  const [errorMS, setErrorMS] = useState("");

  //create async call
  const searchApi = async (item) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: item,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMS("something went wrong ");
    }
  };

  //call api with pasta using useEffect()
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [result, errorMS, searchApi];
};
