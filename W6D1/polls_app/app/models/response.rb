class Response < ApplicationRecord
  validates :user_id, presence: true
  validates :answer_choice_id, presence: true, uniqueness: {
    scope: :user_id,
    message: "User can only have one response per answer choice."
  }

  belongs_to :respondent,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :answer_choice,
    primary_key: :id,
    foreign_key: :answer_choice_id,
    class_name: :AnswerChoice
end
