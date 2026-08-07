const graphNodes = [
  { label: "COHORT_A", type: "dataset", className: "node-a" },
  { label: "OMICS_01", type: "dataset", className: "node-b" },
  { label: "CLINICAL", type: "dataset", className: "node-c" },
  { label: "MODEL", type: "method", className: "node-d" },
  { label: "INFERENCE", type: "method", className: "node-e" },
  { label: "VALIDATE", type: "gate", className: "node-f" },
  { label: "EVIDENCE", type: "evidence", className: "node-g" },
  { label: "DECISION", type: "decision", className: "node-h" },
];

const graphLines = [
  "line-1",
  "line-2",
  "line-3",
  "line-4",
  "line-5",
  "line-6",
  "line-7",
  "line-8",
  "line-9",
];

export function EvidenceGraph() {
  return (
    <div className="evidence-graph" aria-label="Biomedical datasets pass through analysis and validation to produce defensible evidence for decisions">
      <div className="graph-topline">
        <span>EVIDENCE NETWORK</span>
        <span>TRACE ID · TRS-2601</span>
      </div>
      <div className="graph-canvas" aria-hidden="true">
        <div className="graph-grid" />
        {graphLines.map((line) => (
          <span className={`graph-line ${line}`} key={line} />
        ))}
        {graphNodes.map((node) => (
          <div className={`graph-node ${node.type} ${node.className}`} key={node.label}>
            <span className="node-pulse" />
            <span>{node.label}</span>
          </div>
        ))}
        <div className="validation-ring ring-one" />
        <div className="validation-ring ring-two" />
        <span className="graph-annotation annotation-a">SOURCE / 03</span>
        <span className="graph-annotation annotation-b">CHECKS / 12</span>
        <span className="graph-annotation annotation-c">CONFIDENCE / 0.94</span>
      </div>
      <ol className="graph-legend">
        <li><span>01</span> Data</li>
        <li><span>02</span> Method</li>
        <li><span>03</span> Validation</li>
        <li><span>04</span> Evidence</li>
        <li><span>05</span> Decision</li>
      </ol>
    </div>
  );
}
