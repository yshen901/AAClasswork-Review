require_relative "./pieces/bishop"
require_relative "./pieces/queen"
require_relative "./pieces/rook"

require_relative "./pieces/pawn"
require_relative "./pieces/king"
require_relative "./pieces/knight"

require_relative "./pieces/null_piece"

require "byebug"

class Board
  attr_reader :rows, :null_piece

  def initialize
    @rows = Array.new(8) { Array.new(8) }
    @null_piece = NullPiece.instance

    self.place_pieces
  end

  def place_pieces
    @rows.each_with_index do |row, x|
      # if x.between?(1,6)
      if x.between?(2, 5)
        row.each_with_index { |spot, y| @rows[x][y] = @null_piece }
        next
      end

      x <= 1 ? row_color = :w : row_color = :b
      if x == 1 || x == 6
        row.each_with_index { |spot, y| @rows[x][y] = Pawn.new(row_color, self, [x, y]) }
      else
        row.each_with_index do |spot, y|
          if y == 0 || y == 7
            rows[x][y] = Rook.new(row_color, self, [x, y])
          elsif y == 1 || y == 6
            rows[x][y] = Knight.new(row_color, self, [x, y])
          elsif y == 2 || y == 5
            rows[x][y] = Bishop.new(row_color, self, [x, y])
          elsif y == 3
            rows[x][y] = Queen.new(row_color, self, [x, y])
          elsif y == 4
            rows[x][y] = King.new(row_color, self, [x, y])
          end
        end
      end
    end
  end

  def [](pos)
    x, y = pos
    @rows[x][y]
  end

  def []=(pos, val)
    x, y = pos
    @rows[x][y] = val
  end

  def move_piece(start_pos, end_pos)
    raise "Invalid start!" unless self[start_pos]
    raise "Invalid move!" unless valid_move?(self[start_pos], end_pos)

    self[start_pos].pos = end_pos
    self[end_pos] = self[start_pos]
    self[start_pos] = @null_piece
  end

  def valid_move?(piece, end_pos)
    return false if piece == @null_piece
    return false unless valid_pos?(end_pos)
    piece.moves.include?(end_pos)
  end

  def valid_pos?(pos)
    x, y = pos
    x.between?(0,7) && y.between?(0,7)
  end

  def in_check?(color)
    king_pos = nil
    opposing_pieces = []
    opposing_color = color == :w ? :b : :w

    @rows.each do |row|
      row.each do |piece|
        king_pos = piece.pos if piece.color == color && piece.symbol == :K
        opposing_pieces << piece if piece.color == opposing_color
      end
    end

    opposing_pieces.any? { |opposing_piece| opposing_piece.moves.include?(king_pos) }
  end

  def checkmate?(color)
    return false unless in_check?(color)

    @rows.all? do |row|
      row.all? do |piece|
        piece.color != color || piece.valid_moves.length == 0 #all of the player's pieces has no valid moves
      end
    end
  end
end