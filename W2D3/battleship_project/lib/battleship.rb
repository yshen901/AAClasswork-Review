require_relative "board"
require_relative "player"

class Battleship
  attr_reader :board, :player

  def initialize(n)
    @player = Player.new
    @board = Board.new(n)
    @remaining_misses = @board.size / 2
  end

  def start_game
    @board.place_random_ships
    puts "Number of ships: #{@board.size / 4}"
    @board.print
  end

  def lose?
    puts "you lose" if @remaining_misses <= 0
    @remaining_misses <= 0
  end

  def win?
    ships_left = @board.num_ships
    raise "negative ships" if ships_left < 0

    puts "you win" if ships_left == 0
    ships_left == 0
  end

  def game_over?
    self.win? || self.lose?
  end

  def turn
    pos = @player.get_move
    @remaining_misses -= 1 unless @board.attack(pos)

    @board.print
    puts "Remaining misses #{@remaining_misses}"
  end
end
