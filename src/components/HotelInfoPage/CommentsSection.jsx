import { useEffect } from "react"
import useCrud from "../../hooks/useCrud"

const CommentsSection = ({ hotelId }) => {

  const [reviews, getReviews] = useCrud()

  useEffect(() => {
    if (hotelId) {
      getReviews(`/reviews?hotelId=${hotelId}`)
    }
  }, [hotelId])

  return (
    <div>
      <div>
        {
          reviews?.map(reviewsInfo => (
            <div key={reviewsInfo.id}>
              <div>{reviewsInfo.rating}⭐</div>
              <p key={reviewsInfo.id}>{reviewsInfo.comment}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CommentsSection