import Card from "../card/Card"

interface Props {
  categoryId: any[]
}

function Main({categoryId}: Props) {
  console.log(categoryId)
  return (
    <main>
      {categoryId.map((product) => {
        return (
          <Card
            
          />
        )
      })}
    </main>
  )
}

export default Main