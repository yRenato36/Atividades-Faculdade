import './App.css'
import ButtonFatec from './components/ButtonFatec'
import CustomInput from './components/customInput'

// digite um texto para ser usado como placeholder
const placeholder01 = 'Digite algo'
const placeholder02 = 'Outro texto'
const placeholder03 = 'Teste testando'

function App() {
  return (
    <div>
      <hr />
      <CustomInput placeholder={placeholder01}/>
      <CustomInput placeholder={placeholder02}/>
      <CustomInput placeholder={placeholder03}/>

      <hr />
      <ButtonFatec type="button" label="enviar mensagem"/>

    </div>
  )
}

export default App
