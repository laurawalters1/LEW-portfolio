import React from "react";
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";
import WorkHistory from "../../components/WorkHistory/WorkHistory";
import pic from "../../images/laurawalters4.jpeg";
import jumar from "../../images/jumar.png";
import jumarScrum from "../../images/jumarScrum.png";
import CLPT from "../../images/CLPT.png";
import edx from "../../images/edx.png";
import "./HomePage.css";
export default function HomePage() {
  return (
    <div className="page d-flex flex-column align-items-center">
      <div className="top-section d-flex flex-column align-items-center">
        <div className="hero d-flex flex-column align-items-center mt-5 mb-2 w-50">
          <img class="profile-img mb-3" src={pic} alt="Card image cap" />
          <h1 className="title text-center">
            Laura Walters - Software Developer
          </h1>
        </div>
        <p className="bio text-center w-50 mb-5">
          At an early stage in my software development career, I am keen to
          seize opportunities to take on new challenges, expose myself to new
          technologies and expand my skills. I currently work as a graduate
          software developer at Jumar, and enjoy the collaborative and agile
          process we use to develop solutions.
        </p>

        <div className="link-container position-relative">
          <Link
            to="work-history-1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="employment-history-link link "
          >
            Employment History
          </Link>
        </div>
      </div>
      <WorkHistory
        title={"Jumar - Graduate Software Developer"}
        imageUrl={jumar}
        date={"Jan 2023 - Present"}
        description="In my current role I am working in agile development, creating an
        internal dashboard to be used for viewing data relating to the
        recruitment side of the business. To do this I am using C# to query
        data from an external api, an Azure Data factory to flatten the JSON
        data that is returned from the api call so that it can be stored in
        table format in an Azure SQL database. I am finally using PowerBI to
        formulate the visuals for this data."
        alignment={"text-end"}
      ></WorkHistory>
      <WorkHistory
        title={"EdX - Teaching Assistant"}
        imageUrl={edx}
        date={"Dec 2022 - March 2023"}
        description="In my current evening role I work as a teaching assistant on a Frontend Web Development
        bootcamp. For this role I am tasked with assisting students with coding activities in breakout
        rooms, including running through the solutions, taking questions and making sure
        misunderstandings are addressed."
        alignment={"text-start"}
      ></WorkHistory>
      <WorkHistory
        title={"Jumar - Graduate Scrum Master"}
        imageUrl={jumarScrum}
        date={"Sept 2022 - Jan 2023"}
        description="Prior to my role as a graduate software developer at Jumar, I worked a s graduate Scrum Master. I chose to start out in this role as I do have a natural inclination towards taking on a leadership role, and being the driving force behind a team. In this role I worked on a frontend project with a team of graduates, and lead discussions with the Product Owner, took requirements and made sure the team stayed productive and on track by encouraging collaboration and communication."
        alignment={"text-end"}
      ></WorkHistory>
      <WorkHistory
        title={"Central Learning Partnership Trust - Apprentice Web Developer"}
        imageUrl={CLPT}
        date={"Dec 2021 - Aug 2022"}
        description="In this role, I worked alongside two other developers to build projects required by the trust
        to support school and trust operations, using PHP and Laravel. I contributed to a long-term
        project that aimed to enable an efficient point of reference for the status of staff documents
        across the trust. In this project I had input on both front-end and back-end code, and
        frequently used my own initiative and innovation to suggest new ideas for features that
        could be included in the project to improve user-experience, and thus the quality of the
        overall project, and could see that my input was valued and often my ideas were utilised, or
        I was provided with constructive feedback which I can use to improve my ideas in the
        future."
        alignment={"text-start"}
      ></WorkHistory>
    </div>
  );
}
