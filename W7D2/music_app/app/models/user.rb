# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  password_digest :text             not null
#  session_token   :text             not null
#  username        :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_username  (username) UNIQUE
#
require 'bcrypt'

class User < ApplicationRecord
  attr_reader :password
  before_validation :ensure_session_token

  validates :username, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: { message: "Password cannot be blank." }

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(name, pwd)
    user = User.find_by(username: name)
    return nil unless user
    user.is_password?(pwd) ? user : nil
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
