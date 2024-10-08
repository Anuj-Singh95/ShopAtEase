import React from "react";
import banner1 from "./../images/slider-imgs/banner1.jpg";
import banner2 from "./../images/slider-imgs/banner2.jpg";
import banner3 from "./../images/slider-imgs/banner3.jpg";

export default function Crousel(props) {
  // const [searchKey, setSearchKey]= useState('');

  // const changeHandler = (event)=>{
  //     setSearchKey(event.target.value);
  // }
  // const submitHandler = (event) => {
  //     event.preventDefault();
  //     props.onSearch(searchKey);
  //   };
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style={{ objectFit: "contain !important" }}
    >
      <div className="carousel-inner" id="carousel">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
