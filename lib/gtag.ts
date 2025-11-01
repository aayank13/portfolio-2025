/* eslint-disable @typescript-eslint/no-explicit-any */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID! || '';

export const isGAEnabled = GA_MEASUREMENT_ID !== '';

export const pageview = (url: string) => {
  if (!isGAEnabled) return;
  if (typeof window === 'undefined') return;

  (window as any).gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: url,
    page_title: document.title,
  });
};

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
  if (!isGAEnabled) return;
  if (typeof window === 'undefined') return;
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};

