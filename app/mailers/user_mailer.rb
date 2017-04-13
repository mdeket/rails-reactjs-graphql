class UserMailer < ApplicationMailer
  default from: 'confirmation@example.com'

  def confirmation_email(user)
    @user = user
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end
end
