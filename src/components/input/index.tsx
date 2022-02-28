interface IInputProps {
  type?: string;
  id: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  error?: boolean;
  errorMessage?: string;
}

const defaultProps: IInputProps = {
  type: "text",
  id: "",
  name: "",
  value: "",
  onChange: () => {},
  title: "",
  error: false,
  errorMessage: "",
};

function Input({
  type,
  id,
  name,
  value,
  onChange,
  title,
  error,
  errorMessage,
}: IInputProps): JSX.Element {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p>{errorMessage}</p>}
    </>
  );
}

Input.defaultProps = defaultProps;

export default Input;
