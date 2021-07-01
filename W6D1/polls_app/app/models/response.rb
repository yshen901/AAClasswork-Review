class Response < ApplicationRecord
  validates :user_id, presence: true
  validates :answer_choice_id, presence: true
  validates :check_for_previous_response

  belongs_to :respondent,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :answer_choice,
    primary_key: :id,
    foreign_key: :answer_choice_id,
    class_name: :AnswerChoice

  belongs_to :question,
    through: :answer_choice,
    source: :question

  def sibling_responses
    self.question.responses.where("responses.id != ?", self.id)
  end

  def respondent_already_answered?
    sibling_responses.exists("responses.user_id = ?", self.user_id)
  end

  def check_for_previous_response
    if respondent_already_answered?
      errors[:user_id] << "User has already responded to this question"
    end
  end
end
