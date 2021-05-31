require "set"
require_relative "./player.rb"

class Game
  def initialize(players)
    @players = players.map { |name| Player.new(name) }
    @players_left = players.length
    @fragment = ""
    @current = 0

    words = File.open("./dictionary.txt")
    @dictionary = Set.new(words.readlines.map(&:chomp))
    @letters = Set.new([*('a'..'z'), *('A'..'Z')])
  end

  def run
    while true
      play_round until @players_left == 1
      reset_game
      print "Enter 'y' to play another game, 'n' to quit: "
      break unless gets.chomp == 'y' 
    end
  end
  
  def play_round
    while true
      play_move
      round_over? ? break : next_player
    end
    reset_round
  end
  
  def play_move
    player = @players[@current]
    guess = player.guess

    if guess.length == 1 && @letters.include?(guess)
      update_frag(guess)
    else
      player.alert_invalid_guess(guess)
    end
  end

  def update_frag(guess)
    @fragment << guess
  end

  def round_over?
    @dictionary.include?(@fragment)
  end

  def next_player
    @current = (@current + 1) % @players.length
    @current = (@current + 1) % @players.length while @players[@current].ghost?
  end

  def reset_round
    @fragment = ""
    @players[@current].add_letter
    if @players[@current].ghost?
      @players_left -= 1
      next_player
    end

    print "\n-------------------------------\n"
    print "".ljust(10) + "Round Over!" + "".ljust(10) + "\n"
    print "-------------------------------\n"
    @players.each do |player|
      print "#{player.name.ljust(10)}: #{"GHOST"[0...(5 - player.lives)]}\n"
    end
  end

  def reset_game
    @players.each do |player|
      unless player.ghost?
        puts "\n\nGAME OVER - #{player.name.upcase} WINS!"
      end
      player.reset
    end
    @players_left = players.length
  end
end