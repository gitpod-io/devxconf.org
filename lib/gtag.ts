const GA_TRACKING_ID: string = process.env.GA_TRACKING_ID || "";

export const pageview = (url: URL): void => {
  (window as any).gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const event = ({ action, category, label, value }: GTagEvent): void => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};