import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from "miragejs";

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
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle></GlobalStyle>
    </>
  );
}


