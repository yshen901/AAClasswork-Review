require_relative "../modules/slideable"
require_relative "./piece"

class Queen < Piece
  include Slideable

  def initialize(color, board, pos)
    super
  end

  def symbol
    :Q
  end

  private
  def move_dirs
    horizontal_dirs + diagonal_dirs
  end
end