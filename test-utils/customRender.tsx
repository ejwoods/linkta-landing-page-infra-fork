import { ReactElement } from "react";
import { render, RenderOptions } from '@testing-library/react';
import { MantineProvider } from "@mantine/core";

const MantineProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider>
      {children}
    </MantineProvider>
  )
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: MantineProviderWrapper, ...options});
