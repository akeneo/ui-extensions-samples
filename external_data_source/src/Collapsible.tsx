import React, { useState } from "react";

interface CollapsibleProps {
  label?: string;
  children: React.ReactNode;
  color?: string;
  defaultCollapsed?: boolean;
  disabled?: boolean;
}

const Collapsible: React.FC<CollapsibleProps> = ({
  label,
  children,
  color = "#000",
  defaultCollapsed = false,
  disabled = false,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  if (disabled) return <>{children}</>;

  return (
    <div>
      <div
        onClick={() => setCollapsed(!collapsed)}
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          marginBottom: 4,
          color,
        }}
      >
        {label} {collapsed ? "▸" : "▾"}
      </div>
      {!collapsed && <div>{children}</div>}
    </div>
  );
};

export default Collapsible;
