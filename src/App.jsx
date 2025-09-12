import { useState, useEffect } from 'react'

const App = () => {
  const [coins, setCoins ] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  return ( 
    <div>
      <h1 className='logo'>Aureus</h1>
    </div>
  )
}
 
export default App