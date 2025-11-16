import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='font-bold text-red-400 text-5xl p-2 m-2 text-shadow-md'>Kaitlyn's Corner</h1>

      <nav className='navbar'>
        <ul>
          <li><a href=''>Home</a></li>
          <li><a href=''>Feed</a></li>
          <li><a href=''>Movies</a></li>
          <li><a href=''>TV Shows</a></li>
          <li><a href=''>Books</a></li>
        </ul>
      </nav>

      <main>
        <h3>This is your Home Page</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati reprehenderit sint, impedit omnis ipsam, maxime odit aliquam, dolores ea molestias ratione voluptates. Aperiam, nisi soluta explicabo nostrum omnis sit. Inventore.</p>
      </main>

    </div>
  )
}




export default App