require "colorize"
require_relative "cursor.rb"
require_relative "board.rb"

class Display
  def initialize
    @board = Board.new
    @cursor = Cursor.new([0,0], @board)
  end

  def render
    background = nil
    font_color = nil

    puts "  " + [*(0..7)].join("  ")
    @board.rows.each_with_index do |row, x|
      print "#{x}"
      row.each_with_index do |piece, y|
        background = (x + y) % 2 == 0 ? :light_blue : :light_black
        background = :red if [x,y] == @cursor.cursor_pos
        
        font_color = piece.color == :w ? :white : :black
        print " #{piece.to_s} ".colorize(:color => font_color, :background => background)
      end
      print "\n"
    end
    puts

    nil
  end

  def loop
    while true
      system("clear")
      self.render
      @cursor.get_input
    end
  end
end