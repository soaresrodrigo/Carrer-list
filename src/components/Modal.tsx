import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { IModal, setCurrentModal } from "@src/redux/modal";
import { LayoutColors, LayoutFonts } from "./core/commom";
import { modalType } from "@src/redux/modal";
import FormPost from "./FormPost";
import { destroyArticle } from "@src/redux/articles";
import { setLoadingArticle } from "@src/redux/updateArticles";

interface ContainerProps {
    visible: boolean;
}

interface ButtonProps {
    modalType?: modalType;
}

const Modal = () => {

    const dispatch = useDispatch();
    const modal: IModal = useSelector((state: any) => state.modal);

    const handleCloseModal = () => {
        dispatch(setCurrentModal({ currentModal: null, currentArticle: null }));
        dispatch(setLoadingArticle(true));
    }

    const handleDeleteArticle = async () => {
        if(modal && modal.currentArticle) {
            await dispatch(destroyArticle(modal.currentArticle.id));
        }
        handleCloseModal();
    }

    return (
        <Container visible={!!modal.currentModal}>
            {(() => {
                switch (modal.currentModal) {
                    case "edit":
                        return (
                            <Content>
                                <Title>Are you sure you want to delete this item?</Title>
                                <FormPost formType="update" currentArticle={modal.currentArticle} handleCloseModal={handleCloseModal} />
                            </Content>
                        );
                    case "delete":
                        return (
                            <Content>
                                <Title>Are you sure you want to delete this item?</Title>
                                <ButtonContainer>
                                    <Button onClick={handleCloseModal}>Cancel</Button>
                                    <Button modalType={modal.currentModal} onClick={handleDeleteArticle}>Delete</Button>
                                </ButtonContainer>
                            </Content>
                        )
                    default:
                        return null;
                }
            })()}
        </Container>
    );
};

const Container = styled.div<ContainerProps>`
    display: ${({ visible }) => (visible ? 'flex' : 'none')};;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(119, 119, 119, 0.8);
    z-index: 1;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px 0;
    background: ${LayoutColors.white};
    border: 1px solid ${LayoutColors.grayLight};
    border-radius: 16px;
    width: 100%;
    max-width: 660px;
    padding: 24px;
`;

const Title = styled.h1`
    font: ${LayoutFonts.fontTitle};
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0 16px;
`;

const Button = styled.button<ButtonProps>`
    font: ${LayoutFonts.fontButton};
    cursor: pointer;
    border-radius: 8px;
    padding: 6px 33px;
    ${({modalType}) => `
        background-color: ${modalType === 'delete' ? LayoutColors.danger : LayoutColors.white};
        border: 1px solid ${!modalType ? LayoutColors.dark: 'transparent'};
        color: ${!modalType ? LayoutColors.dark: LayoutColors.white};
    `};
`;

export default Modal;
