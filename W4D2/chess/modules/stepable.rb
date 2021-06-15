module Stepable
  def moves
    valid_moves = []
    move_diffs.each do |move|
      x, y = pos
      x += move[0]
      y += move[1]
      
      next unless x.between?(0, 7) && y.between?(0, 7)
      next if @board[[x,y]].color == @color
      valid_moves << [x, y]
    end
  end

  private
  def move_diffs #overwritten by subclass
  end
end