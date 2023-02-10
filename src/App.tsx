import Logo from './components/Logo/Logo'
import Header from './containers/Header/Header'
import Home from './containers/Home/Home'
import Main from './containers/Main/Main'
import styles from './styles/App.module.scss'

function App() {

  return (
    <div className={styles.app}>
      <Header />
      <Main>
        <Home />
      </Main>
    </div>
  )
}

export default App
