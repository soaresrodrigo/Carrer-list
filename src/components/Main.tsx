import styled from 'styled-components';
import { LayoutColors, LayoutFonts } from './core/commom';
import { Card } from './core/appStyled';
import FormPost from './FormPost';
import Post from './Post';
import { APIArticles } from './core/interfaces';

interface MainProps {
    articles: APIArticles;
}

const Main = ({ articles }: MainProps) => {

    return (
        <Container>
            <Title>CodeLeap Network</Title>
            <Content>
                <Card>
                    <TitleFormH2>What’s on your mind?</TitleFormH2>
                    <FormPost formType={'post'} />
                </Card>

                {articles && articles.results ? articles.results.map((article, index) => (
                    <Post article={article} key={index} />
                )) : <></>}

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