import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
//change the option values to the actual things
export default function Home() {
  return (
    <div style={{display: 'flex', }}>
      <div style={{marginRight:'20px', marginTop:'200px'}}>
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
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
