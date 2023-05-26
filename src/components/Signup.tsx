import styled from 'styled-components';
import { ButtonForm, Card, Form, Input, Label, TitleForm } from './core/appStyled';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '@src/redux/user';

const Signup = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        localStorage.setItem('userName', name);
        dispatch(setUsername(name));
    };

    return (
        <Container>
            <Card>
                <TitleForm>Welcome to CodeLeap network!</TitleForm>
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor="name">Please enter your username</Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        aria-label="Please enter your username"
                        placeholder="Jonh doe"
                        value={name}
                        onChange={handleChange}
                        required
                    />

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
