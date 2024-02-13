"use client"
import { useCallback } from 'react';
import ReactFlow, {
MiniMap,
Controls,
Background,
useNodesState,
useEdgesState,
addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
{ id: '1', position: { x: 0, y: 0 }, data: { label: 'Aiman' } },
{ id: '2', position: { x: 0, y: 100 }, data: { label: 'Hasiv' } },
{ id: '3', position: { x: 100, y: 200 }, data: { label: 'Hemal' } },
{ id: '4', position: { x: 300, y: 400 }, data: { label: 'Jeyan' } },
{ id: '5', position: { x: 500, y: 600 }, data: { label: 'Anika' } },
];

const initialEdges = [
{ id: 'e1-2', source: '1', target: '2' },
{ id: 'e1-2', source: '2', target: '3' },
{ id: 'e1-2', source: '3', target: '4' },
{ id: 'e1-2', source: '4', target: '5' },
{ id: 'e1-2', source: '1', target: '1' }
];

const TextileGraph = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

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
)
};

export default TextileGraph;