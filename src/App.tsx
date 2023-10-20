import { Post } from './Components/Post'
import { Header } from './Components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './Components/Sidebar'
import { PostType } from './Components/Post'
export function App() {

  const posts: PostType[] = [
    {
      id:1,
      author: {
        avatarUrl: 'https://github.com/LucasSpinelli003.png',
        name: 'Lucas Spinelli',
        role: 'DevOps'
      },
      content: [
        {type: 'paragraph', content:  'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'Link', content: 'jane.design/doctorcare'}
      ],
      publishedAt : new Date('2023-10-11 14:44:22')
    },
    {
      id:2,
      author: {
        avatarUrl: 'https://github.com/alecarlosjesus.png',
        name: 'Alexandre Jesus',
        role: 'Professor Fiap'
      },
      content: [
        {type: 'paragraph', content:  'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'Link', content: 'jane.design/doctorcare'}
      ],
      publishedAt : new Date('2023-10-11 10:22:07')
    }
  ]


  return (
    <div>
      < Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post =>  
            <Post 
              post={post}
            />)}
        </main>

        
      </div>
    </div>
    
  )
}


