"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const choices = [
  {
    value: "entryPrice",
    label: "Entry Price",
  },
  {
    value: "stopLoss",
    label: "Stop Loss",
  },
  {
    value: "takeProfit",
    label: "Take Profit",
  },
  {
    value: "riskRatio",
    label: "Risk Ratio",
  },
  {
    value: "currencyPair",
    label: "Currency Pair",
  },
  {
    value: "tradeNotes",
    label: "Trade Notes",
  },
]

export function ComboboxEntryChoice() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? choices.find((choice) => choice.value === value)?.label : "Select Choice..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Choice..." />
          <CommandEmpty>Not found.</CommandEmpty>
          <CommandGroup>
            {choices.map((choice) => (
              <CommandItem
                key={choice.value}
                value={choice.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === choice.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {choice.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
const Accounts = [
  {
    value:"demoAcc", label:"Demo Account"
  },
  {
    value:"otherDemo", label:"Demo Account 2"
  }
]

export function ComboboxAccountChoice() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? Accounts.find((Account) => Account.value === value)?.label : "Select Account..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Accounts..." />
          <CommandEmpty>Not found.</CommandEmpty>
          <CommandGroup>
            {Accounts.map((Account) => (
              <CommandItem
                key={Account.value}
                value={Account.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === Account.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {Account.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}