import {useState, useEffect} from 'react'

let observer
const isClient = typeof window !== 'undefined'

const hasIntersectionObserverSupport = () =>
  typeof window.IntersectionObserver !== 'undefined'

// import intersection observer polyfill only if on client
// and if not supported by browser
const getIntersectionObserver = () => {
  return Promise.resolve(
    isClient &&
      !hasIntersectionObserverSupport() &&
      import('intersection-observer')
  )
}

// options for intersection observer in order to improve the effect
const intersectionObserverOptions = {
  root: null, // windows viewport will be used
  rootMargin: '200px 0px 0px 0px'
}

const handleIntersect = (entries, observer) => {
  entries
    .filter(entry => entry.isIntersecting)
    .forEach(entry => {
      const {target} = entry
      target._onIntersect(observer)
    })
}

// get observer from the cache or create a new one
const getObserver = () =>
  getIntersectionObserver().then(_ => {
    if (observer) return observer
    if (isClient) {
      return new window.IntersectionObserver(
        handleIntersect,
        intersectionObserverOptions
      )
    }
  })

export const useNearScreen = ({ref}) => {
  const [show, setShow] = useState(false)

  useEffect(
    function() {
      const {current} = ref
      if (!current) return
      // get observer async and only when needed
      getObserver().then(observer => observer.observe(current))
      // mutate the current target to add a method to be executed when intersecting
      current._onIntersect = observer => {
        setShow(true)
        observer.unobserve(current)
      }
      // clean observed element when unmounted
      return () => (current._isSubscribed = false)
    },
    [ref]
  )

  return show
}
