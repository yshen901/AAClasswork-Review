# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  bonus      :boolean          default(FALSE), not null
#  ord        :integer          not null
#  title      :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  album_id   :integer          not null
#
# Indexes
#
#  index_tracks_on_album_id            (album_id)
#  index_tracks_on_album_id_and_title  (album_id,title) UNIQUE
#
class Track < ApplicationRecord
  validates :title, :ord, :album_id, presence: true
  validates_inclusion_of :bonus, in: [true, false]
  validates :title, uniqueness: {
    scope: :album_id,
    message: "One album cannot have two tracks with the same name!"
  }

  belongs_to :album
  
  belongs_to :band,
    through: :album,
    source: :band
end
