class GridsController < ApplicationController

  def index
    render json: Grid.all, status: :ok
  end

end
