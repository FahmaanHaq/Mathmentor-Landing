/**
 * Base URL for the Mathmentor main app (Mathmentor-Main).
 * All primary CTA links and "Start" / "Sign up" buttons point here.
 * Configurable via the VITE_MAIN_APP_URL environment variable.
 */
export const APP_BASE_URL =
  import.meta.env.VITE_MAIN_APP_URL ?? 'https://mathmentor-main.vercel.app';
