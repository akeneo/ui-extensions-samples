"use client";

import { ThemeProvider } from "styled-components";
import { connectorTheme, Helper, Button, SplitButton } from "akeneo-design-system";
import { useRouter } from 'next/navigation'

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

  return (
    <ThemeProvider theme={connectorTheme}>
      <Helper level="warning">
        You&apos;re navigating in a UI extension.
      </Helper>
      <Button
        href="/"
        level="primary"
      >
        Home
      </Button>
      <SplitButton
        label="iFrame PEF examples"
        level="secondary"
        onClick={function noRefCheck(){}}
      >
        <SplitButton.Item onClick={() => router.push('/examples/3d-rendering')}>
          Render 3d models
        </SplitButton.Item>
        <SplitButton.Item onClick={() => router.push('/examples/product-context-propagation')}>
          Product context switcher
        </SplitButton.Item>
        <SplitButton.Item onClick={() => router.push('/private/dashboard')}>
          Content with external authentication
        </SplitButton.Item>
      </SplitButton>
      <SplitButton
        label="iFrame Product Grid examples"
        level="secondary"
        onClick={function noRefCheck(){}}
      >
        <SplitButton.Item onClick={() => router.push('/examples/quick-action')}>
          Quick action
        </SplitButton.Item>
      </SplitButton>
      {children}
    </ThemeProvider>);
}
