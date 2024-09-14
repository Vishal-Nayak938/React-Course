import styles from'./name.module.css'

function Prop({nameA})
{
return <>
{nameA.map(item=><h1 className={styles.Props}>{item}</h1>)}
</>
}

export default Prop;