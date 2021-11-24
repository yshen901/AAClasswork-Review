class Tagging < ApplicationRecord
  validates :todo_id, presence: true
  validates :tag_id, presence: true, uniqueness: {
    scope: :todo_id,
    message: "Already tagged! Can't create the same tag to the same todo twice."
  }

  belongs_to :todo,
    primary_key: :id,
    foreign_key: :todo_id,
    class_name: :Todo
  
  belongs_to :tag,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: :Tag
end
