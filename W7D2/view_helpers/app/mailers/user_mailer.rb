class UserMailer < ApplicationMailer
  default from: "everybody@appacademy.io"

  def welcome_email(user)
    @user = user
    @url = new_session_url
    mail(to: user.username, subject: "Welcome to the site!")
  end
end
