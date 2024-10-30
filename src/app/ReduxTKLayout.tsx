'use client';

import './globals.css';
import ReduxProvider from '@/redux/reduxProvider';

export default function ReduxTKLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
