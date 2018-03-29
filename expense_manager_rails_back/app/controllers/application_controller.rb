class ApplicationController < ActionController::API
    include ActionController::HttpAuthentication::Token::ControllerMethods
  	include Response
		include ExceptionHandler
	  before_action :restrict_access, except:[:sessions,:registrations,:graphql]


  def restrict_access
    if false
    authenticate_or_request_with_http_token do |token ,options|
       @user = User.find_by_authentication_token(token)
       @current_user = @user if @user.present?
    end
    end
    
	end

	
end
