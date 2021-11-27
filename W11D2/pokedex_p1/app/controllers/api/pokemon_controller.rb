class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render :index
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      flash[:errors] = @pokemon.errors.full_messages
    end
  end

  def show
    @pokemon = Pokemon.find_by(id: params[:id]);
    if @pokemon
      render :show
    else
      flash[:errors] = ["Pokemon not found!"];
      redirect_to api_pokemon_url
    end
  end

  private
  def pokemon_params
    params.require(:pokemon).permit(
      :name, 
      :attack, 
      :defense, 
      :poke_type,
      :image_url
    );
  end
end
