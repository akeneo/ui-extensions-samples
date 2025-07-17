import React from "react";
import Collapsible from "./Collapsible";

export type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];
interface JsonObject {
  [key: string]: JsonValue;
}

function formatLabel(label: string | undefined): string {
  if (!label) return "";
  return label
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatValue(value: JsonValue): React.ReactNode {
  if (typeof value === "string") {
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

const depthColors = ["#994AFF", "#4B7EFF"];

const JsonRenderer: React.FC<{ data: JsonValue; depth?: number; label?: string }> = ({
  data,
  depth = 0,
  label,
}) => {
  const color = depthColors[depth % depthColors.length];
  const isCollapsible = depth > 0;

  if (Array.isArray(data)) {
    return (
      <div
        style={{
          paddingLeft: 16,
          borderLeft: depth === 0 ? "" : "2px solid " + color,
          marginBottom: 4,
          marginTop: 4,
        }}
      >
        <Collapsible
          label={formatLabel(label)}
          color={color}
          disabled={!isCollapsible}
        >
          {data.map((item, index) => (
            <div key={index} style={{ marginBottom: 4 }}>
              <strong>Item {index + 1}:</strong>{" "}
              <JsonRenderer data={item} depth={depth + 1} />
            </div>
          ))}
        </Collapsible>
      </div>
    );
  }

  if (typeof data === "object" && data !== null) {
    return (
      <div
        style={{
          paddingLeft: 16,
          borderLeft: depth === 0 ? "" : "2px solid " + color,
          marginBottom: 4,
          marginTop: 4,
        }}
      >
        <Collapsible
          label={formatLabel(label)}
          color={color}
          disabled={!isCollapsible}
        >
          {Object.entries(data).map(([key, value]) => (
            <div key={key} style={{ marginBottom: 4 }}>
              {typeof value === "object" && value !== null ? (
                <JsonRenderer
                  data={value}
                  depth={depth + 1}
                  label={key}
                />
              ) : (
                <>
                  <strong>{formatLabel(key)}:</strong> {formatValue(value)}
                </>
              )}
            </div>
          ))}
        </Collapsible>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: 4 }}>
      {label && <strong>{formatLabel(label)}:</strong>} {formatValue(data)}
    </div>
  );
};

export default JsonRenderer;
