import React from "react";
import travelly from "../../images/travelly.png";
import { UserState } from "../../context/LoggedInUserProvider";
import "./Project.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from "@chakra-ui/react";

export default function Project({ project }) {
  //   const { focusedProject } = UserState();
  return (
    <div>
      <h3>{project.title}</h3>
      <div className="d-flex flex-column flex-md-row w-100 align-items-center align-items-md-start justify-content-start">
        <div className="image-div">
          <img className="rounded" src={project.imgSource}></img>
        </div>
        <div className="d-flex mx-3  w-75">
          <Tabs variant="soft-rounded" colorScheme="pink">
            <TabList>
              <Tab>Description</Tab>
              <Tab>Technologies</Tab>
              <Tab>Links</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>{project.description}</p>
              </TabPanel>
              <TabPanel>
                <p>{project.technologies}</p>
              </TabPanel>
              <TabPanel>
                <p>
                  Repository Link:{" "}
                  <a href={project.repoLink} className="link">
                    {project.repoLink}
                  </a>
                  <br></br>
                  Deployed Link:{" "}
                  <a href={project.deployedLink} className="link">
                    {project.deployedLink}
                  </a>
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
