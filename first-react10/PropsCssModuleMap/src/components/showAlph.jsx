
import Styles from './show.module.css'

let Show = ({ListA}) =>{
    return <> <ul>
    {ListA.map(item =>
        <li className={Styles.Alpha}   >{item}</li>)}
  </ul>
    </>
}
export default  Show;