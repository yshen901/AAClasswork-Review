require_relative "board.rb"
require "set"

nums = Set.new([*('0'..'9')])

class Game
  attr_reader :board

  def initialize(size, name)
    @board = Board.new(size)
    @board.populate

    @name = name
  end

  def run
    play_round until @board.won?
  end

  def play_round
    cards = Array.new(2)
    2.times do |i|
      refresh "Please enter the position of the card you'd like to flip (e.g. 2,3)\n"
      pos = gets.chomp.split(",").map { |val| val.to_i }

      cards[i] = @board.reveal(pos)
    end

    if cards[0] != cards[1]
      cards.each { |card| card.hide }
      refresh "Try again"
    else
      refresh "It's a match!"
    end
    gets
  end

  def refresh (message)
    system "clear"
    @board.render
    print message
  end
end