import { useEffect, useRef } from 'react'

import Logo from './components/Logo/Logo'
import Header from './containers/Header/Header'
import Home from './containers/Home/Home'
import Main from './containers/Main/Main'
import Menu from './containers/Menu/Menu'
import styles from './styles/App.module.scss'

function App() {

  const appRef = useRef<HTMLDivElement>(null)
  const scrollFromTop = appRef.current?.scrollTop

  return (
    <div ref={appRef} className={styles.app}>
      <Header scrollFromTop={scrollFromTop} />
      <Main>
        <Home />
        <Menu />
      </Main>
    </div>
  )
}

export default App
