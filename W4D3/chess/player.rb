class Player
  attr_reader :color, :display

  def initialize(color, display)
    @color = color
    @display = display
  end

  def make_move
    inputs = []
    name = @color == :w ? "White" : "Black"

    while true
      @display.render
      if inputs.empty?
        puts "It is #{name}'s turn! Move the cursor with the arrow keys, and select a piece to move with space/enter: " 
      else
        puts "It is #{name}'s turn! Move the cursor with the arrow keys, and put down the piece with space/enter: "
      end
      
      input = @display.cursor.get_input
      if input
        spot = @display.board[input]
        if inputs.empty?
          inputs << input if spot.color == @color
        else
          inputs << input
        end
      end

      if inputs.length == 2
        begin
          @display.board.move_piece(inputs[0], inputs[1])
          break
        rescue => e
          puts "#{e}"
          @display.cursor.get_input
          inputs = []
        end
      end
    end
  end
end