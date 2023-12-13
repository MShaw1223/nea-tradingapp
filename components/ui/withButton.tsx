import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="entry" placeholder="Enter here" />
      <Button type="submit">Add to Entry</Button>
      <Button type="reset">Clear</Button>
    </div>
  )
}
