import React, { useState } from 'react';
import { Box, Button, Form, FormField, TextArea, TextInput, Text } from 'grommet';
import axios from 'axios';


function ReportIssue() {
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [response, setResponse] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/report-issue', {
                email: email,
                description: description,
            });
            setResponse(res.data.message);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Box align="center" pad="large">
            <Form onSubmit={handleSubmit}>
                <FormField label="Email:">
                    <TextInput
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </FormField>
                <FormField label="Description:">
                    <TextArea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter a description"
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

export default ReportIssue;