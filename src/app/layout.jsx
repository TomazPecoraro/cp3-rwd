import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Entrega 6',
  description: '1TDSPM - Entrega 6',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="dark:bg-slate-400">
        {children}
      </body>
    </html>
  )
}