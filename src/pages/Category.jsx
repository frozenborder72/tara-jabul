import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Category = () => {
  const { category } = useParams()
  const works = useSelector(state => state.works.works[category])

  return (
    <section className='container'>
      <h1>
        {category
          .split('-')
          .map(w => w[0].toUpperCase() + w.slice(1))
          .join(' ')}
      </h1>
      <div className='container-works'>
        {works.map(({ title, medium, imageUrl, dimensions }, i) => (
          <div className='card' key={i}>
            <h3>{title}</h3>
            <img src={imageUrl} alt={title} />
            <p>
              {medium}
              <br />
              {dimensions}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Category
