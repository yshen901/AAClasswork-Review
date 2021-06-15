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
    require_sequence
    sleep(0.5)

    unless @game_over
      round_success_message
      @sequence_length += 1
      system("clear")
    end
  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      puts color
      sleep(0.5)
      system("clear")
      sleep(0.5)
    end
  end

  def require_sequence
    puts "Please enter a sequence!"
    @seq.each do |color|
      answer = gets.chomp
      if color[0] != answer
        @game_over = false
        return
      end
    end
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
