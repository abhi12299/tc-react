import Header from './components/Header'
import SearchBar from './components/SearchBar'
import UsersList from './components/UsersList'

function App() {
  return (
    <div>
      <Header />
      <main className='mt-2'>
        <SearchBar />
        <UsersList />
      </main>
    </div>
  )
}

export default App
