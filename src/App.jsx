import { Post } from "./Post"
import { Header } from './components/Header'
import { Sidebar } from "./components/sidebar"
import styles from "./App.module.css"
import "./global.css"

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author="Vinicius" description="Propriedades no React"/>
          <Post author="Vinicius" description="Propriedades no React"/>
        </main>
      </div>
    </>
    
  )
}

export default App
