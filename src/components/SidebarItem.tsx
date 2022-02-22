//styling + connecting data
import * as React from "react";
//styling
import styled from "styled-components";
//flow chart
//react_flow_chart = which data should be sepcficified
// Inode related to properties
import { INode, REACT_FLOW_CHART } from "@mrblenny/react-flow-chart";

//styling
const Outer = styled.div`
  width: 130px;
  height: 110px;
  display: inline-block;
  margin: 10px;
  padding: 20px 0px;
  font-size: 14px;
  background: white;
  cursor: move;
  text-align: center;
  border-bottom: 2px solid #ffeb3b;
`;

const IconWrap = styled.div`
  font-size: 40px;
  color: #848484;
`;

export interface ISidebarItemProps {
  type: string;
  ports: INode["ports"];
  properties?: any;
  name: string;
  icon: ChildNode;
}

export const SidebarItem = ({
  type,
  ports,
  properties,
  name,
  icon
}: ISidebarItemProps) => {
  return (
    <Outer
      draggable={true}
      onDragStart={(event) => {
        return event.dataTransfer.setData(
          // which properties should json should have
          REACT_FLOW_CHART,
          JSON.stringify({ type, ports, properties, name })
        );
      }}
    >
      <IconWrap>{icon}</IconWrap>
      {name}
    </Outer>
  );
};
