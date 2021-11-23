import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface TransactionsApiProps {
  id: number;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
  type: string;
}

export function TransactionsTable() {

  const [transactions, setTransactions] = useState<TransactionsApiProps[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => {
        const transaction = response.data as any
        setTransactions(transaction.transactions)
      })
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}