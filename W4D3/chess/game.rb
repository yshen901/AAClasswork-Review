require_relative "board.rb"
require_relative "display.rb"
require_relative "player.rb"

class Game
  attr_reader :board, :display, :player_1, :player_2, :current_player

  def initialize
    @board = Board.new
    @display = Display.new(@board)

    @player_1 = Player.new(:w, @display)
    @player_2 = Player.new(:b, @display)

    @current_player = @player_1
  end

  def play
    until @board.checkmate?(@current_player.color)
      @display.render
      @current_player.make_move
      swap_turn!
    end
    notify_players
  end

  private
  def swap_turn!
    @current_player = @current_player == @player_1 ? @player_2 : @player_1
  end

  def notify_players
    @display.render
    winner = @board.checkmate?(:w) ? "Black" : "White"

    puts "#{winner} wins!"
  end
end

game = Game.new
game.play