/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_USE_MSW: string;
  readonly VITE_API_DEBUG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
