class SendEmailJob < ApplicationJob
  queue_as :default

  def perform(user)
    # Do something later
    @user = user
    UserMailer.confirmation_email(user).deliver_later
  end
end
