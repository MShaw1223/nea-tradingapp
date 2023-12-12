import { ComboboxEntryChoice, ComboboxAccountChoice } from '@/components/ui/combobox'
import { ButtonOutline } from '@/components/ui/outline'
import { Input } from '@/components/ui/input'
import { InputWithButton } from '@/components/ui/withButton'

export default function Home() {
  return (
      <div>
          <div className='flex justify-center text-xl font-extrabold p-4 bg-slate-300'>
            NEA project
          </div>
        <div className="relative p-6">
          <div className='static flex justify-center'>
            <div className='p-6'>
              <ComboboxAccountChoice/>
            </div>
            <div className='p-6'>
              <ComboboxEntryChoice/>
            </div>
          </div>
          <div className='static flex justify-center'>
            <div className='p-3'>
              <InputWithButton/>
            </div>
          </div>
        </div>
      </div>
  )
}

