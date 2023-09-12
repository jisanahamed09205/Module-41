import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
  const [watches,setWatches] = useState([])

  // useEffect(()=>{
  //   fetch('watches.json')
  //   .then(res => res.json())
  //   .then(data => setWatches(data))
  // },[])
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/jisanahamed09205/watches-data/main/watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])

  // const watches= [
  //   {id: 1, name: 'Apple watch',price:25000},
  //   {id: 2, name: 'Samsung watch',price:5500},
  //   {id: 3, name: 'Xmi watch',price:2100}
  // ]


//   const watches = [
//     {
//         "id": 1,
//         "name": "Apple Watch Series 6",
//         "price": 399.99
//     },
//     {
//         "id": 2,
//         "name": "Samsung Galaxy Watch 3",
//         "price": 429.99
//     },
//     {
//         "id": 3,
//         "name": "Fitbit Sense",
//         "price": 329.95
//     },
//     {
//         "id": 4,
//         "name": "Garmin Forerunner 945",
//         "price": 599.99
//     },
//     {
//         "id": 5,
//         "name": "Xiaomi Mi Watch",
//         "price": 149.99
//     }
// ];


  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
