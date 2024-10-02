import React from 'react';
import type { Node, NodeTypes } from "reactflow";
import ReactFlow, { Handle, Position } from 'reactflow';
import "./styles.css";

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

const labels2urls: {[key: string]: string} = {
  "LVChat": "https://arxiv.org/abs/2402.12079",
  "MemoryLLM": "https://arxiv.org/abs/2402.04624",
  "KnowledgeWashing": "https://arxiv.org/abs/2405.16720",
};

// Define a custom node component
function BaseNode({ data }:{data: any}) {
  return (
    <div className="existing-node">
      {/* <div>{data.label}</div> */}
      <a href={"https://arxiv.org/abs/2409.13265"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        {data.label}
      </a>
      <Handle type="source" position={Position.Right} id="rightHandle" />
      <Handle type="source" position={Position.Bottom} id="bottomHandle" />
    </div>
  );
}


// Define a custom node component
function MemoryLLM({ data }:{data: any}) {
  return (
    <div className="existing-node">
      <a href={labels2urls[data.label]} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        {data.label}
      </a>
      <Handle type="target" position={Position.Left} id="leftHandle" />
      <Handle type="source" position={Position.Right} id="rightHandle" />
    </div>
    
  );
}

// Define a custom node component
function MemoryLLM2({ data }:{data: any}) {
  return (
    <div className="ongoing-node">
      <div>{data.label}</div>
      <Handle type="target" position={Position.Left} id="leftHandle" />
      <Handle type="source" position={Position.Bottom} id="rightHandle" />
    </div>
  );
}

// Define a custom node component
function MemoryLLM3({ data }:{data: any}) {
  return (
    <div className="future-node">
      <div>{data.label}</div>
      <Handle type="source" position={Position.Left} id="leftHandle" />
      <Handle type="target" position={Position.Top} id="topHandle" />
      <Handle type="source" position={Position.Right} id="rightHandle" />
    </div>
  );
}

// Define a custom node component
function MultiModal({ data }:{data: any}) {
  return (
    <div className="future-node">
      <div>{data.label}</div>
      <Handle type="target" position={Position.Left} id="leftHandle" />
      <Handle type="source" position={Position.Bottom} id="bottomHandle" />
    </div>
  );
}

// Define a custom node component
function LVChat({ data }:{data: any}) {

  return (
    <div className="existing-node">
      <a href={labels2urls[data.label]} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        {data.label}
      </a>
      <Handle type="target" position={Position.Top} id="topHandle" />
    </div>
  );
}

// Define a custom node component
function KUNode({ data }:{data: any}) {
  return (
    <div className="existing-node">
      {/* <div>{data.label}</div> */}
      <a href={"https://arxiv.org/abs/2405.16720"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        {data.label}
      </a>
      <Handle type="target" position={Position.Top} id="topHandle" />
    </div>
  );
}

// Define a custom node component
function FutureNode({ data }:{data: any}) {
  return (
    <div className="future-node">
      <div>{data.label}</div>
      <Handle type="target" position={Position.Left} id="leftHandle" />
      <Handle type="source" position={Position.Right} id="rightHandle" />
    </div>
  );
}

// Define a custom node component
function KINode({ data }:{data: any}) {
  return (
    <div className="existing-node">
      {/* <div>{data.label}</div> */}
      <a href={"https://arxiv.org/abs/2410.00487"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        {data.label}
      </a>
      <Handle type="target" position={Position.Top} id="topHandle" />
    </div>
  );
}

export const initialNodes = [
  { 
    id: "memoryllm", 
    position: { x: 0, y: 0 }, 
    data: { label: "MemoryLLM"}, 
    type: 'memoryllm',
  },
  // Use the custom node type for sullm
  { 
    id: "sullm", 
    type: "baseNode", 
    position: { x: -200, y: 0 }, 
    data: { label: "Self-Updatable LLMs" } 
  },
  { 
    id: "knowledgeInjection", 
    type: 'knowledgeInjection',
    position: { x: -200, y: 100 },
    data: { label: "Inject Knowledge into LLMs (Ongoing)" } },
  { 
    id: "memoryllm2", 
    position: { x: 200, y: 0 }, 
    data: { label: "MemoryLLM 2.0 (Ongoing)" }, 
    type: 'memoryllm2',
  },
  { 
    id: "memoryllm3", 
    position: { x: 200, y: 100 }, 
    data: { label: "Large Memory, Large Model" },
    type: 'memoryllm3',
  },
  { 
    id: "knowledgeWashing", 
    position: { x: 0, y: 150 }, 
    data: { label: "Disentangle Knowledge and Reasoning in LLMs" },
    type: 'knowledgeWashing',
  },
  {
    id: 'multimodal',
    position: {x: 400, y: 100},
    type: 'multimodal',
    data: {label: 'MultiModality'}
  },
  {
    id: 'lvchat',
    position: {x: 400, y: 200},
    type: 'lvchat',
    data: {label: 'LVChat'}
  }
];

// Register the custom node type
export const nodeTypes = {
  baseNode: BaseNode,
  memoryllm: MemoryLLM,
  memoryllm2: MemoryLLM2,
  memoryllm3: MemoryLLM3,
  knowledgeWashing: KUNode,
  future: FutureNode,
  knowledgeInjection: KINode,
  multimodal: MultiModal,
  lvchat: LVChat,
};
