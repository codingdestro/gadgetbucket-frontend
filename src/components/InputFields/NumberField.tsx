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
        onChange={(e) => changeValue(e.target.value)}
      />
    </>
  );
};

export default NumberField;
