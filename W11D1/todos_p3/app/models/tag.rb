class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :taggings,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: :Tagging

  has_many :todos,
    through: :taggings,
    source: :todo
end
