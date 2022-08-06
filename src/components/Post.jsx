import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { Comment } from './Comment.jsx'
import { Avatar } from "./Avatar"
import styles from "./Post.module.css"


export function Post({author, publishedAt}){
    const publisheadAtFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale:ptBr})
    
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
                <p>Fala galeraa{' '}👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a >#rockeatseat</a>    
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>
                
                <textarea placeholder="Deixe seu comentario"/>

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}