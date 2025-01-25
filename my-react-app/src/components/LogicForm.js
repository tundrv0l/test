import React, { useState } from 'react';
import { Box, Form, FormField, TextInput, Button, Text } from 'grommet';
import axios from 'axios';

function LogicForm() {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/submit', {
        input: inputValue,
      });
      setResponse(res.data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box align="center" pad="large">
      <Form onSubmit={handleSubmit}>
        <FormField label="Calculate a Fibonacci Number:">
          <TextInput
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter something"
          />
        </FormField>
        <Button type="submit" primary label="Submit" />
      </Form>
      {response && (
        <Box margin={{ top: 'medium' }}>
          <Text>{response}</Text>
        </Box>
      )}
    </Box>
  );
}

export default LogicForm;