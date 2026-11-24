import type { MetadataRoute } from 'next';
import { BRAND } from '@/lib/brand';
export default function manifest(): MetadataRoute.Manifest {
  return { name: BRAND.name, short_name: 'EV Charging Dallas', start_url: '/', display: 'standalone', background_color: '#14171f', theme_color: '#14171f', icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }] };
}

export const dynamic = 'force-static';
