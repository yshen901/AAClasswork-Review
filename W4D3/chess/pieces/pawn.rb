require_relative "./piece"
require "byebug"

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

    poss_move = [x + dx, y]

    return poss_moves unless @board.valid_pos?(poss_move) && @board[poss_move].symbol == :- #can't move forward anymore
    poss_moves << poss_move

    if at_start_row?
      poss_move = [x + dx*2, y]
      poss_moves << poss_move if @board.valid_pos?(poss_move) && @board[poss_move].symbol == :-
    end

    poss_moves
  end

  def side_attacks
    x, y = @pos
    moves = [
      [x + forward_dir, y - 1],
      [x + forward_dir, y + 1]
    ]
    
    moves.select do |move|
      @board.valid_pos?(move) && @board[move].color == @opponent_color
    end
  end
end