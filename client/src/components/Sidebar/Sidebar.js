import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/react-splide/css";
import CLPT from "../../images/CLPT.png";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { TechnologyData } from "../../resources/TechnologyData";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar  w-100">
      <Splide
        options={{
          rewind: true,
          type: "loop",
          direction: "rtl",
          height: "10vh",
          focus: "start",
          autoHeight: false,
          arrows: false,
          pagination: false,
          drag: "free",
          //   gap: "1rem",
          perPage: 8,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: true,
            speed: -1,
          },
        }}
        extensions={{ AutoScroll }}
        aria-label="React Splide Example"
      >
        {TechnologyData.map((tech, index) => {
          return (
            <SplideSlide>
              <div className="mx-4  tech-i">
                <i className={`${tech.icon} tech-i`}></i>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
