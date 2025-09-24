import { useState, useEffect } from 'react'
import { GrMoney } from 'react-icons/gr'
import CoinCard from './components/CoinCard'

const API_URL = import.meta.env.VITE_API_URL

const App = () => {
  const [coins, setCoins ] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(`${API_URL}&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
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
      {!loading & !error && (
        <main className='grid'>
          {coins.map((coin) => (
            <CoinCard 
              key={coin.id}
              coin={coin}
            />
          ))}
        </main>
      )}
    </div>
  )
}
 
export default App