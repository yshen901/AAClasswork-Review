class Piece
  attr_reader :color, :board, :pos

  def initialize(color, board, pos)
    @color, @board, @pos = color, board, pos
    @opponent_color = @color == :b ? :w : :b
  end

  def to_s
    return "-" if empty?
    @color == :b ? symbol.to_s.downcase : symbol.to_s.upcase
  end

  def empty?
    self.symbol == :-
  end

  def valid_moves
    selected = moves.select do |move|
      displaced_piece = @board[move]
      original_pos = @pos.dup
      
      @board.move_piece(@pos, move)
      valid = !@board.in_check?(@color)

      @board.undo_move(original_pos, move, displaced_piece)
      valid
    end

    selected
  end

  def pos=(val)
    @pos = val
  end

  def symbol
    :-
  end

  private
  def move_into_check?(end_pos)
  end
end