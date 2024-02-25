type Props = {
  value: string;
  changeValue: (e: string) => void;
};
const NumberField = ({ value, changeValue }: Props) => {
  return (
    <>
      <input
        type="number"
        value={value}
        maxLength={10}
        placeholder="00 00 00 00 00"
        onChange={(e) =>
          e.target.value.length <= 10 && changeValue(e.target.value)
        }
      />
    </>
  );
};

export default NumberField;
