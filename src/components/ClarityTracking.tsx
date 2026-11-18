'use client';
import Script from 'next/script';

// Microsoft Clarity (heatmaps + session recordings). Skipped when the browser sends Global Privacy Control.
const ID = process.env.NEXT_PUBLIC_CLARITY_ID;
export function ClarityTracking() {
  if (!ID) return null;
  return <Script id="ms-clarity" strategy="lazyOnload">{`if (navigator.globalPrivacyControl !== true) { (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,'clarity','script','${ID}'); }`}</Script>;
}
