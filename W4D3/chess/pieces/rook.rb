require_relative "../modules/slideable"
require_relative "./piece"

class Rook < Piece
  include Slideable

  def initialize(color, board, pos)
    super
  end

  def symbol
    :R
  end

  private
  def move_dirs
    horizontal_dirs
  end
end