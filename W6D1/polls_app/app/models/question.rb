class Question < ApplicationRecord
  validates :text, presence: true
  validates :poll_id, presence: true

  has_many :answer_choices,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :AnswerChoice

  belongs_to :poll,
    primary_key: :id,
    foreign_key: :poll_id,
    class_name: :Poll

  has_many :responses,
    through: :answer_choices,
    source: :responses

  def results_n_plus_one
    choices = self.answer_choices
    results = {}

    choices.each do |choice|
      results[choice.text] = choice.responses.length
    end

    results
  end

  def results_wasteful
    choices = self.answer_choices.includes(:responses)
    results = {}

    choices.each do |choice|
      results[choice.text] = choice.responses.length
    end

    results
  end

  def results
    choices = AnswerChoice
                .left_outer_joins(:responses)
                .joins(:question)
                .where("questions.id = ?", self.id)
                .group("answer_choices.id")
                .select("COUNT(responses.id) as votes, answer_choices.text as option")

    results = {}
    choices.each do |choice|
      results[choice.option] = choice.votes
    end
    results
  end
end
