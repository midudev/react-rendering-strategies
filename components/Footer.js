export default function Footer() {
  return (
    <>
      <footer>
        Developed by{' '}
        <svg width="20" height="20">
          <path d="M5 15a.502.502.0 0 1-.354-.146l-4-4a.5.5.0 0 1 0-.707l4-4a.5.5.0 0 1 .707.707L1.707 10.5l3.646 3.646a.5.5.0 0 1-.354.853zm10 0a.5.5.0 0 1-.354-.853l3.646-3.646-3.646-3.646a.5.5.0 0 1 .707-.707l4 4a.5.5.0 0 1 0 .707l-4 4a.498.498.0 0 1-.354.146zM7.5 15a.5.5.0 0 1-.424-.765l5-8a.5.5.0 0 1 .848.53l-5 8A.5.5.0 0 1 7.5 15z" />
        </svg>
        <a href="https://midu.dev">midudev</a>
      </footer>
      <style jsx>{`
        svg {
          background: #09f;
          border-radius: 16px;
          box-sizing: content-box;
          display: inline-block;
          fill: #fff;
          margin: 0 2px;
          padding: 4px;
          transform: scale(0.9);
        }
        footer {
          align-items: center;
          color: #555;
          display: flex;
          padding: 32px 0 16px;
          width: 100%;
        }
        a {
          border-bottom: 1px solid transparent;
          color: #09f;
          padding: 0px 2px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        a:hover {
          border-bottom: 1px solid #09f;
        }
      `}</style>
    </>
  )
}
