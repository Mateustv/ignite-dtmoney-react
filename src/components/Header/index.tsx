import { Container, Content } from "./style";
import logoImg from '../../assets/logo.svg'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <>
            <Container>
                <Content>
                    <img src={logoImg} alt="imagem-logo" />
                    <button type="button" onClick={onOpenNewTransactionModal} >
                        Nova Transação
                    </button>
                </Content>
            </Container>
        </>

    )
}