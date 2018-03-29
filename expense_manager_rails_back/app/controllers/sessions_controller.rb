class SessionsController < Devise::SessionsController
    # respond_to :json

    def create
    	# binding.pry
    	@user = User.where(email:params[:credentials][:email]).first
            if @user&.valid_password?(params[:credentials][:password])
                # binding.pry
                render json: {
                    :user => {
                        email: @user.email,
                        token: @user.authentication_token
                    }
                },status: :created
            else
                # head(:unauthorized)
                render json: {
                    :errors =>{
                        msg: "No such user; check the submitted email address",
                        status: 400
                    }
                  }, status: 400
            end
    end
end