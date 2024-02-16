type Props = {
  value: string;
  changeValue: (e: string) => void;
};

const TextField = ({ value, changeValue }: Props) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => changeValue(e.target.value)}
      />
    </>
  );
};

export default TextField