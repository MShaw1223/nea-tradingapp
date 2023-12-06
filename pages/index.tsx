import Image from 'next/image'
import { Inter } from 'next/font/google'
import { title } from 'process'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <html>
      <title>
        nea project
      </title>
      
      <body>
        <div>
          <header>
            nea project
          </header>
        </div>
      </body>
    </html>
  )
}
