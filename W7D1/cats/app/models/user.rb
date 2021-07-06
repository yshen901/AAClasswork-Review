require 'bcrypt'

class User < ApplicationRecord
  attr_reader :password

  validates :username, presence: true
  validates :session_token, presence: true

  validates :password, length: { minimum: 6, allow_nil: true}
  validates :password_digest, presence: { message: "Password cannot be blank." }

  before_validation :ensure_session_token

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(username, pwd)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(pwd) ? user : nil 
  end

  def is_password?(pwd)
    BCrypt::Password.new(self.password_digest).is_password?(pwd)
  end

  def password=(pwd)
    @password = pwd
    self.password_digest = BCrypt::Password.create(pwd)
  end

  def reset_session_token! 
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end
  
  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
