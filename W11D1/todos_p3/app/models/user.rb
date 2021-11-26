class User < ApplicationRecord
  attr_reader :password
  before_validation :ensure_session_token

  validates :username, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}
  validates :password_digest, presence: { message: "Password cannot be blank!"}

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(name, pwd)
    user = self.find_by(username: name)
    user && user.is_password?(pwd) ? user : nil
  end

  def password=(pwd)
    @password = pwd
    self.password_digest = BCrypt::Password.create(pwd)
  end

  def is_password?(pwd)
    BCrypt::Password.new(self.password_digest).is_password?(pwd)
  end
  
  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
