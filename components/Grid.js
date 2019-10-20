export default function Grid({children}) {
  return (
    <>
      <section>{children}</section>
      <style jsx>{`
        section {
          display: grid;
          gap: 32px 32px;
          grid-template-columns: 1fr;
          padding-top: 16px;
          padding-left: 16px;
          max-width: 500px;
        }
      `}</style>
    </>
  )
}
