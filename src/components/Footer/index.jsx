import React from 'react'

import style from './Footer.module.css'
export const Footer = ({age, setAge}) => {
  return (
    <div>
        <button className={style.btn} onClick={()=> setAge(age-1)}>Decrease</button>
        <button className={style.btn} onClick={()=> setAge(age+1)}>Increase</button>
    </div>
  )
}
