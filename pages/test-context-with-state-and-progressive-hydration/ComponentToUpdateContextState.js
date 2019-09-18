import {useContext} from 'react'
import ContextWithState from './ContextWithState'

export default function() {
  const {counter, setCounter} = useContext(ContextWithState)
  const handleClick = () => setCounter(counter + 1)

  return (
    <button onClick={handleClick}>
      Update context state (counter is {counter})
    </button>
  )
}
