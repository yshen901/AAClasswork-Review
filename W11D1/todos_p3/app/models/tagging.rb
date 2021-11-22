class Tagging < ApplicationRecord
  validates :todo_id, presence: true
  validates :tag_id, presence: true, uniqueness: {
    scope: :todo_id,
    message: "Already tagged! Can't create the same tag to the same todo twice."
  }
end
