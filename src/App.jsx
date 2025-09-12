import { useState, useEffect } from 'react'

const App = () => {
  const [coins, setCoins ] = useState([])
  const [loading, setLoading] = useState(true)
   

  return ( 
    <div>
      <h1 className='logo'>Aureus</h1>
    </div>
  )
}
 
export default App