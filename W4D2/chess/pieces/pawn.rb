require_relative "./piece"

class Pawn < Piece
  def initialize(color, board, pos)
    super
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
    if at_start_row?
      return [forward_dir, forward_dir * 2]
    else
      return [forward_dir]
    end
  end

  def side_attacks
    moves = [
      [forward_dir, -1],
      [forward_dir,  1]
    ]

    moves.select do |move|
      @board[move].color == @opponent_color
    end
  end
end