import React from "react";
import travellyImg from "../../images/travelly.png";
import macromealsImg from "../../images/macromeals.png";
import mongooseModelTemplatesImg from "../../images/mongoosemodeltemplates.png";
import ProjectMiniCard from "../ProjectMiniCard/ProjectMiniCard";
import { UserState } from "../../context/LoggedInUserProvider";

export default function ProjectCarousel() {
  const { setFocusedProject } = UserState();
  const travelly = {
    title: "Travelly",
    description:
      "Travelly is a travel-based social media application, which aims to safely connect solo-travellers with like-minded people. The application currently functions as a concept demonstration, and supports two types of user - a travel-provider (who is permitted to advertise trips on the application) and a traveller (who can join trips via the application and converse with others who are travelling to the same destination via a live chat that is created for each trip on the app. We also were keen to implement an element of gamification for the travel experience, and have implemented 'badges' that a traveller can achieve. Each badge has a list of countries required for the traveller to visit by booking themselves on trips through Travelly, once the user has attended all of the countries on the list, they earn the badge and it is displayed on their profile.",
    technologies:
      "Technologies used in this application include JavaScript, React, Mongoose, MongoDb, GraphQL, Express, node.js,  Amazon Web Services S3 Bucket, Socket IO  and Chakra UI.",
    repoLink: "https://github.com/laurawalters1/travelly-app",
    deployedLink: "https://gentle-lowlands-70428.herokuapp.com/#/dashboard",
    imgSource: travellyImg,
  };
  const macromeals = {
    title: "Macro Meals",
    description:
      "Macro Meals is a meal planning app, which will take in values such as your height, weight, gender and activity level, plus your health goal, and generate a custom daily calorie recommendation, along with a suggested macro-split. Macro meals will also give you a 5 day suggested meal plan which adheres to the calorie recommendation, and provide links to recipes for these meals. Macro Meals also allows the user to favourite a meal that they particularly enjoyed, which then gets saved to their virtual cook book.",
    technologies:
      "Technologies used in this application include JavaScript, Tailwind CSS, Edamam API, Rapid Fitness Calculator api and jQuery",
    repoLink: "https://github.com/laurawalters1/meal-planner-project-1",
    deployedLink: "https://laurawalters1.github.io/meal-planner-project-1/",
    imgSource: macromealsImg,
  };
  const mongooseModelTemplates = {
    title: "Mongoose Model Templates",
    description:
      "Mongoose Model Templates is a node package I created to assist with my own development process as well as that of others. The package allows the user to dynamically generate template mongoose models via the command line, and takes in a model name, with the option to add a flag to the command in order for the model to also be exported from the index file of the models folder. Additionally, if the user runs the command prior to having created a models folder, the folder will be created for them.",
    technologies:
      "Technologies used in this application include node.js and fs module",
    repoLink: "https://github.com/laurawalters1/mongoose-model-generator",
    deployedLink: "https://www.npmjs.com/package/mongoose-model-templates",
    imgSource: mongooseModelTemplatesImg,
  };
  const projects = [travelly, macromeals, mongooseModelTemplates];
  return (
    <div className="d-flex">
      {projects.map((p) => (
        <ProjectMiniCard project={p}></ProjectMiniCard>
      ))}
    </div>
  );
}
