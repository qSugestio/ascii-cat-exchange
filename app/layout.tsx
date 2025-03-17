import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ASCII Cat Exchange',
  description: 'Cat exchange',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='antialiased vsc-initialized'>{children}</body>
    </html>
  )
}
