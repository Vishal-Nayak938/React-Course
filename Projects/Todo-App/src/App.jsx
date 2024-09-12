import Row1 from "./Components/Row1";
import Row2 from "./Components/Row2";
import Row3 from "./Components/Row3";
import AppName from "./Components/AppName";
import "./Todo.css";

function App()
{
  return <center class="todo-container">

<AppName/><br />
<Row1/><br />
<Row2/><br />
<Row3/>
  </center>

}
export default App;