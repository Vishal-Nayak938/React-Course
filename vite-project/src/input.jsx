import styles from './input.module.css'

const Input = ({handleOnChange2}) =>{

    return <input className={styles.Text} type="text"
     placeholder='Enter Cloth Name' 
     onKeyDown={handleOnChange2}
     />
}

export default Input;