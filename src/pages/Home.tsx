import Page from '../componenets/Page';
import MiddleMiddle from '../componenets/LayoutElements/MiddleMiddle';
import Form from '../componenets/FormElemets/Form';
import FormTextInput from '../componenets/FormElemets/FormTextInput';
import { useState } from 'react';

const Home = () => {
  const [testValue, setTestValue] = useState('');
  const [submitValue, setSubmitValue] = useState({});

  const handleSetTestValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTestValue(value);
  };

  const onSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault;
    console.log('Submitted');
    setSubmitValue(e);
    return false;
  };
  console.log(submitValue);

  return (
    <Page>
      <MiddleMiddle>
        <Form onSubmit={onSubmitHandler}>
          <FormTextInput
            value={testValue}
            label="Test Text Input"
            name="test"
            labelPos="above"
            onChange={handleSetTestValue}
          />
          <button type="submit">Submih Buhun</button>
        </Form>
      </MiddleMiddle>
    </Page>
  );
};

export default Home;
