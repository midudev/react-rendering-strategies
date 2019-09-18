import {Fragment, useContext} from 'react'
import Card from 'components/Card'
import ContextWithState from './ContextWithState'

export default function(props) {
  const contextValue = useContext(ContextWithState)
  console.log(contextValue)

  return (
    <Fragment>
      <Card {...props} />
      <p>From context value: {contextValue.counter}</p>
    </Fragment>
  )
}
