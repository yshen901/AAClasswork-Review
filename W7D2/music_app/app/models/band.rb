class Band < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :albums,
    dependent: :destroy
end
