import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useNearScreen from './useNearScreen';
const EMPTY_HTML = {
  __html: ''
};
const isServer = typeof window === 'undefined';
export default function ProgressiveHydration({
  children,
  force
}) {
  const ref = useRef(null);
  const isNearScreen = useNearScreen({
    ref
  });
  useEffect(function () {
    // CLIENT:
    // If we want to force the hydration or the element is near screen
    // then we hydrate the content to get the functionality ready
    if (force || isNearScreen) {
      ReactDOM.hydrate(children, ref.current);
    }
  }, [children, force, isNearScreen]); // SERVER: Just render the content as usual

  if (isServer) {
    return React.createElement("div", {
      ref: ref
    }, children);
  } // CLIENT: Avoid hydration until we say so


  return React.createElement("div", {
    ref: ref,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: EMPTY_HTML
  });
}