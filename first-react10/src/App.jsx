import Prop from "./prop"
import Container from "./container"
function App() {
  
let name=['vishal','Anshul','akshay','nirmla'
  ,'sachin','aakash'];

  return (
  <Container>
    <Prop nameA={name}></Prop>
    </Container>
  );
}

export default App
