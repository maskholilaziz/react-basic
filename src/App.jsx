import './App.css'
import Header from './components/Header.jsx'

const name = 'Muhammad Kholil Aziz Ashari';

function Welcome() {
  return <h1>Welcome {name}</h1>
}

function UserCardProps(props) {
  return (
    <>
      <h2>Nama : {props.name}</h2>
      <p>Umur : {props.age} tahun</p>
    </>
  );
}

function UserCardDestructuring({ name, age }) {
  return (
    <>
      <h2>Nama : {name}</h2>
      <p>Umur : {age} tahun</p>
    </>
  );
}

function App() {

  return (
    <>
      <div>
        <Header />
        <UserCardProps name={name} age={30} />
        <UserCardDestructuring name="Boyoken" age={-10} />
        <UserCardDestructuring name="Puegel" age={100} />
        <p>Belajar JSX itu menyenangkan! 🚀</p>
        <button onClick={() => alert("Touched!")}>Touch me</button>
      </div>
    </>
  )
}

export default App
