import { ReactNode, ChangeEvent } from 'react';

type Props = {
  children: ReactNode;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
};

const Form = ({ children, onSubmit }: Props) => {
  const onSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };
  return <form onSubmit={onSubmitHandler}>{children}</form>;
};

export default Form;
