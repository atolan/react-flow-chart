//importing react
import * as React from "react";

//importing react dom to render react
import ReactDOM from "react-dom";
//styling of components
import styled from "styled-components";

//for flowchart to work
import { FlowChartWithState } from "@mrblenny/react-flow-chart";

//the data of the chart intial value
import { chartSimple } from "./misc/exampleChartState";

//components to import
//sidebar for sidebar
//sidebaritem to put items in sidebar
import { Content, Page, Sidebar, SidebarItem } from "./components";

//importing the items to be used in the sidebar
import {
  ToggleOn,
  CheckBox,
  DeviceHub,
  PlayCircleOutline,
  Timer,
  Gesture
} from "@material-ui/icons";

//the styles
const Message = styled.div`
  margin: 10px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.05);
`;
//the styles
const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  padding-top: 20px;
  font-weight: 500;
  svg {
    position: relative;
    top: 4px;
  }
`;
//the styles
const HRow = styled.hr`
  border: 1px solid yellow;
  margin-bottom: 15px;
  width: 300px;
`;

//the default app that we will export using class component
export default class App extends React.Component {
  render() {
    return (
      //return page that containts the content which are the chartsimple
      <Page>
        <Content>
          <FlowChartWithState initialValue={chartSimple} />
        </Content>
        <Sidebar>
          <Title>
            <Gesture /> Pluggit Dashboard
          </Title>
          <HRow />

          <SidebarItem
            type="Triger"
            name="Passport"
            icon={<ToggleOn fontSize={"inherit"} />}
            ports={{
              port1: {
                id: "port1",
                type: "bottom",
                properties: {
                  custom: "property"
                }
              }
            }}
          />
          <SidebarItem
            type="Boolean"
            name="Utility Bill"
            icon={<CheckBox fontSize={"inherit"} />}
            ports={{
              port1: {
                id: "port1",
                type: "left",
                properties: {
                  div1: "111"
                }
              },
              port2: {
                id: "port1",
                type: "right",
                properties: {
                  div2: "222"
                }
              }
            }}
            properties={{
              custom: "property"
            }}
          />
          <SidebarItem
            type="Branch"
            name="Profile"
            icon={<DeviceHub fontSize={"inherit"} />}
            ports={{
              port1: {
                id: "port1",
                type: "left"
              },
              port2: {
                id: "port2",
                type: "right"
              },
              port3: {
                id: "port3",
                type: "top"
              },
              port4: {
                id: "port4",
                type: "bottom"
              },
              port5: {
                id: "port5",
                type: "left"
              },
              port6: {
                id: "port6",
                type: "right"
              },
              port8: {
                id: "port8",
                type: "bottom"
              },
              port9: {
                id: "port9",
                type: "left"
              },
              port10: {
                id: "port10",
                type: "right"
              },
              port12: {
                id: "port12",
                type: "bottom"
              }
            }}
          />
          <SidebarItem
            type="Action"
            name="Extras"
            icon={<PlayCircleOutline fontSize={"inherit"} />}
            ports={{
              port1: {
                id: "port1",
                type: "top",
                properties: {
                  div1: "111"
                }
              },
              port2: {
                id: "port1",
                type: "bottom",
                properties: {
                  div2: "222"
                }
              }
            }}
          />
          <SidebarItem
            type="Delay"
            name="Proof of Address"
            icon={<Timer fontSize={"inherit"} />}
            ports={{
              port1: {
                id: "port1",
                type: "top"
              },
              port2: {
                id: "port2",
                type: "bottom"
              },
              port3: {
                id: "port3",
                type: "top"
              },
              port4: {
                id: "port4",
                type: "bottom"
              }
            }}
          />
        </Sidebar>
      </Page>
    );
  }
}
