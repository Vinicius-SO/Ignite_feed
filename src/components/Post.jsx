import styles from "./Post.module.css"

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/Vinicius-SO.png" />
                    <div className={styles.authorInfo}>
                        <strong>Vinicius Soares</strong>
                        <span>Web developer</span>
                    </div>
                </div>
                    <time title="08 Julho às 9:00" dateTime="2022-08-05 09:00:00">Publicado há 1h</time>
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
        </article>
    )
}