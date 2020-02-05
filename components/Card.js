import CardImage from 'components/CardImage'
import CardFooter from 'components/CardFooter'
import CardHeader from 'components/CardHeader'

const {useState} = React

export default function Card({
  content,
  url,
  urlToImage,
  publishedAt,
  description,
  source,
  title
}) {
  const [showMore, setShowMore] = useState(false)
  const [hover, setHover] = useState(false)

  const handleReadMore = e => {
    e.preventDefault()
    e.stopPropagation()
    setShowMore(!showMore)
  }

  return (
    <>
      <a
        href={url}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <article itemScope itemType="http://schema.org/Article">
          <CardImage urlToImage={urlToImage} />
          <div>
            <CardHeader
              title={title}
              description={description}
              handleReadMore={handleReadMore}
              show={hover && !showMore}
            />
          </div>

          <p className={showMore ? 'show' : ''}>{content}</p>

          <div>
            <CardFooter
              show={hover}
              source={source.name}
              publishedAt={publishedAt}
              url={url}
              title={title}
            />
          </div>
        </article>
      </a>
      <style jsx>{`
        @keyframes scale {
          from {
            transform: scale(0.9);
          }
          to {
            transform: scale(1);
          }
        }

        a {
          display: block;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        a:hover {
          transform: scale(1.05);
        }

        a:hover .onHover {
          opacity: 1;
        }

        .onHover {
          opacity: 0;
          transition: all 0.3s ease;
        }

        div {
          padding-left: 96px;
        }

        p {
          color: #000;
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
          max-height: 0;
          overflow: hidden;
          transition: height 0.3s ease;
          word-break: break-word;
        }

        p.show {
          max-height: 5000px;
          padding-top: 16px;
        }

        a:hover article {
          box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
          transition: all 0.2s ease-in 0s;
        }

        article {
          animation: scale 1s ease-in-out;
          background: rgb(255, 255, 255);
          box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          padding: 16px;
          position: relative;
          transition: all 0.2s ease-out 0s;
        }
      `}</style>
    </>
  )
}
