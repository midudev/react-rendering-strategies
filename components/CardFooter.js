import TimeAgo from 'components/TimeAgo'
import Share from 'components/Share'

export default function CardFooter({show, source, publishedAt, url, title}) {
  return (
    <>
      <footer>
        <div>
          <span>{source}</span>
          <TimeAgo date={publishedAt} />
        </div>
        <div className={show ? 'show' : 'hide'}>
          <Share url={url} title={title} />
        </div>
      </footer>
      <style jsx>{`
        footer {
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding-top: 16px;
        }

        footer div:first-child {
          display: flex;
        }

        .hide {
          opacity: 0;
          transition: all 0.3s ease;
        }

        .show {
          opacity: 1;
          transition: all 0.3s ease;
        }

        span {
          color: #09f;
          font-size: 14px;
          padding-right: 8px;
        }
      `}</style>
    </>
  )
}
