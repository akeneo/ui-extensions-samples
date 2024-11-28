"use client";

import { ThemeProvider } from "styled-components";
import { connectorTheme } from "akeneo-design-system";

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={connectorTheme}>{children}</ThemeProvider>;
}
