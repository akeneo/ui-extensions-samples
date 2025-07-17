import React from "react";

type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];
interface JsonObject {
  [key: string]: JsonValue;
}

function formatLabel(label: string): string {
  return label
    .replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatValue(value: JsonValue): React.ReactNode {
  if (typeof value === "string") {
    // Date string check
    const isoDate = Date.parse(value);
    if (!isNaN(isoDate) && value.includes("T")) {
      return new Date(value).toLocaleString();
    }
    return value;
  }

  if (typeof value === "number") {
    if (value > 1000 && value < 1000000000) return `$${value.toFixed(2)}`;
    return value;
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (value === null) {
    return <i style={{ color: "#999" }}>null</i>;
  }

  return null;
}

const JsonRenderer: React.FC<{ data: JsonValue }> = ({ data }) => {
  if (Array.isArray(data)) {
    return (
      <div style={{ paddingLeft: 16, borderLeft: "2px solid #eee", marginBottom: 4, marginTop: 4 }}>
        {data.map((item, index) => (
          <div key={index} style={{ marginBottom: 4 }}>
            <strong>Item {index + 1} : </strong>
            <JsonRenderer data={item} />
          </div>
        ))}
      </div>
    );
  }

  if (typeof data === "object" && data !== null) {
    return (
      <div style={{ paddingLeft: 16, borderLeft: "2px solid #eee", marginBottom: 4, marginTop: 4 }}>
        {Object.entries(data).map(([key, value]) => (
          <div key={key} style={{ marginBottom: 4 }}>
            <strong>{formatLabel(key)} : </strong>{" "}
            {typeof value === "object" ? <JsonRenderer data={value} /> : formatValue(value)}
          </div>
        ))}
      </div>
    );
  }

  return <>{formatValue(data)}</>;
};

export default JsonRenderer;
