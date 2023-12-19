
export const App:React.FC<{}>=()=>{
  let food="cake"
  Son()
  return <div>
<h1>
  hello
  {food}
</h1>
<p>hello</p>
<Son/>

  </div>
}

let Son=()=>{
  alert("hello")
  return <h1>yes please</h1>
}