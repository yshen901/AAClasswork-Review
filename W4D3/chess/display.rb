require "colorize"
require_relative "cursor.rb"
require_relative "board.rb"

class Display
  attr_reader :board, :cursor

  def initialize
    @board = Board.new
    @cursor = Cursor.new([0,0], @board)
  end

  def render
    background = nil
    font_color = nil

    system("clear")
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
    inputs = []
    while true
      self.render
      
      if inputs.empty?
        puts "Move the cursor with the arrow keys, and select a piece to move with space/enter: " 
      else
        puts "Move the cursor with the arrow keys, and put down the piece with space/enter: "
      end

      input = @cursor.get_input
      inputs << input if input
      if inputs.length == 2
        begin
          @board.move_piece(inputs[0], inputs[1])
          inputs = []
        rescue => e
          puts e
          sleep(2)
        end
      end
    end
  end
end

display = Display.new
display.loop