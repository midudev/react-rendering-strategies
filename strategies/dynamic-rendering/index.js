import {useNearScreen} from '../useNearScreen'

const {useRef} = React

export default function DynamicRendering({children, isBot, force}) {
  const ref = useRef(null)
  const isNearScreen = useNearScreen({ref})

  console.log(force)

  if (isBot || isNearScreen || force) {
    return children
  } else {
    return <div ref={ref} style={{height: `100px`, border: '1px solid red'}} />
  }
}
