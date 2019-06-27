const {useState, useEffect, useRef} = React

export default function CardImage({urlToImage}) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef()

  useEffect(function() {
    const img = imgRef.current
    if (img && img.complete) {
      setLoaded(true)
    }
  }, [])

  return (
    <>
      <figure>
        <div style={{backgroundImage: `url('${urlToImage}')`}} />
        <img
          className={loaded ? 'loaded' : ''}
          ref={imgRef}
          onLoad={() => setLoaded(true)}
          src={urlToImage}
        />
      </figure>
      <style jsx>{`
        figure {
          height: 104px;
          left: -8px;
          margin: 0;
          position: absolute;
          top: -8px;
          width: 104px;
          z-index: 1;
        }

        div {
          background-size: cover;
          filter: blur(12px);
          height: 100%;
          width: 100%;
          position: absolute;
          transform: scale(1.05);
        }

        img {
          border-radius: 8px;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          position: absolute;
          transition: opacity 1.5s ease;
          transition-delay: 1s;
          width: 100%;
        }

        img.loaded {
          opacity: 1;
        }
      `}</style>
    </>
  )
}
