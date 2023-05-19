import styled from 'styled-components';
import { LayoutColors, LayoutFonts, extractValues } from './core/commom';
import { ButtonForm, Card, Form } from './core/appStyled';
import FormPost from './FormPost';
import Post from './Post';
import { createCarrer, getCarrers } from './core/client';
import { FormEvent, useEffect, useState } from 'react';
import { Carrer } from './core/interfaces';
import { useSelector } from 'react-redux';

const Main = () => {
    const [carrers, setCarrers] = useState<Carrer[] | null>(null);
    const user = useSelector((state: any) => state.user);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCarrers();

            if(data) {
                setCarrers(data.results);
            }
        };

        if (!carrers) {
            fetchData();
        }

    }, [carrers]);

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const values = extractValues(ev.target as HTMLFormElement);
        values['username'] = user.username;

        const fecthPost = async() => {
            const data = await createCarrer(values);

            console.log(data);
        }

        fecthPost();

        console.log(values);
        
        
    };

    return (
        <Container>
            <Title>CodeLeap Network</Title>
            <Content>
                <Card>
                    <TitleFormH2>What’s on your mind?</TitleFormH2>
                    <Form onSubmit={handleSubmit}>
                        <FormPost />
                        <ButtonForm type="submit">Create</ButtonForm>
                    </Form>
                </Card>

                {carrers && carrers.map((carrer, index) => (
                    <Post carrer={carrer} key={index} />
                ))}

            </Content>
        </Container>
    );
};


const Container = styled.div`
    display: flex;
    position: relative;
    gap: 24px;
    flex-direction: column;
    background-color: ${LayoutColors.white};
    `;

const Title = styled.h1`
    padding: 37px 27px;
    background-color: ${LayoutColors.primary};
    font: ${LayoutFonts.fontTitle};
    color: ${LayoutColors.white};
`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    gap: 24px;
    padding: 24px;
    max-width: 100%;
`;

const TitleFormH2 = styled.h2`
    font: ${LayoutFonts.fontTitle};
    margin-bottom: 24px;
`;



export default Main;