import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/*.mdx"],

  // 👈 Add this
  framework: "@storybook/react-vite",

  addons: ["@storybook/addon-themes"]
};

export default config;
