import axios from 'axios'

const getWorks = async () => {
  const res = await axios.get(
    'https://raw.githubusercontent.com/frozenborder72/tara-jabul/main/src/data/data.json'
  )

  return res.data
}

const worksService = {
  getWorks,
}

export default worksService
