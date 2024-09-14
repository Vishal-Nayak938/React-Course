
import Styles from './show.module.css'

let Show = ({ListA}) =>{
    return <>
    {ListA.map(item => <ul><li className={Styles.Alpha}   >{item}</li></ul>)}
    {/* //mapMetod */}
    </>
}
export default  Show;