
import React, { useState } from 'react'
// import { AiFillHeart } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";


import styles from "./BookCard.module.css"


function BookCard({data , handleLikedList}) {
    const  {title, author, image, language, pages,id}= data ;
  
    const [like, setLike] = useState(false)

    const likeHandler = () =>{
        handleLikedList(data , like)
        setLike(like => !like)
    }
    
    return (
        <div className={styles.card}>
            {/* <img src={image} alt={title} /> */}
            <div  className={styles.info}>
                {/* <h3>{title}</h3> */}
                {/* <p>{author}</p> */}
                {/* <div>
                    <span>{language}</span>
                    <span>{pages} pages</span>
                </div> */}
            </div>
            <button onClick={likeHandler} ><FiAlignJustify style={{verticalAlign:"middle"}} fontSize="1.8rem"/>show button{id}</button>
        </div>
    )
}

export default BookCard
