class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]

  def create
    super
  end


  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  end

  # If you have extra params to permit, append them to the sanitizer.
  def configure_account_update_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  end

  # The path used after sign up.
  def after_sign_up_path_for(resource)
    super(resource)
  end


  private

  def sign_up_params
    params.require(:user).permit(:first_name, :logo_img, :last_name, :nickname, :email, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:first_name, :logo_img, :last_name, :nickname, :email, :password, :password_confirmation, :current_password)
  end
end
