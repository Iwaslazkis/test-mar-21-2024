import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './classComponents/diwasaki/diwasaki'
import DiwasakiContainer from './classComponents/diwasaki/diwasaki'

import AkubothContainer from './classComponents/akuboth/akuboth'
import NabreraContainer from './classComponents/nabrera/nabrera'
import DzhuContainer from './classComponents/dzhu/dzhu'
import HargunsinghContainer from './classComponents/hargunsingh/hargunsingh'
import AadelekeContainer from './classComponents/aadeleke/aadeleke'
import OazmiContainer from './classComponents/oazmi/oazmi'
import PrabhdeepkaurContainer from './classComponents/prabhdeepkaur/prabhdeepkaur'
import RmalhiContainer from './classComponents/rmalhi/rmalhi'
import SarefinContainer from './classComponents/sarefin/sarefin'
import YangliuContainer from './classComponents/yangliu/yangliu'
import TlaContainer from './classComponents/tla/tla'
import YingqiuliContainer from './classComponents/yingqiuli/yingqiuli'
import AfortunatoContainer from './classComponents/afortunato/afortunato'
import BanganContainer from './classComponents/bangan/bangan'
import KmoralesContainer from './classComponents/kmorales/kmorales'
import DsharmaContainer from './classComponents/dsharma/dsharma'
import DennisgContainer from './classComponents/dennisg/dennisg'
import ToriloyeContainer from './classComponents/toriloye/toriloye'
import SquitiaquezContainer from './classComponents/squitiaquez/squitiaquez'
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
          <AkubothContainer />
          <NabreraContainer />
          <DzhuContainer />
          <OazmiContainer />
          <HargunsinghContainer />
          <AadelekeContainer />
          <PrabhdeepkaurContainer />
          <RmalhiContainer />
          <SarefinContainer />
          <TlaContainer />
          {/* <YangliuContainer /> */}
          <YingqiuliContainer />
          <AfortunatoContainer />
          <BanganContainer />
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
