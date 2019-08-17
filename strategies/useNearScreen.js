import {useState, useEffect} from 'react'

const targetCallbacks = new WeakMap()
const observerP =
  typeof window !== 'undefined' &&
  Promise.resolve(
    typeof window.IntersectionObserver === 'undefined' &&
      import('intersection-observer')
  ).then(
    () =>
      new window.IntersectionObserver(entries => {
        entries
          .filter(e => e.isIntersecting)
          .map(e => targetCallbacks.get(e.target))
          .filter(Boolean)
          .forEach(cb => cb())
      })
  )

function whenIntersecting(target, cb) {
  function unsubscribe() {
    observerP.then(observer => {
      observer.unobserve(target)
      targetCallbacks.delete(target)
    })
  }

  observerP.then(observer => {
    observer.observe(target)
    targetCallbacks.set(target, () => {
      unsubscribe()
      cb()
    })
  })

  return unsubscribe
}

export const useNearScreen = ({ref}) => {
  const [show, setShow] = useState(false)

  useEffect(
    () =>
      ref && ref.current && whenIntersecting(ref.current, () => setShow(true)),
    [ref]
  )

  return show
}
