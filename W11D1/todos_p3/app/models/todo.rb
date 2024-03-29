class Todo < ApplicationRecord
  validates :done, inclusion: { in: [true, false] }
  validates :title, :body, :user_id, presence: true

  has_many :taggings,
    primary_key: :id,
    foreign_key: :todo_id,
    class_name: :Tagging

  has_many :tags,
    through: :taggings,
    source: :tag

  belongs_to :user #also works if class_name and keys are standard

  def tag_names=(tag_names) 
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name)
    end
  end
end
