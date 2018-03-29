class RegistrationsController < Devise::RegistrationsController
   



	def create

		@email = params[:registerData][:email] if params[:registerData].present?

		@user = User.find_by_email(@email) if @email.present?

		if @user.present?
			
			render json: {
				errors: {
					msg: 'user already present',
					status:400
				}
			},status:400
		else

			@user = User.create!(regsiter_params)
			render json:{
				user: {
					msg: 'Registration Successful',
					status:200
				}
			},status:200

		end
		

	end






	private

	def regsiter_params

		params.require(:registerData).permit(:email,:password)

	end


end