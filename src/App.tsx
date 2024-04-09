import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './stories/diwasaki/diwasaki'
import DiwasakiContainer from './stories/diwasaki/diwasaki'

// import AkubothContainer from './stories/akuboth/akuboth'
import NabreraContainer from './stories/nabrera/nabrera'
import DzhuContainer from './stories/dzhu/dzhu'
import HargunsinghContainer from './stories/hargunsingh/hargunsingh'
import AadelekeContainer from './stories/aadeleke/aadeleke'
import OazmiContainer from './stories/oazmi/oazmi'
import PrabhdeepkaurContainer from './stories/prabhdeepkaur/prabhdeepkaur'
import RmalhiContainer from './stories/rmalhi/rmalhi'
import SarefinContainer from './stories/sarefin/sarefin'
import YangliuContainer from './stories/yangliu/yangliu'
// import TlaContainer from './stories/tla/tla'
import YingqiuliContainer from './stories/yingqiuli/yingqiuli'
// import AfortunatoContainer from './stories/afortunato/afortunato'
// import BanganContainer from './stories/bangan/bangan'
import KmoralesContainer from './stories/kmorales/kmorales'
import DsharmaContainer from './stories/dsharma/dsharma'
import DennisgContainer from './stories/dennisg/dennisg'
import ToriloyeContainer from './stories/toriloye/toriloye'
import SquitiaquezContainer from './stories/squitiaquez/squitiaquez'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <section>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <DiwasakiContainer />
          <YangliuContainer />
          {/* <AkubothContainer /> */}
          <NabreraContainer />
          <DzhuContainer />
          <OazmiContainer />
          <HargunsinghContainer />
          <AadelekeContainer />
          <PrabhdeepkaurContainer />
          <RmalhiContainer />
          <SarefinContainer />
          {/* <TlaContainer /> */}
          {/* <YangliuContainer /> */}
          <YingqiuliContainer />
          {/* <AfortunatoContainer /> */}
          {/* <BanganContainer /> */}
          <KmoralesContainer />
          <DsharmaContainer />
          <DennisgContainer />
          <ToriloyeContainer />
          <SquitiaquezContainer />


        </section>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
