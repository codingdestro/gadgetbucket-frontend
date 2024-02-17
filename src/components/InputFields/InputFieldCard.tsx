import "../../styles/field_card.scss";
import TextField from "./TextField";
import NumberField from "./NumberField";
import ConfirmPasswords from "./ConfrimPasswords";
import PasswordField from "./PasswordField";

export type fieldsType = {
  type: "text" | "number" | "password" | "confirmPassword";
  value: string;
  name: string;
};

interface Props {
  onChangeValue: (val: string, idx: number) => void;
  field: fieldsType[];
}

const InputFieldCard = ({ field, onChangeValue }: Props) => {
  return field.map((ele: fieldsType, idx: number) => {
    return (
      <div className="field-box" key={idx}>
        <div className="field-name">{ele.name}</div>
        {ele.type === "text" ? (
          <TextField
            value={ele.value}
            changeValue={(e) => onChangeValue(e, idx)}
          />
        ) : ele.type === "number" ? (
          <NumberField
            value={ele.value}
            changeValue={(e) => onChangeValue(e, idx)}
          />
        ) : ele.type === "confirmPassword" ? (
          <ConfirmPasswords
            value={ele.value}
            changePassword={(e) => onChangeValue(e, idx)}
          />
        ) : ele.type === "password" ? (
          <PasswordField
            value={ele.value}
            changeValue={(e) => onChangeValue(e, idx)}
          />
        ) : (
          <></>
        )}
      </div>
    );
  });
};

export default InputFieldCard;
