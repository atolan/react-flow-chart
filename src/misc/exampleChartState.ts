import { IChart } from "@mrblenny/react-flow-chart";

// that chart that will appear and contain all the  items

export const chartSimple: IChart = {
  offset: {
    x: 300,
    y: 0
  },
  nodes: {
    node1: {
      id: "node1",
      type: "Passport",
      data: { label: "Input Node" },
      position: {
        x: 300,
        y: 100
      },
      ports: {
        port1: {
          id: "port1",
          type: "output",
          data: { label: "Input Node" },
          properties: {
            value: "yes"
          }
        }
      }
    },
    node2: {
      id: "node2",
      type: "Utility Bill",
      position: {
        x: 300,
        y: 300
      },
      ports: {
        port1: {
          id: "port1",
          type: "input"
        },
        port2: {
          id: "port2",
          type: "output"
        }
      }
    },
    node3: {
      id: "node3",
      type: "Profile",
      position: {
        x: 100,
        y: 600
      },
      ports: {
        port1: {
          id: "port1",
          type: "input"
        },
        port2: {
          id: "port2",
          type: "output"
        }
      }
    },
    node4: {
      id: "node4",
      type: "Proof of Address",
      position: {
        x: 500,
        y: 600
      },
      ports: {
        port1: {
          id: "port1",
          type: "input"
        },
        port2: {
          id: "port2",
          type: "output"
        }
      }
    }
  },
  links: {
    link1: {
      id: "link1",
      from: {
        nodeId: "node1",
        portId: "port1"
      },
      to: {
        nodeId: "node2",
        portId: "port1"
      },
      properties: {
        label: "example link label"
      }
    },
    link2: {
      id: "link2",
      from: {
        nodeId: "node2",
        portId: "port2"
      },
      to: {
        nodeId: "node3",
        portId: "port1"
      },
      properties: {
        label: "another example link label"
      }
    },
    link3: {
      id: "link3",
      from: {
        nodeId: "node2",
        portId: "port2"
      },
      to: {
        nodeId: "node4",
        portId: "port1"
      }
    }
  },
  selected: {},
  hovered: {}
};

// export const chartSimple: IChart = {
//   offset: {
//     x: 300,
//     y: 0
//   },
//   nodes: {
//     node1: {
//       id: "node1",
//       type: "Triger",
//       position: {
//         x: 300,
//         y: 100
//       },
//       ports: {
//         port1: {
//           id: "port1",
//           type: "output",
//           properties: {
//             value: "yes"
//           }
//         }
//       }
//     },
//     node2: {
//       id: "node2",
//       type: "input-output",
//       position: {
//         x: 300,
//         y: 300
//       },
//       ports: {
//         port1: {
//           id: "port1",
//           type: "input"
//         },
//         port2: {
//           id: "port2",
//           type: "output"
//         }
//       }
//     },
//     node3: {
//       id: "node3",
//       type: "input-output",
//       position: {
//         x: 100,
//         y: 600
//       },
//       ports: {
//         port1: {
//           id: "port1",
//           type: "input"
//         },
//         port2: {
//           id: "port2",
//           type: "output"
//         }
//       }
//     },
//     node4: {
//       id: "node4",
//       type: "input-output",
//       position: {
//         x: 500,
//         y: 600
//       },
//       ports: {
//         port1: {
//           id: "port1",
//           type: "input"
//         },
//         port2: {
//           id: "port2",
//           type: "output"
//         }
//       }
//     }
//   },
//   links: {
//     link1: {
//       id: "link1",
//       from: {
//         nodeId: "node1",
//         portId: "port1"
//       },
//       to: {
//         nodeId: "node2",
//         portId: "port1"
//       },
//       properties: {
//         label: "example link label"
//       }
//     },
//     link2: {
//       id: "link2",
//       from: {
//         nodeId: "node2",
//         portId: "port2"
//       },
//       to: {
//         nodeId: "node3",
//         portId: "port1"
//       },
//       properties: {
//         label: "another example link label"
//       }
//     },
//     link3: {
//       id: "link3",
//       from: {
//         nodeId: "node2",
//         portId: "port2"
//       },
//       to: {
//         nodeId: "node4",
//         portId: "port1"
//       }
//     }
//   },
//   selected: {},
//   hovered: {}
// };
