import { useEffect, useRef, useState } from 'react'

import Logo from './components/Logo/Logo'
import Footer from './containers/Footer/Footer'
import Header from './containers/Header/Header'
import Home from './containers/Home/Home'
import Main from './containers/Main/Main'
import Menu from './containers/Menu/Menu'
import styles from './styles/App.module.scss'

function App() {

  const [ scroll, setScroll ] = useState<number | null>(null)

  const appRef = useRef<HTMLDivElement>(null)

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
 

  return (
    <div ref={appRef} className={styles.app}>
      <Header scrollFromTop={scrollPosition} />
      <Main>
        <Home />
        <Menu />
      </Main>
      <Footer />
    </div>
  )
}

export default App
