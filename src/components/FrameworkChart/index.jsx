import React from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import Framework from "assets/framework.svg";

const labels = [
  "Discovery Call",
  "Problem Definition",
  "Requirements Gathering",
  "Solutions Architecture",
  "Strategic Analysis",
  "Impact Mapping",
  "Product Delivery",
  "Continuous Support",
];

// Dynamic node placement with slight randomness for interest
const initialNodes = labels.map((label, index) => ({
  id: String(index + 1),
  data: { label: `Step ${index + 1}: ${label}` },
  position: {
    x:
      index % 2 === 0
        ? index * 150
        : index * 150 + 100 + (Math.random() * 40 - 20), // zig-zag right on odd
    y: index * 100 + (Math.random() * 80 - 40), // some vertical variation
  },
}));

const initialEdges = labels
  .map((_, index) => {
    if (index < labels.length - 1) {
      return {
        id: `e${index + 1}-${index + 2}`,
        source: String(index + 1),
        target: String(index + 2),
        style: { stroke: "#3B82F6", strokeWidth: 2 },
        markerEnd: { type: "arrowclosed", color: "#3B82F6" },
      };
    }
    return null;
  })
  .filter(Boolean);

const FrameworkChart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  
  const onConnect = (params) => {
    setEdges((eds) => addEdge(params, eds));
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Small screens: show image */}
      <div className="sm:hidden w-full">
        <img
          src={Framework}
          alt="Framework"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Large screens: interactive chart */}
      <div className="hidden sm:flex flex-col items-center justify-start min-h-screen py-12 px-4">
        <div className="text-3xl font-ubuntu text-black text-center mb-6 md:text-5xl">
          Our Precision Framework
        </div>

        <div className="w-full max-w-6xl h-[70vh] bg-zinc-50 rounded-xl shadow-xl overflow-hidden">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            fitViewOptions={{ padding: 0.15 }}
          >
            <Controls />
            <Background />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
};

export default FrameworkChart;
