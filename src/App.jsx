import './App.css'
import Header from './components/Header.jsx'

const name = 'Muhammad Kholil Aziz Ashari';

function Welcome() {
  return <h1>Siang boy, {name}!</h1>;
}

function App() {

  return (
    <>
      <div>
        <Header />
        <Welcome />
        <Welcome />
        <Welcome />
        <p>Belajar JSX itu menyenangkan! 🚀</p>
        <button onClick={() => alert("Touched!")}>Touch me</button>
      </div>
    </>
  )
}

export default App
