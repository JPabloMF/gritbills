interface IFormProps {
  onSubmit: (values: any) => void;
  children: React.ReactNode;
}


const defaultProps: IFormProps = {
  onSubmit: () => {},
  children: null,
};


function Form({ onSubmit, children }: IFormProps) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

Form.defaultProps = defaultProps;

export default Form