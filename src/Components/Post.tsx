import { format, formatDistanceToNow } from 'date-fns';
import  ptBR  from 'date-fns/locale/pt-BR';
import styles from '../Components/Post.module.css';
import { Avatar } from './Avatar';
import { Comments } from './Comments';
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';

interface Author{
    name: String;
    role: string;
    avatarUrl: string;
}
interface Content{
    type: 'paragraph' | 'Link';
    content: string;
}
export interface PostType{
    id:number;
    author:Author; 
    publishedAt: Date;
    content:Content[];
}

interface PostProps{
    post:PostType;
}


export function Post({post}: PostProps){

    const [comments, setComments] = useState([
        'Post muito bacana, hein!?'
    ])
    const [newCommentText,setNewCommentText] = useState('')
    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    
    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()
        if(newCommentText){
            setComments([...comments, newCommentText])
            setNewCommentText('')
        }
    }
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement> ){
            setNewCommentText(event.target.value)
            event.target.setCustomValidity('');
    }
        
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Este campo é obrigatório!');
    }
    function deleteComment(deleteContent:String){
        const commentsWithoutDeleteOne = comments.filter(comment => comment !== deleteContent)
        setComments(commentsWithoutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true}  src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                        {post.content.map(item =>{
                            if(item.type == 'paragraph'){
                                return <p key={item.content} >{item.content}</p>
                            }
                            return <p key={item.content}><a href='#'>{item.content}</a></p>
                        })}
            </div>
            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>
                    Deixe o seu feedback
                </strong>
                <textarea 
                required 
                onInvalid={handleNewCommentInvalid} 
                value={newCommentText} 
                onChange={handleNewCommentChange} 
                placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {
                comments.map(
                    comment => <Comments key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment}
                    />
                    )
                }
            </div>
        </article>
    )
}