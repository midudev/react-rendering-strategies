import {MdExpandMore} from 'react-icons/md'

export default function CardHeader({title, description, handleReadMore, show}) {
  return (
    <>
      <header>
        <h3 itemProp="name">{title}</h3>
        <h4 itemProp="description">
          {description}
          <button className={show ? 'show' : ''} onClick={handleReadMore}>
            Read more...<MdExpandMore size="16px" />
          </button>
        </h4>
      </header>
      <style jsx>{`
        h3 {
          font-size: 18px;
          font-weight: 100;
          color: #444;
          font-size: 20px;
          line-height: 1.25;
          margin: 0;
          padding-bottom: 8px;
        }

        h4 {
          color: rgb(92, 97, 102);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          margin: 0;
        }

        button {
          background: transparent;
          border: 0;
          color: #09f;
          cursor: pointer;
          display: inline-flex;
          font-size: 12px;
          opacity: 0;
          transition: all 0.3s ease;
        }

        button.show {
          opacity: 1;
        }
      `}</style>
    </>
  )
}
