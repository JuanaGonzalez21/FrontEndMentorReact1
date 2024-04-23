import Calculator from './Components/Calculator/Calculator'
import Description from './Components/Description/Description'
import Head from './Components/Head/Head'
import Limitations from './Components/Limitations/Limitations'
import Tips from './Components/Tips/Tips'

const App = () => {
  return (
    <div>
      <Head/>
      <Calculator/>
      <Description/>
      <Tips/>
      <Limitations/>
    </div>
  )
}

export default App