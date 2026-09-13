import { rooms } from "@/constants/roomAssets"
import NotFound from "../../../not-found"
import RoomGallery from "./RoomGallery"
import RoomInfo from "./RoomInfo"
import SimilarRooms from "./SimilarRooms"
import RoomPolicies from "./RoomPolicies"

const RoomPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const room = rooms.find(r => r.id === id)
  if (!room) return <NotFound />

  const similar = rooms.filter(r => r.gender === room.gender && r.id !== room.id)

  return (
    <div className="w-full min-h-screen bg-stone-50 dark:bg-stone-950 pt-20">
      <div className="items-center py-12 flex flex-col gap-16">
        <RoomGallery room={room} />
        <RoomInfo room={room} />
        <RoomPolicies />
        <SimilarRooms rooms={similar} />
      </div>
    </div>
  )
}

export default RoomPage