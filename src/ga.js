export const GA_ID = import.meta.env.VITE_GA_ID;

function injectScript(id) {
  if (document.getElementById("ga-script")) return;
  const s = document.createElement("script");
  s.async = true;
  s.id = "ga-script";
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
}

export function loadGA() {
  if (!GA_ID || typeof window === "undefined") return;

  injectScript(GA_ID);

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag("js", new Date());
  // для SPA вимикаємо авто page_view
  window.gtag("config", GA_ID, { send_page_view: false });
}

export function pageview(path) {
  if (!GA_ID || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path,
  });
}

export function gaEvent(name, params = {}) {
  if (!GA_ID || !window.gtag) return;
  window.gtag("event", name, params);
}
