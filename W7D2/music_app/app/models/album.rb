# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  live       :boolean          default(FALSE), not null
#  title      :text             not null
#  year       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  band_id    :integer          not null
#
# Indexes
#
#  index_albums_on_band_id            (band_id)
#  index_albums_on_title              (title)
#  index_albums_on_title_and_band_id  (title,band_id) UNIQUE
#
class Album < ApplicationRecord
  validates :title, :year, :band_id, presence: true
  validates_inclusion_of :live, in: [true, false]
  validates :title, uniqueness: {
    scope: :band_id,
    message: "One band cannot have two albums with the same title."
  }

  belongs_to :band
  
  has_many :tracks,
    dependent: :destroy
end
