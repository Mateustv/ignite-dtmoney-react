import Modal from "react-modal"
import { Container, TransactionTypeContainer } from "./style"
import closeImg from "../../assets/close.svg"
import inCome from "../../assets/income.svg"
import outCome from "../../assets/outcome.svg"

interface TrasitionModal {
  isOpen: boolean;
  handleClose: () => void;
}

export function NewTransitionModal({ isOpen, handleClose }: TrasitionModal) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={handleClose} className="react-modal-close">
        <img src={closeImg} alt="fechar " />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder='Título' />

        <input
          placeholder='Valor'
          type='number'
        />

        <TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={inCome} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button"
          >
            <img src={outCome} alt="Saida" />
            <span>Saida</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder='Categoria' />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}