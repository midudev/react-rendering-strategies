import {useNearScreen} from '../useNearScreen'

const {useRef} = React

export default function ProgressiveHydration({children, force}) {
  const ref = useRef(null)
  const render = typeof window === 'undefined' || force
  const isNearScreen = useNearScreen({ref})

  // we're in the server or the element is above the fold
  if (render || isNearScreen) {
    return <div>{children}</div>
  }

  // avoid hydration until is in the viewport
  return (
    <div
      ref={ref}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{__html: ''}}
    />
  )
}
