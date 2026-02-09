import { useState } from 'react'
import '../styles/Testimonials.css'
import reviewPhoto from '../assets/Testemonials/Review 1.JPG'

interface Review {
  id: string
  images: string[]
  stars: number
  text: string
  date: string
}

const exampleReview: Review = {
  id: 'example-1',
  images: [reviewPhoto],
  stars: 5,
  text: 'I received my t-shirt today and I absolutely love it. The design is dope and looks amazing — thank you, Fumbled Hearts! It also arrived super fast.',
  date: 'Jan 29, 2026',
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([exampleReview])
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [stars, setStars] = useState<number>(5)
  const [reviewText, setReviewText] = useState<string>('')

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && uploadedImages.length < 4) {
      Array.from(e.target.files).forEach((file) => {
        if (uploadedImages.length < 4) {
          const reader = new FileReader()
          reader.onload = (event) => {
            if (typeof event.target?.result === 'string') {
              setUploadedImages((prev) => [...prev, event.target?.result as string])
            }
          }
          reader.readAsDataURL(file)
        }
      })
    }
  }

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (!reviewText.trim()) return

    const newReview: Review = {
      id: `review-${Date.now()}`,
      images: uploadedImages,
      stars,
      text: reviewText,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    }

    setReviews((prev) => [newReview, ...prev])
    setUploadedImages([])
    setStars(5)
    setReviewText('')
  }

  return (
    <section className="testimonials" aria-label="Customer Testimonials">
      <div className="testimonials__hero">
        <h1 className="testimonials__title">What Our Customers Say</h1>
        <p className="testimonials__subtitle">Share your Fumbled Hearts experience</p>
      </div>

      <div className="testimonials__container">
        {/* Submission Form */}
        <div className="testimonials__form-box">
          <form className="testimonials__form" onSubmit={handleSubmitReview}>
            <fieldset className="testimonials__fieldset">
              <legend className="testimonials__legend">Leave Your Review</legend>

              {/* Image Upload */}
              <div className="testimonials__field">
                <label className="testimonials__label">Upload Photos (up to 4)</label>
                <div className="testimonials__upload">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploadedImages.length >= 4}
                    className="testimonials__input-file"
                  />
                  <span className="testimonials__upload-hint">
                    {uploadedImages.length}/4 images
                  </span>
                </div>

                {uploadedImages.length > 0 && (
                  <div className="testimonials__image-grid">
                    {uploadedImages.map((img, idx) => (
                      <div key={idx} className="testimonials__image-item">
                        <img src={img} alt={`Upload ${idx + 1}`} />
                        <button
                          type="button"
                          className="testimonials__remove-img"
                          onClick={() => removeImage(idx)}
                          aria-label={`Remove image ${idx + 1}`}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Star Rating */}
              <div className="testimonials__field">
                <label className="testimonials__label">Rating</label>
                <div className="testimonials__stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      className={`testimonials__star ${s <= stars ? 'is-active' : ''}`}
                      onClick={() => setStars(s)}
                      aria-label={`${s} star${s > 1 ? 's' : ''}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div className="testimonials__field">
                <label className="testimonials__label">Your Review</label>
                <textarea
                  className="testimonials__textarea"
                  placeholder="Share your experience with our products..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows={5}
                />
              </div>

              <button type="submit" className="testimonials__submit">
                Submit Review
              </button>
            </fieldset>
          </form>
        </div>

        {/* Reviews Display */}
        <div className="testimonials__grid">
          {reviews.map((review) => (
            <article key={review.id} className="testimonials__card">
              {/* Images */}
              {review.images.length > 0 && (
                <div className="testimonials__card-images">
                  {review.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Review image ${idx + 1}`}
                      className="testimonials__card-img"
                    />
                  ))}
                </div>
              )}

              {/* Stars */}
              <div className="testimonials__card-stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    className={`testimonials__star-display ${s <= review.stars ? 'is-filled' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review Text with Quotes */}
              <p className="testimonials__card-text">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Date */}
              <p className="testimonials__card-date">{review.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
