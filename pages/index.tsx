import { ComboboxEntryChoice, ComboboxAccountChoice } from '@/components/ui/combobox'
import { ButtonOutline } from '@/components/ui/outline'
//change the option values to the actual things
export default function Home() {
  return (
      <div>
          <div className='flex justify-center text-xl font-extrabold p-4 bg-slate-100'>
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
          <div className='static'>
            <div>
              insert text box / bar / area for data submission
            </div>
            <div className='p-3'>
              <ButtonOutline/>
            </div>
          </div>
        </div>
      </div>
  )
}

