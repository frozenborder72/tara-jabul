import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getWorks } from '../features/works/worksSlice'

const Works = () => {
  const dispatch = useDispatch()

  const { works, isLoading, isError } = useSelector(state => state.works)

  const categories = Object.keys(works)

  useEffect(() => {
    if (isError) {
      console.error('error')
    }

    dispatch(getWorks())
  }, [isError, dispatch])

  return (
    <section className='container'>
      <h1>Works</h1>
      <div className='container-works'>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error loading data</p>
        ) : (
          categories.map((category, i) => (
            <div className='card' key={i}>
              <Link to={`/works/${category}`}>
                <h3>
                  {category
                    .split('-')
                    .map(w => w[0].toUpperCase() + w.slice(1))
                    .join(' ')}
                </h3>
                <img
                  src={
                    works[category][
                      Math.floor(Math.random() * works[category].length)
                    ].imageUrl
                  }
                  alt={
                    works[category][
                      Math.floor(Math.random() * works[category].length)
                    ].title
                  }
                />
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default Works
