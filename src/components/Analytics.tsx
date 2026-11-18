'use client';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { captureAttribution, track } from '@/lib/track';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * GA4 with SPA page_view tracking and one delegated listener for click-to-call and CTA clicks
 * (a single listener prevents duplicate events). Respects Global Privacy Control.
 */
export function Analytics() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => { captureAttribution(); }, [pathname]);

  useEffect(() => {
    if (!GA_ID || typeof window.gtag !== 'function') return;
    if (first.current) { first.current = false; return; } // initial page_view sent by config
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const placement = a.getAttribute('data-cta') || 'inline';
      if (href.startsWith('tel:')) track('click_to_call', { placement, page_path: window.location.pathname });
      else if (href.startsWith('/contact/')) track('contact_click', { placement, page_path: window.location.pathname });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  if (!GA_ID) return null;
  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        var gpc = navigator.globalPrivacyControl === true;
        gtag('consent', 'default', { analytics_storage: gpc ? 'denied' : 'granted', ad_storage: gpc ? 'denied' : 'granted', ad_user_data: gpc ? 'denied' : 'granted', ad_personalization: gpc ? 'denied' : 'granted' });
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { anonymize_ip: true });
      `}</Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
    </>
  );
}
