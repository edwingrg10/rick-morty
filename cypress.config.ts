import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    "baseUrl": "http://localhost:4200",
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "screenshotsFolder": "cypress/screenshots",
    "video": true,
    "videoCompression": 10,
    "videosFolder": "cypress/videos",
    "env": {
      "GITLAB_CI": "true",
      "NODE_OPTIONS": "--max-old-space-size=4096"
    },
    "experimentalMemoryManagement": true,
    "testIsolation": false

  },
});
