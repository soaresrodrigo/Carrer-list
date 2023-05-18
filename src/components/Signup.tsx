import styled from 'styled-components';
import { ButtonForm, Card, Form, Input, Label, TitleForm } from './core/appStyled';

const Signup = () => {
    return (
        <Container>
            <Card>
                <TitleForm>Welcome to CodeLeap network!</TitleForm>
                <Form>
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
