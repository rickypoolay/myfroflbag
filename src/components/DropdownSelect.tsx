import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';

type DropdownSelectPropsType = {
  listOptions: Array<{
    value: string;
    label: string;
  }>;
  placeholder: string;
  defaultValue?: string;
  noneFoundText?: string;
  inputPlaceHolder?: string;
  raiseSelectedValue: (value: string) => void;
};

const DropdownSelect = ({
  listOptions,
  placeholder,
  defaultValue,
  noneFoundText,
  inputPlaceHolder,
  raiseSelectedValue,
}: DropdownSelectPropsType) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue ?? '');
  useEffect(() => {
    raiseSelectedValue(value);
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'
        >
          {value
            ? listOptions.find((item) => item.value === value)?.label
            : placeholder}
          <ChevronsUpDown className='opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder={inputPlaceHolder} />
          <CommandList>
            <CommandEmpty>{noneFoundText}</CommandEmpty>
            <CommandGroup>
              {listOptions.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === item.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default DropdownSelect;
