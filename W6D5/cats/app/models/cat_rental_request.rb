class CatRentalRequest < ApplicationRecord
  STATUSES = [
    "PENDING",
    "APPROVED",
    "DENIED"
  ]

  validates :cat_id, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :status, presence: true, inclusion: {
    in: STATUSES,
    message: "Status must be either PENDING, APPROVED, or DENIED."
  }
  validate :does_not_have_overlap

  belongs_to :cat

  def overlapping_requests
    other_requests = CatRentalRequest.where.not(id: self.id)
    requests_for_same_cat = other_requests.where(cat_id: self.cat_id)
    overlapping_requests = requests_for_same_cat.where.not(
      "start_date > ? OR end_date < ?", self.end_date, self.start_date
    )
  end

  def does_not_have_overlap
    if overlapping_requests.exists?
      errors[:overlap_error] << "Request overlaps with another."
    end
  end
end
