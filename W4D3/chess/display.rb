require "colorize"
require_relative "cursor.rb"
require_relative "board.rb"

class Display
  def initialize
    @board = Board.new
    @cursor = Cursor.new([0,0], @board)
  end

  def render
    @board.render(@cursor.cursor_pos)
  end

  def loop
    @cursor.get_input
    self.render
  end
end