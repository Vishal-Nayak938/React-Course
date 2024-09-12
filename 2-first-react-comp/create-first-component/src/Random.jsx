function Random()
{
let number=Math.random()*109;
return <h1 style={{'background-color':'#669032'}}>Random Number Is: {Math.round(number)}</h1>
}
export default Random;