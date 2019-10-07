import React, {useEffect, useRef, useState} from 'react'

export default function StaticContent({children}) {
  const ref = useRef(null)
  const [render, setRender] = useState(typeof window === 'undefined')

  useEffect(function() {
    // check if the innerHTML is empty as client side navigation
    // need to render the component without server-side backup
    const isEmpty = ref.current.innerHTML === ''
    if (isEmpty) {
      setRender(true)
    }
  }, [])

  // if we're in the server or a spa navigation, just render it
  if (render) {
    return <div>{children}</div>
  }

  // avoid re-render on the client
  return (
    <div
      ref={ref}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{__html: ''}}
    />
  )
}
