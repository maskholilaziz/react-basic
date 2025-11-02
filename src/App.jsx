import './App.css'

const name = 'Muhammad Kholil Aziz Ashari';

function App() {

  return (
    <>
      <div>
        <h1>Siang boy, {name}!</h1>
        <p>Belajar JSX itu menyenangkan! 🚀</p>
        <button onClick={() => alert("Touched!")}>Touch me</button>
      </div>
    </>
  )
}

export default App
