import { useState, useEffect } from 'react'
import CoinCard from './components/CoinCard'
import LimitSelector from './components/LimitSelector'
import FilterInput from './components/FilterInput'

const API_URL = import.meta.env.VITE_API_URL

const App = () => {
  const [coins, setCoins ] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [limit, setLimit] = useState(10)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(`${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`)
        if (!res.ok) throw new Error('Fail to fetch data.')
        const data = await res.json()
        setCoins(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCoins()
  }, [limit])

  return ( 
    <div>
      <h1 className='logo-text'>Aureus</h1>
      { loading && 
        <p>Loading...</p>
      }
      { error && 
        <div className='error'>
          {error}
        </div>
      }
      <div className='top-controls'>
        <FilterInput 
        
        />
        <LimitSelector 
          limit={limit}
          onLimitChange={setLimit }
        />
      </div>
        
      
      {!loading && !error && (
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