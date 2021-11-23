import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "./services/api"

interface TransactionsApiProps {
  id: number;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
  type: string;
}

type TransactionsPostProps = Omit<TransactionsApiProps, "id" | "createdAt">

interface TransactionsProviderProps {
  children: ReactNode;
}

interface Transactions {
  transactions: TransactionsApiProps[];
  transactionPost: (transaction: TransactionsPostProps) => void;
}

export const TransactionsContext = createContext<Transactions>({} as Transactions)

export function TransactionsProvider({ children }: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<TransactionsApiProps[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => {
        const transaction = response.data as any
        setTransactions(transaction.transactions)
      })
  }, [])

  function transactionPost(transaction: TransactionsPostProps) {

    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, transactionPost }}>

      {children}

    </TransactionsContext.Provider>

  )
}