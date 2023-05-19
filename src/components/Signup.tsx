import styled from 'styled-components';
import { ButtonForm, Card, Form, Input, Label, TitleForm } from './core/appStyled';
import { FormEvent } from 'react';
import { extractValues } from './core/commom';
import { useDispatch } from 'react-redux';
import {setUsername} from '@src/redux/user';

interface FormValues {
    name: string;
  }

const Signup = () => {
    const dispatch = useDispatch();

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const values: FormValues = extractValues(ev.target as HTMLFormElement);
        dispatch(setUsername(values.name));
    };

    return (
        <Container>
            <Card>
                <TitleForm>Welcome to CodeLeap network!</TitleForm>
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor="name">Please enter your username</Label>
                    <Input type="text" id="name" name="name" aria-label="Please enter your username" placeholder="Jonh doe" required />

                    <ButtonForm type="submit">Enter</ButtonForm>
                </Form>
            </Card>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    margin: auto;
    max-width: 500px;
    height: 100vh;
`;

export default Signup;
