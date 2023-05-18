import React, { useState, ChangeEvent } from 'react';
import { Input, Label } from './core/appStyled';
import styled from 'styled-components';
import { LayoutColors } from './core/commom';

const FormPost: React.FC = () => {
    const [content, setContent] = useState('');

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    return (
        <Container>
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" name="title" aria-label="Please enter your title" placeholder="Hello world" required />
            <Label htmlFor="content">Content</Label>
            <TextArea
                id="content"
                name="content"
                value={content}
                onChange={handleChange}
                rows={4}
                cols={50}
                placeholder="Content here"
            ></TextArea>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextArea = styled.textarea`
    background-color: ${LayoutColors.white};
    border: 1px solid ${LayoutColors.gray};
    border-radius: 8px;
    padding: 8px 11px;
    margin-bottom: 16px;
    resize: none;
`;

export default FormPost;
