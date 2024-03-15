import Page from '../componenets/Page';
import MiddleMiddle from '../componenets/LayoutElements/MiddleMiddle';
import FormTextInput from '../componenets/FormElemets/FormTextInput';
import { useState } from 'react';

const Home = () => {
  const [testValue, setTestValue] = useState('');

  const handleSetTestValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTestValue(value);
  };

  return (
    <Page>
      <MiddleMiddle>
        <FormTextInput
          value={testValue}
          label="Test Text Input"
          name="test"
          labelPos="below"
          onChange={handleSetTestValue}
        />
      </MiddleMiddle>
    </Page>
  );
};

export default Home;
