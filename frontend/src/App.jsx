import { Route, Routes } from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import Header from "./components/Header"
import Home from "./pages/Home"

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
})

function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </ApolloProvider>
    </>
  )
}

export default App
