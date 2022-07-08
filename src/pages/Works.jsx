import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWorks } from '../features/works/worksSlice'

const Works = () => {
  const dispatch = useDispatch()

  const { works, isLoading, isError } = useSelector(state => state.works)

  useEffect(() => {
    if (isError) {
      console.error('error')
    }

    dispatch(getWorks())
  }, [isError, dispatch])

  console.log(works)

  return <div>Works</div>
}

export default Works
