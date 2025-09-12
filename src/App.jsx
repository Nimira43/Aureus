import { useState, useEffect } from 'react'

const apiUrl = import.meta.env.VITE_API_URL

const App = () => {
  const [coins, setCoins ] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data.')
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setCoins(data)
        setLoading(false)
      })
    .catch((err) => {
      setError(err.message)
    })
  }, [])

  return ( 
    <div>
      <h1 className='logo'>Aureus</h1>
    </div>
  )
}
 
export default App