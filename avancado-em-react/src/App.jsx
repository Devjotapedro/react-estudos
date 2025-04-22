// 2- imagem em assets
import night from './assets/night.jpg'


// 3- useState
import Data from './components/Data'

// 4- renderização de lista
import ListRender from './components/listRender'

// 7- condicinal render
import ConditionalRender from './components/ConditionalRender'

// 8- props

import ShowUserName from './components/ShowUserName'

function App() {

  return (
    <>
      <div>
        <h1>Avançando em react</h1>
        {/* imagemem public */}
        <img src="/img.jpg" alt="" />
        {/* 2- imagem em assets */}
        <img src={night} alt="" />
        {/* 3-  usestate*/}
        <Data/>
      {/* 4- render de lista */}
      <ListRender/>
      {/* 7- render condicional */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name = 'JP'/>
      </div>
    </>
  )
}

export default App
