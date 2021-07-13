class Album < ApplicationRecord
  validates :title, :year, :live, :band_id, presence: true
  validates :title, uniqueness: {
    scope: :band_id,
    message: "One band cannot have two albums with the same title."
  }

  belongs_to :band
end
