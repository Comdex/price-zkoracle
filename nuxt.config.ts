// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
  },

  runtimeConfig: {
    oraclePublicKey: "B62qm1uQcaZ9Ck8qXuNt46u3K5SQrZ8x7dDfurUFv4VuV8HVMBv6g6r",
    oraclePrivateKey: "EKF76fJsTc5JBeLBrWxGAwGhSvochWyhJBwWqFTro9Dqyai5J1bn",
  },

  vite: {
    build: { target: "es2020" },
    optimizeDeps: { esbuildOptions: { target: "es2020" } },
  },

  ssr: false,
});
