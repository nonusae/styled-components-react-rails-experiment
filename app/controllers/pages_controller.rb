class PagesController < ApplicationController
  def index
  end

  def episodes
    @episodes = Course.first.spisodes

    render json: { data: @episodes }
  end
end
