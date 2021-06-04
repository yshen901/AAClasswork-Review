require_relative "tile.rb"

require 'byebug'
require 'colorized_string'

class Board
  attr_reader :board

  def self.from_file(file_name)
    file = File.open(file_name)
    rows = file.readlines.map(&:chomp)
    tiles = rows.map do |row|
      tiles = row.split("")
      tiles.map { |tile| Tile.new(tile, tile != '0') }
    end
    self.new(tiles)
  end

  attr_reader :valid_pos, :valid_num
  
  def initialize(board)
    @board = board
    @valid_num = Set.new([*('1'..'9')])
    @valid_pos = Set.new([*('0'..'8')])
  end

  def run
    until won?
      play_round
    end
    render
    print "Congratulations! You did it!\n"
  end

  def won?
    board_values = @board.map do |row|
      row.map { |tile| tile.to_i }
    end
    
    #check rows
    group = Array.new(9)
    9.times do |i|
      9.times do |j|
        group[j] = board_values[i][j]
      end
      return false if group.include?(0) || group.uniq.length != 9
    end

    #check columns
    group = Array.new(9)
    9.times do |j|
      9.times do |i|
        group[i] = board_values[i][j]
      end
      return false if group.include?(0) || group.uniq.length != 9
    end

    #check group
    9.times do |i|
      row = i / 3
      col = i % 3
      idx = 0
      (row*3..row*3+2).each do |i|
        (col*3..col*3+2).each do |j|
          group[idx] = board_values[i][j]
          idx += 1
        end
      end
      return false if group.include?(0) || group.uniq.length != 9
    end

    true
  end

  def render
    print "    #{[*('0'..'8')].join(" ")}\n"
    print "---------------------\n"
    @board.each_with_index do |row, idx|
      print "#{idx} |"
      row.each { |tile| print " #{tile.to_s}" }
      print "\n"
    end
    nil
  end

  def play_round
    input = get_input
    input = get_input(true) until input

    # debugger

    x, y, val = input
    @board[x][y].set_val(val)
  end

  def get_input(try_agian=false)
    render
    print "Invalid input! " if try_agian
    print "Please enter a position and a value (e.g. 2,3,2 for position 2,3 and value 2)\n"
    input = gets.chomp.split(",")

    x, y, val = input
    return false unless @valid_pos.include?(x) && @valid_pos.include?(y)
    return false unless @valid_num.include?(val)

    return false if @board[x.to_i][y.to_i].given

    input.map(&:to_i)
  end

  def [](pos)
    x, y = pos
    @board[x][y]
  end

  def []=(pos, val)
    x, y = pos
    @board[x][y].set_val(val)
  end
end