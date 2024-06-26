// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  transformerVariantGroup,
  transformerDirectives,
} from "unocss";

import presetWind from "@unocss/preset-wind";

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        Inter: "Inter:400,500,600,700,800,900",
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
