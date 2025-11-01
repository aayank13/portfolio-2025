/* eslint-disable @typescript-eslint/no-explicit-any */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!;

// Track a page view
export const pageview = (url: string) => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  (window as any).gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: url,
    page_title: document.title,
  });
};

// Track a custom event
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
