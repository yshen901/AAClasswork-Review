require_relative "./pieces/piece"

class Board
  attr_reader :rows
  def initialize
    @rows = Array.new(8) { Array.new(8) }
    self.place_pieces
  end

  def place_pieces
    @rows.each_with_index do |row, x|
      if x == 0
        row.each_with_index { |spot, y| @rows[x][y] = Piece.new }
      elsif x == 1
        row.each_with_index { |spot, y| @rows[x][y] = Piece.new }
      elsif x == 6
        row.each_with_index { |spot, y| @rows[x][y] = Piece.new }
      elsif x == 7
        row.each_with_index { |spot, y| @rows[x][y] = Piece.new }
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
    symbols = @rows.map do |row|
      row.map do |piece|
        piece ? "P" : "-"
      end
    end

    symbols.each do |row|
      puts row.join(" ")
    end
    puts

    nil
  end
end