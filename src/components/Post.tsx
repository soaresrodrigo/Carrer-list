import styled from 'styled-components';
import { LayoutColors, LayoutFonts } from './core/commom';
import DeleteIcon from '@src/components/assets/icons/delete.svg';
import EditIcon from '@src/components/assets/icons/edit.svg';
import { Carrer } from './core/interfaces';

interface IPost {
    carrer: Carrer
}

const Post = ({ carrer }: IPost) => {
    return (
        <Article>
            <HeaderArticle>
                <TitleArticle>{carrer.title}</TitleArticle>
                <ActionArticle>
                    <IconAction src={DeleteIcon} />
                    <IconAction src={EditIcon} />
                </ActionArticle>
            </HeaderArticle>
            <Section>
                <Info>
                    <User>{carrer.username}</User>
                    <Time>{convertDateToTimeAgo(carrer.created_datetime)}</Time>
                </Info>
                <Content>{carrer.content}</Content>
            </Section>
        </Article>
    )
}

function convertDateToTimeAgo(dateTime: string): string {
    const currentTime = new Date();
    const diffMilliseconds = currentTime.getTime() - new Date(dateTime).getTime();
    const diffSeconds = Math.floor(diffMilliseconds / 1000);

    if (diffSeconds < 60) {
        return `${diffSeconds} seconds ago`;
    }

    const diffMinutes = Math.floor(diffSeconds / 60);

    if (diffMinutes < 60) {
        return `${diffMinutes} minutes ago`;
    }

    const diffHours = Math.floor(diffMinutes / 60);

    if (diffHours < 24) {
        return `${diffHours} hours ago`;
    }

    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} days ago`;
}

const TitleFormH2 = styled.h2`
    font: ${LayoutFonts.fontTitle};
    margin-bottom: 24px;
`;

const Article = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    border-radius: 16px 16px 0px 0px;
`;

const HeaderArticle = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${LayoutColors.primary};
`;

const TitleArticle = styled(TitleFormH2)`
    display: flex;
    margin-bottom: 0;
    color: ${LayoutColors.white};
padding: 24px;
`;

const ActionArticle = styled.div`
    display: inline-flex;
    gap: 20px;
    justify-items: flex-end;
    padding: 24px;
`;

const IconAction = styled.img`
    cursor: pointer;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    font: ${LayoutFonts.fontInfo};
    gap: 16px 0;
    background-color: ${LayoutColors.white};
    border: 1px solid ${LayoutColors.grayLight};
    border-top: none;
    padding: 24px;
    border-radius: 0px 0px 16px 16px;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${LayoutColors.gray};
`;

const User = styled.div`
    font-weight: 700;
    ::before {
        content: '@';
    }
`;
const Time = styled.div``;
const Content = styled.div``;



export default Post;