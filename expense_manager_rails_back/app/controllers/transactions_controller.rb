class TransactionsController < ApplicationController




	def index
		@transactions = @user.transactions
		# binding.pry 
		if @transactions.present?
			render json:{
				data:{
					transactions:@transactions
				}
			},status:200
		else
			render json:{
				errors:{
					msg:'No transaction found',
					status:400
				} 
			},status:400
		end
	end


	def create
		@transaction = @user.transactions.create!(transaction_params)
		if @transaction
			render json:{
				data:{
					msg: 'Transaction created successfully',
					status: 200
				}
			},status: :created
		else
			render json:{
				data:{
					msg: 'Transaction not created. Please try again',
					status: 400
				}
			},status: 400
		end
	end

	def destroy
		deleted = @user.transactions.where(id:params[:id]).destroy_all
		if deleted.present?
			render json:{
				data:{
					msg: 'Deleted successfully',
					status:200
				}
			},status: 200
		else
			render json:{
				data:{
					msg: 'Deleted successfully',
					status:400
				}
			},status: 400

		end

	end


	private

	def transaction_params
		params.require(:transactionData).permit(:name,:amount,:type_of,:on_date,:note)
	end
end
