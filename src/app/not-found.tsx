import type { Metadata } from 'next';
import { NotFoundPage } from '@/views/pages';
export const metadata: Metadata = { title: 'Page Not Found | EV Mobile Charging Dallas', robots: { index: false, follow: false } };
export default function NotFound() { return <NotFoundPage />; }
