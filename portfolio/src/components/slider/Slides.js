import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    id:1,
    src:
      "https://res.cloudinary.com/seuz716/image/upload/v1667796640/equipo_de_trabajo_hnfhzt.jpg",
    alt: "Project 1",
    desc: "Project 1",
  },
  {
    id:2,
    src:
      "https://res.cloudinary.com/seuz716/image/upload/v1667796639/equipo_de_trabajo_II_x4ahjm.jpg",
    alt: "Project 2",
    desc: "Project 2",
  },
  {
    id:3,
    src:
      "https://res.cloudinary.com/seuz716/image/upload/v1667796907/desarrolloIII_yhsk2r.jpg",
    alt: "Project 3",
    desc: "Project 3",
  },
  {
    id:4,
    src:
      "https://res.cloudinary.com/seuz716/image/upload/v1667796907/desarrolloIII_yhsk2r.jpg",
    alt: "Project 4",
    desc: "Project 4",
  },
];

const slides = slidesInfo.map((slide) => (
  <div  key={slide.id} className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div  className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;