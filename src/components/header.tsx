import styles from './Header.module.css'
import todo from '../assets/todo.svg'


export function Header(){
  return(
    <header className={styles.header}>
    <img src={todo}alt="Logo do site" />
    <strong>To<span>Do</span></strong>
    </header>
  )
}