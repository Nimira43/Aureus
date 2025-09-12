import { useState, useEffect } from 'react'

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

    // fetch(apiUrl)
    //   .then((res) => {
    //     if (!res.ok) throw new Error('Failed to fetch data.')
    //     return res.json()
    //   })
    //   .then((data) => {
    //     console.log(data)
    //     setCoins(data)
    //     setLoading(false)
    //   })
    // .catch((err) => {
    //   setError(err.message)
    //   setLoading(false)
    // })


  }, [])

  return ( 
    <div>
      <h1 className='logo'>Aureus</h1>
    </div>
  )
}
 
export default App