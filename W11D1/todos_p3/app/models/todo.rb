class Todo < ApplicationRecord
  validates :done, inclusion: { in: [true, false] }
  validates :title, presence: true
  validates :body, presence: true
end
