require_relative "board.rb"
require "set"

nums = Set.new([*('0'..'9'), '10', '11'])

class Game
  attr_reader :board

  def initialize(size, name)
    @board = Board.new(size)
    @board.populate

    @size

    @name = name
  end

  def run
    play_round until @board.won?
  end

  def play_round
    cards = []
    2.times do |i|
      refresh "Please enter the position of the card you'd like to flip (e.g. 2,3)\n"
      pos = gets.chomp.split(",").map do |val|
        begin
          Integer(val)
        rescue
          end_round(cards)
          return
        end
      end
      break unless pos.length == 2 && @board.in_bound(pos)

      cards[i] = @board.reveal(pos)
    end

    end_round(cards)
  end

  def refresh (message)
    system "clear"
    @board.render
    print message
  end

  def end_round(cards)
    if cards.length != 2
      refresh "Invalid input, try again!\n"
      cards.each { |card| card.hide }
    elsif cards[0] != cards[1]
      refresh "Try again\n"
      cards.each { |card| card.hide }
    else
      refresh "It's a match!\n"
    end
    gets
  end
end