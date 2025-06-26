import type { Edge, EdgeTypes } from "reactflow";

export const initialEdges = [
  { id: "memoryllm", 
    source: "sullm", 
    target: "memoryllm",
    animated: true, 
    sourceHandle: "rightHandle", 
    targetHandle: "rightHandle"},
  { 
    id: "sullm-to-ki", 
    source: "sullm", 
    target: "knowledgeInjection", 
    animated: true, 
    sourceHandle: "bottomHandle" },
  { 
    id: "memoryllm-1-to-2", 
    source: "memoryllm", 
    target: "memoryllm2", 
    animated: true,
    sourceHandle: 'rightHandle', 
    targetHandle: 'leftHandle' },
  { 
    id: "memoryllm-2-to-3", 
    source: "memoryllm2", 
    target: "memoryllm3",
    animated: true,
    sourceHandle: 'bottomHandle',
    targetHandle: 'topHandle'
  },
  { 
    id: "memoryllm-disentangle", 
    source: "memoryllm3", 
    animated: true, 
    target: "knowledgeWashing",
    sourceHandle: 'leftHandle'
  },
  {
    id: "memoryllm-multimodality",
    source: "memoryllm3",
    animated: true,
    target: 'multimodal',
    sourceHandle: 'rightHandle',
    targetHandle: 'leftHandle'
  },
  {
    id: "multimodality-lvchat",
    source: "multimodal",
    animated: true,
    target: 'lvchat',
    sourceHandle: 'bottomHandle',
    targetHandle: 'topHandle'
  },
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
