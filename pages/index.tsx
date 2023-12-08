import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
//change the option values to the actual things
export default function Home() {
  return (
    <div style={{display: 'flex', }}>
      <div style={{textAlign: 'center', fontSize:'50px', marginTop:'35px'}}>
        <head>
          <title>
            NEA project
          </title>
        </head>
        <header>
          NEA project
        </header>
      </div>
      
    </div>
  )
}
