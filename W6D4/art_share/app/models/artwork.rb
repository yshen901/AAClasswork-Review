class Artwork < ApplicationRecord
  validates :image_url, presence: true
  validates :artist_id, presence: true
  validates :title, presence: true, uniqueness: {
    scope: :artist_id,
    message: "The same artist cannot have two artworks with the same title."
  }

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :User

  has_many :artwork_shares,
    primary_key: :id,
    foreign_key: :artwork_id,
    class_name: :ArtworkShare

  has_many :shared_viewers,
    through: :artwork_shares,
    source: :viewer
end
