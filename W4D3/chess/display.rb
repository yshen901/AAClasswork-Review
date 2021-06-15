require "colorize"
require_relative "cursor.rb"

class Display
  attr_reader :board, :cursor

  def initialize(board)
    @board = board
    @cursor = Cursor.new([0,0], @board)
  end

  def render
    background = nil
    font_color = nil
    
    output = "  " + [*(0..7)].join("  ") + "\n"
    @board.rows.each_with_index do |row, x|
      output << "#{x}"
      row.each_with_index do |piece, y|
        background = (x + y) % 2 == 0 ? :light_blue : :light_black
        background = :red if [x,y] == @cursor.cursor_pos
        
        font_color = piece.color == :w ? :white : :black
        output << " #{piece.to_s} ".colorize(:color => font_color, :background => background)
      end
      output << "\n"
    end

    system("clear")
    puts output + "\n"
  end

  # def loop #for testing
  #   inputs = []
  #   done = 1
  #   while true
  #     if done == 1
  #       @board.move_piece([1,5], [2, 5])
  #       @board.move_piece([1,6], [3, 6])
  #       @board.move_piece([6,4], [5, 4])
  #       @board.move_piece([7,3], [3, 7])
  #       done -= 1
  #     end
  #     self.render

  #     print "White is in check!\n" if @board.in_check?(:w)
  #     print "Black is in check!\n" if @board.in_check?(:b)

  #     print "White is checkmated!" if @board.checkmate?(:w)
  #     print "Black is checkmated!" if @board.checkmate?(:b)

      
  #     if inputs.empty?
  #       puts "Move the cursor with the arrow keys, and select a piece to move with space/enter: " 
  #     else
  #       puts "Move the cursor with the arrow keys, and put down the piece with space/enter: "
  #     end
      
  #     input = @cursor.get_input
  #     if input && inputs.empty?
  #       inputs << input if @board[input].color
  #     elsif input
  #       inputs << input
  #     end

  #     if inputs.length == 2
  #       begin
  #         @board.move_piece(inputs[0], inputs[1])
  #         inputs = []
  #       rescue => e
  #         puts "#{e}"
  #         @cursor.get_input
  #         inputs = []
  #       end
  #     end
  #   end
  # end
end