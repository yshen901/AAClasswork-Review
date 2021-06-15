require "byebug"

class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    take_turn until @game_over
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    answer = require_sequence
    
    if answer == @seq.join(" ")
      round_success_message
      @sequence_length += 1
    else
      @game_over = true
    end
  end

  def show_sequence
    add_random_color
    puts seq.join
    # sleep(2)
    # system("clear")
  end

  def require_sequence
    puts "Please enter a sequence!"
    gets.chomp
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts "Sequence correct!"
  end

  def game_over_message
    puts "Sequence incorrect! Game Over!"
  end

  def reset_game
    @seq = []
    @game_over = false
    @sequence_length = 1
  end
end
