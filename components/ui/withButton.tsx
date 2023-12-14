import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function EntryPrice() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="entry" placeholder="Entry Price" />
      <Button type="reset">Clear</Button>
    </div>
  )
}
export function StopLoss() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="entry" placeholder="Stop Loss" />
      <Button type="reset">Clear</Button>
    </div>
  )
}
export function TakeProfit() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="entry" placeholder="Take Profit" />
      <Button type="reset">Clear</Button>
    </div>
  )
}
export function RiskRatio() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="entry" placeholder="Risk Ratio" />
      <Button type="reset">Clear</Button>
    </div>
  )
}
export function CurrencyPair() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="entry" placeholder="Currency Pair" />
      <Button type="reset">Clear</Button>
    </div>
  )
}
export function TradeNotes() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="entry" placeholder="Trade Notes" />
      <Button type="reset">Clear</Button>
    </div>
  )
}

export function SubmitButton(){
  return(
    <div className="flex w-full max-w-sm items-centre space-x-2">
      <Button type="submit">Add Entry</Button>
    </div>
  )
}
