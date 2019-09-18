import React, {useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'
import {useNearScreen} from '../useNearScreen'

const EMPTY_HTML = {__html: ''}
const isServer = typeof window === 'undefined'

export default function ProgressiveHydration({children, force}) {
  const ref = useRef(null)
  const refHydrated = useRef(false)
  const isNearScreen = useNearScreen({ref})

  useEffect(
    function() {
      // CLIENT:
      // If we want to force the hydration or the element is near screen
      // then we hydrate the content to get the functionality ready
      if (!refHydrated.current && (force || isNearScreen)) {
        ReactDOM.hydrate(children, ref.current, () => {
          refHydrated.current = true
        })
      }
    },
    [children, force, isNearScreen]
  )

  // SERVER: Just render the content as usual
  if (isServer) {
    return <div ref={ref}>{children}</div>
  }

  // CLIENT: If already hydrated, then use children
  if (refHydrated.current) return children

  // CLIENT: Avoid hydration until we say so
  return (
    <div
      ref={ref}
      suppressHydrationWarning
      dangerouslySetInnerHTML={EMPTY_HTML}
    />
  )
}
