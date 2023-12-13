import { ClearButton } from '@/components/ui/clearButton'
import { ComboboxEntryChoice, ComboboxAccountChoice } from '@/components/ui/combobox'
import { InputWithButton } from '@/components/ui/withButton'

export default function Home() {
  return (
    <div className='bg-slate-200 h-screen'>
      <div className='flex flex-col items-center p-2'>
        <div className='flex justify-center border-zinc-900 border-4 w-58 rounded-2xl p-1'>
          <div className='static text-4xl font-extrabold p-4 bg-slate-200 rounded'>
            Trade Entry
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
            <div className='p-3'>
              <ClearButton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}