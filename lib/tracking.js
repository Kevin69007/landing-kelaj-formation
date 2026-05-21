/**
 * Utilitaire de tracking Meta Pixel + dataLayer (préparation GTM)
 * Kelaj Formation — Landing Page
 */

export const trackMeta = (eventName, parameters = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, parameters);
  }
};

export const trackMetaCustom = (eventName, parameters = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, parameters);
  }
};

export const pushDataLayer = (event, data = {}) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...data,
    });
  }
};

export const trackEvent = (eventName, parameters = {}) => {
  trackMeta(eventName, parameters);
  pushDataLayer(eventName.toLowerCase(), {
    platform: "meta",
    event_name: eventName,
    ...parameters,
  });
};
