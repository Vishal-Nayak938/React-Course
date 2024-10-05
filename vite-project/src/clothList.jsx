import { useMemo } from 'react';
import styles from './cloth.module.css'

function List({Cloth})
{

let arr=[8,7,9,3,2,5,6];
let sortedArray= useMemo(()=>arr.sort(),[arr]);
console.log(sortedArray)

   const handleBuyClickedButton=(items)=>{
        console.log(`${items} is clicked!`)
   }
    return <div className={styles.containerInside}>
    
    {Cloth.map(items=><li key={items} className={`${styles.design} list-group-item `}>
        <span className={styles.pent}>
        {items}
        </span>
        <button className={`${styles.button} btn btn-info`}
        onClick={()=>handleBuyClickedButton(items)}
        >Buy</button>
    </li>)}

    </div>


    
}
export default List;