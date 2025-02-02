import React, { useState, useEffect } from 'react';
import { Box, Form, FormField, TextInput, Button, Text } from 'grommet';
import axios from 'axios';

function LogicForm() {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    console.log(`REACT_APP_API_URL: ${process.env.REACT_APP_API_URL}`);
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = `${process.env.REACT_APP_API_URL}/submit`;
    console.log(`API URL: ${apiUrl}`);
    try {
      const res = await axios.post(apiUrl, {
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