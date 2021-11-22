class Step < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  validates :done, inclusion: {in: [true, false]}
  validates :todo_id, presence: true
end
