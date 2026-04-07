import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";
import "./styles.css";
function ImageSlider({ url, limit = 5, page = 1 }) {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await axios.get(`${getUrl}?page=${page}&limit=${limit}`);

      if (response) {
        setData(response.data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  console.log(data);

  useEffect(() => {
    if (url !== "") fetchData(url);
  }, [url]);

  if (loading) return <h1>Loading...</h1>;

  if (errorMsg !== null) return <h1>{errorMsg}</h1>;

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <div className="container">
      <BiLeftArrowCircle
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {data && data.length > 0
        ? data.map((item, index) => (
            <img
              src={item.download_url}
              alt={item.download_url}
              key={item.id}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BiRightArrowCircle onClick={handleNext} className="arrow arrow-right" />
      <span className="circle-indicators">
        {data && data.length > 0
          ? data.map((item, index) => (
              <button
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
                key={index}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
