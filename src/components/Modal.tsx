import { useSelector } from "react-redux";
import DeleteModal from "./DeleteModal";
import styled from "styled-components";
import { IModal } from "@src/redux/modal";

interface ContainerProps {
    visible: boolean;
}

const Modal = () => {

    const modal: IModal = useSelector((state: any) => state.modal);

    return (
        <Container visible={!!modal.currentModal}>
            {(() => {
                switch (modal.currentModal) {
                    case "edit":
                        return <>Editar</>;
                    case "delete":
                        return <DeleteModal />
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

export default Modal;
