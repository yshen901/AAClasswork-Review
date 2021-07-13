# == Schema Information
#
# Table name: bands
#
#  id         :bigint           not null, primary key
#  name       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_bands_on_name  (name) UNIQUE
#
class Band < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :albums,
    dependent: :destroy

  has_many :tracks,
    through: :albums,
    source: :tracks
end
