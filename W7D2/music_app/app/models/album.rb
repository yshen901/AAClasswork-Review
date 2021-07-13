class Album < ApplicationRecord
  validates :title, :year, :band_id, presence: true
  validates_inclusion_of :live, in: [true, false]
  validates :title, uniqueness: {
    scope: :band_id,
    message: "One band cannot have two albums with the same title."
  }

  belongs_to :band
end
