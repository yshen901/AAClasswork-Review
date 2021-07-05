class ArtworkShare < ApplicationRecord
  validates :viewer_id, presence: true
  validates :artwork_id, presence: true, uniqueness: {
    scope: :viewer_id,
    message: "Artwork cannot be shared to the same user twice."
  }

  belongs_to :artwork,
    primary_key: :id,
    foreign_key: :artwork_id,
    class_name: :Artwork

  belongs_to :viewer,
    primary_key: :id,
    foreign_key: :viewer_id,
    class_name: :User
end
