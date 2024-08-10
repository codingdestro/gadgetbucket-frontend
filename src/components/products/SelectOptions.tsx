import { useState } from "react";
export type OptionType = { value: string; name: string };

export const options: OptionType[] = [
  {
    value: "default",
    name: "default",
  },
  {
    value: "high",
    name: "high to low",
  },
  {
    value: "low",
    name: "low to high",
  },
];

export interface Props {
  onSelect: (value: string) => void;
}

const SelectOptions = ({ onSelect }: Props) => {
  const [selectedOption, selectOption] = useState(0);
  const [isOpen, toggle] = useState(false);

  const toggleOpen = () => toggle((prev) => !prev);
  return (
    <div className="relative">
      <button
        onClick={toggleOpen}
        className="w-[6rem] text-left px-2 py-1 select-none"
      >
        {options[selectedOption].name}
      </button>
      <div
        className={`${isOpen && "active"} absolute flex flex-col z-0 bg-white rounded-lg p-2 border select-bar`}
      >
        {options.map((option: OptionType, idx: number) => (
          <div
            key={idx}
            onClick={() => {
              selectOption(idx);
              toggleOpen();
              onSelect(option.value);
            }}
            className={`${idx == selectedOption ? "bg-blue-300" : ""} px-3 py-1 rounded-md `}
          >
            <div className="">{option.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectOptions;
