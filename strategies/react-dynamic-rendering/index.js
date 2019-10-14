import React, {useRef} from 'react'
import useNearScreen from './useNearScreen'

export default function DynamicRendering({children, isBot, force}) {
  const ref = useRef()
  const isNearScreen = useNearScreen({ref})

  if (isBot || isNearScreen || force) {
    return children
  } else {
    return <div ref={ref} style={{height: `100px`, border: '1px solid red'}} />
  }
}
