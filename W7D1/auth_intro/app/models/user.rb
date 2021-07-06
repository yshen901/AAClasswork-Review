require 'bcrypt'

class User < ApplicationRecord
  attr_reader :password

  before_validation :ensure_session_token

  validates :username, presence: true
  validates :password_digest, presence: { message: "Password must be present." }
  validates :session_token, presence: true
  validates :password, length: { allow_nil: true, minimum: 6 }

  def self.find_by_credentials(username, pwd) 
    user = User.find_by(username: username)
    return nil if user.nil?
    
    BCrypt::Password.new(user.password_digest).is_password?(pwd) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
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
