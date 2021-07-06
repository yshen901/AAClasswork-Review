require 'action_view'

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper

  COLORS = [
    'white',
    'black',
    'gray',
    'calico',
    'tabby'
  ]

  validates :birth_date, presence: true
  validates :sex, presence: true, inclusion: {
    in: ['M', 'F'],
    message: "A cat's sex must be either M or F."
  }
  validates :color, presence: true, inclusion: {
    in: COLORS,
    message: "must choose from a list of approved colors"
  }
  validates :name, presence: true
  validates :description, presence: true

  has_many :cat_rental_requests, dependent: :destroy

  def age
    time_ago_in_words(self.birth_date)
  end

  def persisted?
    !!self.id
  end
end
