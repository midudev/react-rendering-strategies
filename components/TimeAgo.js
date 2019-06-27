import {distanceInWords, format} from 'date-fns'
import {MdDateRange} from 'react-icons/md'

export default function TimeAgo({date}) {
  return (
    <>
      <span>
        <MdDateRange size="16px" />
        <time dateTime={format(date, 'YYYY-MM-DD')}>
          {distanceInWords(date, new Date())}
        </time>
      </span>
      <style jsx>{`
        span {
          align-items: center;
          color: #555;
          display: flex;
          justify-content: center;
          font-size: 12px;
        }
        time {
          padding-left: 4px;
        }
      `}</style>
    </>
  )
}
