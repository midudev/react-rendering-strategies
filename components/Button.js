export default function Button({children, onClick}) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          align-items: center;
          background: transparent;
          border: 1px solid #ccc;
          border-radius: 50px;
          cursor: pointer;
          display: flex;
          padding: 4px 8px;
        }
        button:hover {
          background: #f0f0f0;
        }
      `}</style>
    </>
  )
}
