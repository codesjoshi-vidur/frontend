import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:4000/staging-api/test')
      .then((res) => setData(res.data))
      .catch((err) => setData({ error: err.message }))
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
    </div>
  )
}

export default App
