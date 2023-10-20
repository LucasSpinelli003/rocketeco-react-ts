import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comments.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentsProps{
    content:string;
    onDeleteComment: (content:string) => void;
}



export function Comments({content, onDeleteComment}:CommentsProps){

    
    const [likeCount, setLikeCount] = useState(0)
    
    
    function handleDeleteComment(){
        onDeleteComment(content)
    }
    
    function handleLikeCount(){
        setLikeCount((state) => state + 1
        );
    };
    
    return(
        <div className={styles.comment}>
            <Avatar  hasBorder={false} src='https://github.com/kkkkdu.png'/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                        <div className={styles.authorAndTime}>
                            <strong>kkkdu</strong>
                            <time title='09 de outubro às 15:32' dateTime='2023-10-09 15:32:35'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp/> Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}