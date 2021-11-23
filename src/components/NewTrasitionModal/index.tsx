import Modal from "react-modal"
import { Container, RadioBox, TransactionTypeContainer } from "./style"
import closeImg from "../../assets/close.svg"
import inCome from "../../assets/income.svg"
import outCome from "../../assets/outcome.svg"
import { FormEvent, useState } from "react"
import { api } from "../../services/api"

interface TrasitionModal {
  isOpen: boolean;
  handleClose: () => void;
}

export function NewTransitionModal({ isOpen, handleClose }: TrasitionModal) {

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  function handleNewSubmitTransition(event: FormEvent) {

    event.preventDefault()

    const data = {
      title,
      value,
      category,
      type,
    }

    api.post('/transactions', data)
  }

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

      <Container onSubmit={handleNewSubmitTransition}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder='Título'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          placeholder='Valor'
          type='number'
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>

          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={inCome} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outCome} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}