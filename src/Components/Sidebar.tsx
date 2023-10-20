import {PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
       <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=50"/>
            <div className={styles.profile}>
                <Avatar hasBorder={true} src='https://github.com/gpelegrine.png'/>
                <strong>Gabrielzin</strong>
                <span>Full Stack</span>
            </div>


            <footer>
                <a href="#">
                  <PencilLine size={20}/>  Editar seu Perfil
                </a>
            </footer>
       </aside>
    )
}