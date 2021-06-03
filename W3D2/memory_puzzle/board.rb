require_relative "./Code.rb"

class Board
  def initialize(size)
    raise "Board cannot be so large" if size > 11
    raise "Please enter an even number" unless size % 2 == 0
    @size = size
    @board = Array.new(size) { Array.new(size) }
  end

  def populate
    values = [*('a'..'z'), *('A'..'Z'), *('0'..'9')]
    spots = [*(0...@size*@size)].shuffle

    values.sample(@size*@size/2).each_with_index do |val, idx|
      val_to_spots(val, spots[idx * 2], spots[idx * 2 + 1])
    end
  end

  def val_to_spots(val, *spots)
    spots.each do |spot|
      @board[spot / @size][spot % @size] = Code.new(val)
    end
  end

  def won?
    @board.each do |row|
      row.each do |card|
        return false unless card.face_up
      end
    end
    true
  end

  def render
    size = @board.length
    print '  ' + [*('0'...@size.to_s)].join(' ') + "\n"
    @board.each_with_index do |row, idx|
      print "#{idx}"
      row.each { |card| print " #{card.to_s}"}
      print "\n"
    end 
    nil
  end

  def reveal(pos)
    card = self[pos]
    card.reveal
    self.render
    card
  end

  def [](pos)
    x, y = pos
    @board[x][y]
  end

  def []=(pos, val)
    x, y = pos
    @board[x][y] = val
  end
end