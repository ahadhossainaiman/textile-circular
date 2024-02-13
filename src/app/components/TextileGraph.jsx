"use client";
import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

// const initialNodes = [
//   { id: "1", position: { x: 0, y: 0 }, data: { label: "Aiman" } },
//   { id: "2", position: { x: 0, y: 100 }, data: { label: "Hasiv" } },
//   { id: "3", position: { x: 100, y: 200 }, data: { label: "Hemal" } },
//   { id: "4", position: { x: 300, y: 400 }, data: { label: "Jeyan" } },
//   { id: "5", position: { x: 500, y: 600 }, data: { label: "Anika" } },
// ];
const center = { x: 250, y: 300 }; // Center of the circle
const radius = 150; // Radius of the circle

const initialNodes = [
  {
    id: "1",
    position: {
      x: center.x + radius * Math.cos(0),
      y: center.y + radius * Math.sin(0),
    },
    data: { label: "Aiman" },
  },
  {
    id: "2",
    position: {
      x: center.x + radius * Math.cos(Math.PI / 3),
      y: center.y + radius * Math.sin(Math.PI / 3),
    },
    data: { label: "Hasiv" },
  },
  {
    id: "3",
    position: {
      x: center.x + radius * Math.cos((2 * Math.PI) / 3),
      y: center.y + radius * Math.sin((2 * Math.PI) / 3),
    },
    data: { label: "Hemal" },
  },
  {
    id: "4",
    position: {
      x: center.x + radius * Math.cos(Math.PI),
      y: center.y + radius * Math.sin(Math.PI),
    },
    data: { label: "Jeyan" },
  },
  {
    id: "5",
    position: {
      x: center.x + radius * Math.cos((4 * Math.PI) / 3),
      y: center.y + radius * Math.sin((4 * Math.PI) / 3),
    },
    data: { label: "Anika" },
  },
  {
    id: "6",
    position: {
      x: center.x + radius * Math.cos((5 * Math.PI) / 3),
      y: center.y + radius * Math.sin((5 * Math.PI) / 3),
    },
    data: { label: "NewNode" },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e5-1", source: "5", target: "1" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e3-5", source: "3", target: "5" },
  { id: "e4-1", source: "4", target: "1" },
];

const TextileGraph = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default TextileGraph;
