import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [allow, setAllow] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})

  useEffect(()=>{
    console.log('efect', {allow});

    const handleMove = (event)=>{
      const {clientX, clientY}= event
      console.log('handleMove', {clientX, clientY});
      setPosition({x: clientX, y: clientY})
    }
      if(allow){
        window.addEventListener('pointermove', handleMove)
      }
      return()=>{
        window.removeEventListener('pointermove', handleMove)
      }
  }, [allow])
 
// const activetracking=()=>{
//   setAllow(!allow)
// }
  return (
    <>
    <main>
      <div
      style={{
        position:'absolute',
        background:'#09f',
        borderRadius:'50%',
        opacity:0.8,
        pointerEvents:'none',
        left:-20,
        top: -20,
        width: 40,
        height: 40,
        transform:`translate(${position.x}px, ${position.y}px)`

      }}></div>

     <h3>Proyecto Siguiendo el puntero</h3>
     <button onClick={()=> setAllow(!allow)}>{allow? 'Desactivar': 'Activar'} el seguimiento</button>
    </main>
    </>
  )
}

export default App
