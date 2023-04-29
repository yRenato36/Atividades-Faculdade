import './App.css'
import ButtonFatec from './components/ButtonFatec'
import CustomInput from './components/customInput'

function App() {
  const mensagem = 'Entre em contato' // teste de mensagem
  
  return (
    
    <div>
      <h3>{mensagem}</h3>
      <hr />
      <CustomInput placeholder="Nome"/>
      <CustomInput placeholder="Email"/>
      <CustomInput placeholder="Telefone"/>

      <hr />
      <ButtonFatec type="button" label="enviar mensagem"/>

    </div>
  )
}

export default App
