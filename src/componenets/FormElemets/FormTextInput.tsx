import * as stylex from '@stylexjs/stylex';
// import { StyleXStyles } from '@stylexjs/stylex';

type Props = {
  label?: string;
  name?: string;
  type?: 'text' | 'password' | 'number';
  labelPos?: 'left' | 'right' | 'above' | 'below';
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const defStyles = stylex.create({
  labelLeft: {
    marginRight: '10px'
  },
  labelRight: {
    marginLeft: '10PX'
  }
});

const FormTextInput = ({
  label,
  name,
  type = 'text',
  labelPos = 'right',
  value = '',
  onChange
}: Props) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <div>
      {labelPos === 'left' && (
        <label {...stylex.props(defStyles.labelLeft)} htmlFor={name}>
          {label}
        </label>
      )}
      {labelPos === 'above' && (
        <>
          <label htmlFor={name}>{label}</label>
          <br />
        </>
      )}
      <input
        value={value}
        type={type}
        name={name}
        id={name}
        onChange={onChangeHandler}
      />
      {labelPos === 'right' && (
        <label {...stylex.props(defStyles.labelRight)} htmlFor={name}>
          {label}
        </label>
      )}
      {labelPos === 'below' && (
        <>
          <br />
          <label htmlFor={name}>{label}</label>
        </>
      )}
    </div>
  );
};

export default FormTextInput;
