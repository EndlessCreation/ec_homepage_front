import React from "react";
import styled from "styled-components";
import StudInfo from "./StudInfo";
import { useStudState } from "../../Context/StudProvider";
const Circle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  margin-bottom: 16px;
`;

function StuCircle() {
  const studs = useStudState();
  return (
    <Circle>
      {studs.map((stud) => (
        <StudInfo
          key={stud.id}
          id={stud.id}
          name={stud.name}
          tech={stud.tech}
          tech2={stud.tech2}
          part={stud.part}
        />
      ))}
    </Circle>
  );
}

export default StuCircle;
