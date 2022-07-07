import { useState, useEffect } from 'react'
import axios from 'axios'

const Works = () => {
  const [works, setWorks] = useState('')

  useEffect(() => {
    axios
      .get('../data/data.json')
      .then(({ data }) => setWorks(data))
      .catch(console.error)
  })

  return (
    <div>
      Works
      {works}
    </div>
  )
}

export default Works
