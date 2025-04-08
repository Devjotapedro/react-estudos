// 2- imagem em assets
import night from './assets/night.jpg'

// 3- useState
import Data from './components/Data'

// 4- renderização de lista
import ListRender from './components/listRender'
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
      </div>
    </>
  )
}

export default App
