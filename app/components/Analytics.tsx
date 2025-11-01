/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview, GA_MEASUREMENT_ID } from '@/lib/gtag';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    // Build URL including query string if present
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname ?? '/';

    const triggerPageview = () => {
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        pageview(url);
      }
    };

    // Fire immediately if gtag is ready
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      triggerPageview();
    } else {
      // Retry once after gtag loads
      const onLoad = () => triggerPageview();
      window.addEventListener('gtag-loaded', onLoad, { once: true });

      // Fallback timeout in case custom event never fires
      const t = setTimeout(triggerPageview, 1500);

      return () => {
        clearTimeout(t);
        window.removeEventListener('gtag-loaded', onLoad);
      };
    }
  }, [pathname, searchParams]);

  return null;
}
