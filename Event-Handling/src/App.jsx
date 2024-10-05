import Items from "./items"
function App() {

  let i=['pent','shirt','t-shirt','shocks','glasses']

  return <>
  {i.map(item=><Items ItemsB={item}></Items>)}
     
     
    </>
  
}

export default App
