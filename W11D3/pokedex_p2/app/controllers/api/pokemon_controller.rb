class Api::PokemonController < ApplicationController
  def index 
    sleep 0.5
    @pokemon = Pokemon.all 
    render :index 
  end

  def show 
    sleep 0.5
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params.except(:move_names)) # ignores moves for now
    @pokemon[:attack] = pokemon_params[:attack].to_i
    @pokemon[:defense] = pokemon_params[:defense].to_i

    if @pokemon.save
      @pokemon.move_names = pokemon_params[:move_names]
      render :show
    else
      debugger;
    end
  end

  private
  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url, move_names: [])
  end
end
