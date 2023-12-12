import { Inter } from 'next/font/google'
import { ComboboxDemo } from '@/components/ui/combobox'
const inter = Inter({ subsets: ['latin'] })
//change the option values to the actual things
export default function Home() {
  return (
      <div className="flex justify-center space-x-2">
        <div className='text-xl font-extrabold p-4'>
          NEA project
        </div>
        <div className='p-4'>
          <ComboboxDemo/>
        </div>
      </div>
  )
}
