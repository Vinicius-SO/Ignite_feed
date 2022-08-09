import { Avatar } from "./Avatar"
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'


export function Comment({content}){
    return(
        <div className={styles.comment}>
                    <Avatar hasBorder={false} src="https://github.com/Vinicius-SO.png"/>
                    
                    <div className={styles.commentBox}>
                        <div className={styles.commentContent}>
                            <header>
                                <div className={styles.authorAndTime}>
                                    <strong>Vinicius Soares</strong>
                                    <time title="08 Julho às 9:00" dateTime="2022-08-05 09:00:00">Cerca de 1h atrás</time>
                                </div>

                                <button title='Deleltar comentário'>
                                    <Trash size={24}/>
                                </button>
                            </header>

                            <p>{content}</p>

                            <footer>
                                <button>
                                    <ThumbsUp/>
                                    Aplaudir <span>20</span>
                                </button>
                            </footer>
                        </div>

                    </div>

        </div>
    )
}