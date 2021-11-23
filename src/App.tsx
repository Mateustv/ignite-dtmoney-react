import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { createServer, Model } from "miragejs"
import { useState } from "react"
import { NewTransitionModal } from "./components/NewTrasitionModal"
import { TransactionsProvider } from "./TransactionsContext"

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento WEB',
          type: 'deposit',
          category: 'Dev',
          amount: 7000,
          createdAt: new Date('2021-02-06 09:38:00')
        },
        {
          id: 2,
          title: 'Conta de Luz',
          type: 'withdraw',
          category: 'Contas',
          amount: 1000,
          createdAt: new Date('2021-01-06 09:38:00')
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {

      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
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
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransitionModal}
      />

      <NewTransitionModal
        isOpen={isNewTransitionModal}
        handleClose={handleCloseNewTransitionModal}
      />

      <Dashboard />

      <GlobalStyle></GlobalStyle>
    </TransactionsProvider>
  )
}


