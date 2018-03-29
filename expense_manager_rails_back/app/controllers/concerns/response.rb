module Response
  def json_response(object, status = :ok ,msg)
    render json: {
    	data: object, status: status, msg: msg
    }
  end
end
