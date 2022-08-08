import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { Comment } from './Comment.jsx'
import { Avatar } from "./Avatar"
import styles from "./Post.module.css"
import { useState } from 'react';


export function Post({author, publishedAt, content}){
    const publisheadAtFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale:ptBr})
    

    const [comments, setComments] = useState([
        1,
        2,
        3
    ])


    function handleCreateNewComment (){
        event.preventDefault()
        console.log('handle')
        setComments([...comments, comments.length+1])
        console.log(comments)
    }
    

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBr,
        addSuffix: true
    })
    
    
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="" dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>
                
                <textarea placeholder="Deixe seu comentario"/>

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(()=>(
                    <Comment></Comment>
                )
                )}
            </div>
        </article>
    )
}