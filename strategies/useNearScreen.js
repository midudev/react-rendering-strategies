import {useState, useEffect} from 'react'

const isClient = typeof window !== 'undefined'
const hasIntersectionObserverSupport = () =>
  typeof window.IntersectionObserver !== 'undefined'

// import intersection observer polyfill only if on client
// and if not supported by browser
const getIntersectionObserver = () =>
  Promise.resolve(
    isClient &&
      !hasIntersectionObserverSupport() &&
      import('intersection-observer')
  )

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

// create observer instance
const observer = getIntersectionObserver().then(
  () =>
    new window.IntersectionObserver(
      handleIntersect,
      intersectionObserverOptions
    )
)

export const useNearScreen = ({ref}) => {
  const [show, setShow] = useState(false)

  useEffect(
    function() {
      const {current} = ref
      if (!current) return

      observer.then(observer => observer.observe(current))

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
