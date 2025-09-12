import { useState, useEffect } from 'react'
import { GrMoney } from 'react-icons/gr'

const apiUrl = import.meta.env.VITE_API_URL

const App = () => {
  const [coins, setCoins ] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(apiUrl)
        if (!res.ok) throw new Error('Fail to fetch data.')
        const data = await res.json()
        console.log(data)
        setCoins(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCoins()
  }, [])

  return ( 
    <div>
      <div className='logo-title'>
        <GrMoney className='logo-icon' />
        <h1 className='logo-text'>Aureus</h1>
      </div>   
      { loading && 
        <p>Loading...</p>
      }
      { error && 
        <div className='error'>
          {error}
        </div>
      }
    </div>
  )
}
 
export default App