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
    []
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