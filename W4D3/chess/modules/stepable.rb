module Stepable
  def moves
    valid_moves = []
    move_diffs.each do |move|
      x, y = pos
      dx, dy = move
      new_pos = [x + dx, y + dy]
      
      next unless @board.valid_pos?(new_pos)
      next if @board[new_pos].color == @color
      valid_moves << new_pos
    end

    valid_moves
  end

  private
  def move_diffs #overwritten by subclass
  end
end