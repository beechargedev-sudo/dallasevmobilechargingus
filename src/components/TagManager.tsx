import Script from 'next/script';

// Google Tag Manager container. GA4 and Clarity are loaded directly by the site, so do NOT add a
// second GA4 configuration tag inside the container (it would double-count page views).
const ID = process.env.NEXT_PUBLIC_GTM_ID;

export function TagManager() {
  if (!ID) return null;
  return (
    <Script id="gtm-init" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${ID}');`}</Script>
  );
}

export function TagManagerNoScript() {
  if (!ID) return null;
  return <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager" /></noscript>;
}
