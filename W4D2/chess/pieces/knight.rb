require_relative "../modules/stepable"
require_relative "./piece"

class Knight < Piece
  include Stepable

  def initialize(color, board, pos)
    super
  end

  def symbol
    :H
  end

  protected
  def move_diffs
    [
      [-1,  2],
      [-1, -2],
      [ 1,  2],
      [ 1, -2], 
      [-2,  1],
      [-2, -1],
      [ 2,  1],
      [ 2, -1]
    ]
  end
end