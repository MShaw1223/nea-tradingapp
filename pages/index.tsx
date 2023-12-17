import { EntryPrice, StopLoss, TakeProfit, RiskRatio, CurrencyPair, TradeNotes, SubmitButton } from '@/components/ui/withButton'

export default function Home() {
  return (
    <div className='bg-slate-200 h-screen'>
      <div className='flex flex-col items-center p-3'>
        <div className='flex justify-center border-zinc-900 border-4 w-58 rounded-2xl p-1'>
          <div className='static text-4xl font-extrabold p-4 bg-slate-200 rounded'>
            Trade Entry
          </div>
        </div>
        <div className="relative p-6">
          <div className='static flex justify-center flex-col items-center'>
            <div className='p-3'>
              <TakeProfit/>
            </div>
            <div className='p-3'>
              <RiskRatio/>
            </div>
            <div className='p-3'>
              <CurrencyPair/>
            </div>
            <div className='p-3'>
              <EntryPrice/>
            </div>
            <div className='p-3'>
              <TradeNotes/>
            </div>
            <div className='p-3'>
              <StopLoss/>
            </div>
            <div className='p-3'>
              <SubmitButton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}