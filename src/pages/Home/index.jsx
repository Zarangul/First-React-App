import React, {useState} from 'react'

import Header from '../../components/Header'
import { Footer } from '../../components/Footer'
// import './Home.css'
import style from './Home.module.css'
function Home() {
  const [age, setAge] = useState(30)


  return (
    <div className={style.home}>
      Home
      <Header  age={age}/>
      <Footer age={age} setAge={setAge}/>
    </div>
  )
}

export default Home
