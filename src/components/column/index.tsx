import type { FixedColumnID } from "@shared/types"
import { useTitle } from "react-use"
import { Dnd } from "./dnd"
import { currentColumnIDAtom } from "~/atoms"

export function Column({ id }: { id: FixedColumnID }) {
  const [currentColumnID, setCurrentColumnID] = useAtom(currentColumnIDAtom)
  useEffect(() => {
    setCurrentColumnID(id)
  }, [id, setCurrentColumnID])

  useTitle(`NewsNow | ${metadata[id].name}`)

  return (
    <>
      {id === currentColumnID && <Dnd />}
    </>
  )
}
