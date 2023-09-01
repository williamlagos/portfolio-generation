
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Grommet, grommet } from 'grommet'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Generation',
  description: 'Carbon Credit Distribution App',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Grommet theme={grommet}>
          {children}
        </Grommet>
      </body>
    </html>
  )
}

export default RootLayout