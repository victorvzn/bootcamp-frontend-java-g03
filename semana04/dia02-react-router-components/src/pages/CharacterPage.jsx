import { useParams } from "react-router-dom"

const CharacterPage = () => {
  const { id } = useParams()


  return (
    <>
      <h3>CharacterPage {id}</h3>

      {/* {JSON.stringify(params)} */}
    </>
  )
}

export default CharacterPage