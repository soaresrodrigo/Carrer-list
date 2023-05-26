import { useState, ChangeEvent, useEffect, FormEvent } from 'react';
import { ButtonForm, Form, Input, Label } from './core/appStyled';
import styled from 'styled-components';
import { LayoutColors } from './core/commom';
import { createArticle } from '@src/redux/articles';
import { setLoadingArticle } from '@src/redux/updateArticles';
import { useDispatch, useSelector } from 'react-redux';
import { CreateArticle } from './core/interfaces';

interface Props {
    formType: 'update' | 'post';
}

const FormPost = ({ formType }: Props) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const username = useSelector((state: any) => state.user.username);

    useEffect(() => {
        if(title && content) {
            setButtonDisabled(false);
        }
    }, [title, content])

    const handleChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const values: CreateArticle = { username, title, content };
        dispatch(createArticle(values));
        dispatch(setLoadingArticle(true));
        setTitle('');
        setContent('');
    };


    return (
        <Form onSubmit={handleSubmit}>
            <Label htmlFor="title">Title</Label>
            <Input
                type="text"
                id="title" name="title"
                aria-label="Please enter your title"
                placeholder="Hello world"
                value={title}
                onChange={handleChangeTitle}
                required
            />
            <Label htmlFor="content">Content</Label>
            <TextArea
                id="content"
                name="content"
                value={content}
                onChange={handleChangeContent}
                rows={4}
                cols={50}
                placeholder="Content here"
            ></TextArea>
            <ButtonForm type="submit" disabled={buttonDisabled}>
                {
                    formType === 'update' ? 'Save' : 'Create'
                }
            </ButtonForm>

        </Form>
    );
};

const TextArea = styled.textarea`
    background-color: ${LayoutColors.white};
    border: 1px solid ${LayoutColors.gray};
    border-radius: 8px;
    padding: 8px 11px;
    margin-bottom: 16px;
    resize: none;
`;

export default FormPost;
