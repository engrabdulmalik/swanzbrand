import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [
    react(),
    chunkSplitPlugin({
      strategy: "unbundle",
      customSplitting: {
        container: [/src\/container/],
      },
    }),
  ],
  optimizeDeps: {
    include: [
      "@mui/material",
      "@mui/icons-material",
      "@mui/system",
      "@emotion/react",
      "@emotion/styled",
      "@material-ui/core",
      "@reduxjs/toolkit",
      "@vitejs/plugin-react",
      "axios",
      "formik",
      "formik-material-ui",
      "react",
      "react-dom",
      "react-material-ui-carousel",
      "react-redux",
      "react-router-dom",
      "redux",
      "redux-devtools-extension",
      "redux-thunk",
      "sweetalert2",
      "yup",
    ],
    exclude: ["fsevents"],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
  base: isProduction ? "/static/" : "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          materialUI: ["@mui/material", "@mui/icons-material"],
        },
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: (assetInfo) => {
          const assetInfoExt = assetInfo.name.split(".").pop();
          let folder = "assets";
          if (assetInfoExt === "css") {
            folder = "styles";
          } else if (
            ["png", "jpg", "jpeg", "svg", "gif"].includes(assetInfoExt)
          ) {
            folder = "images";
          } else if (["js", "mjs", "cjs"].includes(assetInfoExt)) {
            folder = "scripts";
          }
          return `${folder}/[name][extname]`;
        },
      },
    },
  },
});
