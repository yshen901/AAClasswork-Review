require_relative "./pieces/bishop"
require_relative "./pieces/queen"
require_relative "./pieces/rook"

require_relative "./pieces/pawn"
require_relative "./pieces/king"
require_relative "./pieces/knight"

require_relative "./pieces/null_piece"

class Board
  attr_reader :rows
  def initialize
    @rows = Array.new(8) { Array.new(8) }
    @null_piece = NullPiece.instance

    self.place_pieces
  end

  def place_pieces
    @rows.each_with_index do |row, x|
      if x.between?(2,5)
        row.each_with_index { |spot, y| @rows[x][y] = @null_piece }
        next
      end

      x <= 1 ? row_color = :w : row_color = :B
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

    self[end_pos] = self[start_pos]
    self[start_pos] = nil
  end

  def valid_move?(piece, end_pos)
    valid_pos?(end_pos)
  end

  def valid_pos?(pos)
    x, y = pos
    x.between?(0,7) && y.between?(0,7)
  end

  def render
    puts
    chars = @rows.map do |row|
      row.map do |piece|
        piece.to_s
      end
    end

    chars.each do |row|
      puts row.join(" ")
    end
    puts

    nil
  end
end