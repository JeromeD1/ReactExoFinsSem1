import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { clients } from './components/Variables'
import ClientBox from './components/ClientBox'

function App() {
  const [count, setCount] = useState(0);
  const [titre,setTitre]= useState("");

  const handleChange = (event) => {
    setTitre(event.target.value);
    console.log(clients[0].nom);
  }

  const [ClientFiltre, setClientFiltre] = useState(clients);

  const handleClickAdult = () => {
    setClientFiltre(ClientFiltre.filter(client => client.age >= 18));
  }

  const handleClickFemme = () => {
    setClientFiltre(ClientFiltre.filter(client => client.sexe === "femme"));
  }

  const handleClickPoids = () => {
    setClientFiltre(ClientFiltre.filter(client => client.poids < 55));
  }

  const handleClickTaille = () => {
    setClientFiltre(ClientFiltre.filter(client => client.taille > 164));
  }

  const handleClickReset = () => {
    setClientFiltre(clients);
  }

  return (
    <>
      <h1>{titre}</h1>
      <input type='text' placeholder='Tapez votre texte ici' onChange={handleChange} />
      <section className='sectioncards'>
        {ClientFiltre.map(Client => (
          <ClientBox patient={Client} key={Client.nom}/>
        ))}
      </section>

      <section className='sectionButton'>
        <button onClick={handleClickAdult}>Adultes</button>
        <button onClick={handleClickFemme}>Femmes</button>
        <button onClick={handleClickPoids}>Poids &lt; 55 kg</button>
        <button onClick={handleClickTaille}>Grands</button>
        <button onClick={handleClickReset}>Reset</button>
      </section>
    </>
  )
}

export default App
