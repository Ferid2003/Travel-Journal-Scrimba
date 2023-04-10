import './App.css'
import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx";
import Data from "./data.jsx"

function App() {
  let a = Data.map(info => {
    return <Card key={info.id}
                 info={info} />
  })

  return (
      <div>
        <Navbar />
        {a}
      </div>
  )
}

export default App
