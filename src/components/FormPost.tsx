import { useState, ChangeEvent, useEffect, FormEvent } from 'react';
import { ButtonForm, Form, Input, Label } from './core/appStyled';
import styled from 'styled-components';
import { LayoutColors, LayoutFonts } from './core/commom';
import { createArticle, updateArticle } from '@src/redux/articles';
import { setLoadingArticle } from '@src/redux/updateArticles';
import { useDispatch, useSelector } from 'react-redux';
import { Article, ImplementArticle } from './core/interfaces';
import { ButtonContainer } from './Modal';

interface Props {
    formType: 'update' | 'post';
    currentArticle?: Article | null;
    handleCloseModal?: () => void;
}

interface ButtonProps {
    edit?: boolean;
}

const FormPost = ({ formType, currentArticle, handleCloseModal }: Props) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState(currentArticle?.title || '');
    const [content, setContent] = useState(currentArticle?.content || '');
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const username = useSelector((state: any) => state.user.username);

    useEffect(() => {
        if (title && content) {
            setButtonDisabled(false);
        }
    }, [title, content])

    const handleChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const actionFetch = async (values: ImplementArticle) => {
        if(formType === 'post') {
            await dispatch(createArticle(values));
            return;
        }

        await dispatch(updateArticle(values, currentArticle?.id!));
    }

    const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const values: ImplementArticle = { username, title, content };
        await actionFetch(values);
        dispatch(setLoadingArticle(true));
        setTitle('');
        setContent('');
        setButtonDisabled(true);
        handleCloseModal?.();
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
                placeholder="Content here"
            ></TextArea>
            {formType === 'post' ? (
                <ButtonForm type="submit" disabled={buttonDisabled}>Create</ButtonForm>
            ) : (
                <ButtonContainer>
                    <Button onClick={handleCloseModal}>Cancel</Button>
                    <Button edit={true} type='submit' disabled={buttonDisabled}>Save</Button>
                </ButtonContainer>
            )}

        </Form>
    );
};

const TextArea = styled.textarea`
    background-color: ${LayoutColors.white};
    border: 1px solid ${LayoutColors.gray};
    border-radius: 8px;
    padding: 8px 11px;
    margin-bottom: 16px;
    height: 74px;
    resize: none;
`;

const Button = styled.button<ButtonProps>`
    font: ${LayoutFonts.fontButton};
    cursor: pointer;
    border-radius: 8px;
    padding: 6px 33px;
    ${({edit}) => `
        background-color: ${edit ? LayoutColors.success :  LayoutColors.white};
        border: 1px solid ${!edit ? LayoutColors.dark: 'transparent'};
        color: ${!edit ? LayoutColors.dark: LayoutColors.white};
    `};
`;


export default FormPost;
