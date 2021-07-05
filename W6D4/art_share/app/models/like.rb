class Like < ApplicationRecord
  belongs_to :imageable, polymorphic: true
end
