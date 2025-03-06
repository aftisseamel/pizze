import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './test', // <-- Assurez-vous que ce dossier existe
    timeout: 30000,
    retries: 2,
    use: {
      headless: true,
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
    },
  });
