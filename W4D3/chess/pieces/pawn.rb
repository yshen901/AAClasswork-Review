require_relative "./piece"

class Pawn < Piece
  def initialize(color, board, pos)
    super
  end

  def moves
    forward_steps + side_attacks
  end

  def symbol
    :P
  end

  private
  def at_start_row?
    row, col = @pos
    @color == :w ? row == 1 : row == 6
  end

  def forward_dir
    @color == :w ? 1 : -1
  end

  def forward_steps
    x, y = pos
    dx = forward_dir
    poss_moves = []

    poss_moves << [x + dx, y] if @board.valid_pos?([x + dx, y])

    if at_start_row?
      poss_moves << [x + dx*2, y] if @board.valid_pos?([x + dx*2, y])
    end

    poss_moves
  end

  def side_attacks
    moves = [
      [forward_dir, -1],
      [forward_dir,  1]
    ]

    moves.select do |move|
      @board.valid_pos?(move) && @board[move].color == @opponent_color
    end
  end
end