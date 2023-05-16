import React, { useContext } from "react";
import { UserState } from "../../context/LoggedInUserProvider";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from "@chakra-ui/react";

export default function ProjectMiniCard({ project }) {
  const { setFocusedProject } = UserState();

  return (
    <div
      className="mx-2 project-mini-card"
      //   onClick={setFocusedProject(project)}
    >
      <div>
        <img src={project.imgSource}></img>
      </div>
      <div>
        <p>{project.title}</p>
      </div>
      <div>
        {/* <button onClick={() => setFocusedProject(project)}>View</button> */}
        <Tabs variant="soft-rounded" colorScheme="pink">
          <TabList>
            <Tab onClick={() => setFocusedProject(project)}>View</Tab>
          </TabList>
        </Tabs>
      </div>
    </div>
  );
}
