class ShortenedUrl < ApplicationRecord
  validates :short_url, presence: true, uniqueness: true
  validates :long_url, presence: true
  validates :user_id, presence: true

  belongs_to :submitter,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: :User

  has_many :visits,
    foreign_key: :url_id,
    primary_key: :id,
    class_name: :Visit
  
  has_many :visitors,
    -> { distinct },
    through: :visits,
    source: :user

  def self.random_code
    short_url = SecureRandom.urlsafe_base64
    short_url = SecureRandom.urlsafe_base64 while self.exists?(short_url: short_url)
    short_url
  end

  def self.generate_url(user, long_url)
    self.create!({
      user_id: user.id,
      long_url: long_url,
      short_url: self.random_code
    })
  end

  def num_clicks
    self.visits.length
  end

  def num_uniques
    self.visitors.length
  end

  def num_recent_uniques
    self.visits
      .select(:user_id)
      .where('created_at > ?', 10.minutes.ago)
      .distinct
      .count
  end
end
