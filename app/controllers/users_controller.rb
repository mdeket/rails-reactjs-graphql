class UsersController < ApplicationController
  def login
    user = User.find_by(email: params[:email].to_s.downcase)

    if user && user.authenticate(params[:password])
      if user.confirmed_at?
        auth_token = JsonWebToken.encode({ user_id: user.id })
        render json: { auth_token: auth_token }, status: :ok
      else
        render json: { error: 'Email not verified' }, status: :unauthorized
      end
    else
      render json: { error: 'Username not found' }, status: :bad_request
    end
  end

  def create
    user = User.new(user_params)
    if user.save
      SendEmailJob.set(wait: 5.seconds).perform_later(user)
      render json: { status: 'User created successfully' }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :bad_request
    end
  end

  def confirm
    token = params[:token].to_s

    user = User.find_by(confirmation_token: token)

    if user.present? && user.confirmation_token_valid?
      user.mark_as_confirmed!
      render json: { status: 'User confirmed successfully' }, status: :ok
    else
      render json: { status: 'Invalid token' }, status: :not_found
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
