import './App.css'
import { useGetUsers } from './hooks/useGetUsers'

function App() {
  const { data, isLoading, isError } = useGetUsers()

  let content: JSX.Element | null

  if (isLoading) {
    content = <div>Loading...</div>
  } else if (isError && !data) {
    content = <div>Something went wrong!</div>
  } else {
    content = <div>
      got users!
    </div>
  }

  return (
    <div className="App">
      <div>
        Contacts
      </div>
      {content}
    </div>
  )
}

export default App
