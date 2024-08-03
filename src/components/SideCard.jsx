
import React from 'react' 
import styles from "./SideCard.module.css"

function SideCard({data:{image, title ,   country}}) {
  return (
    <div className={styles.card}>
        <img src={image} alt={title}/>
    <p>{title}</p>
    <p>{country}</p>
    
    </div>
  )
}

export default SideCard