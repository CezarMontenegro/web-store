interface Props {
  categoryId: any[]
}

function Main({categoryId}: Props) {
  console.log(categoryId)
  return (
    <main>
      {categoryId.map((product) => {
        return (
          <div>
            <div>{product.title}</div>
            <img src={product.thumbnail} alt="" />
            <span>{product.price}</span>
          </div>
        )
      })}
    </main>
  )
}

export default Main