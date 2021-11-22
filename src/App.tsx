import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from "miragejs";
import { useState } from "react";
import { NewTransitionModal } from "./components/NewTrasitionModal";

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transactions 1',
          amount: 400
        }
      ]
    })
  }
})

export default function App() {

  const [isNewTransitionModal, setIsNewTransitionModal] = useState(false)

  const handleOpenNewTransitionModal = () => {
    setIsNewTransitionModal(true)
  }

  const handleCloseNewTransitionModal = () => {
    setIsNewTransitionModal(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransitionModal} />
      <NewTransitionModal isOpen={isNewTransitionModal} handleClose={handleCloseNewTransitionModal} />
      <Dashboard />
      <GlobalStyle></GlobalStyle>
    </>
  );
}


