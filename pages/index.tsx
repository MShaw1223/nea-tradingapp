import { ComboboxEntryChoice, ComboboxAccountChoice } from '@/components/ui/combobox'
import { InputWithButton } from '@/components/ui/withButton'

export default function Home() {
  return (
    <div>
      <div className='flex justify-center border-slate-500 border-4 w-40'>
        <div className='flex justify-center text-xl font-extrabold p-4 bg-slate-200'>
          NEA project
        </div>
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