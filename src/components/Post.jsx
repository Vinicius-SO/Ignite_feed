import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { Comment } from './Comment.jsx'
import { Avatar } from "./Avatar"
import styles from "./Post.module.css"
import { useState } from 'react';


export function Post({author, publishedAt, content}){
    const publisheadAtFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale:ptBr})
    

    const [newCommentText, setNewCommentText] = useState('')
    const [comments, setComments] = useState([
        "Post muito bacana",
       
    ])


    function handleCreateNewComment (){
        event.preventDefault()
        
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleCommentChange(){
        setNewCommentText(event.target.value);
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
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>
                
                <textarea onChange={handleCommentChange} value={newCommentText} name='comment' placeholder="Deixe seu comentario"/>

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment=>(
                    <Comment key={comment} content={comment} />
                )
                )}
            </div>
        </article>
    )
}