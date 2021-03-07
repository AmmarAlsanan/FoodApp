import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer qrKQhBxKa2IQ8e-h3rlAAHu6f4CW1sD4q6LjoBiCoxcbXynZkiXj8Fv4nMvGkWYl1dKEGla2BSE9Gxty0PGeg-fOJ0UkyBqC_bGTN7C63IFT-TsY46fpK_QvHURDYHYx",
  },
});
