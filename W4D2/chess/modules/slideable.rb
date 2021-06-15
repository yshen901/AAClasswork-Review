module Slideable
  def moves
    all_moves = []
    move_dirs.each do |dir|
      new_moves = grow_unblocked_moves_in_dir(dir)
      all_moves.concat(new_moves)
    end
    all_moves
  end

  def horizontal_dirs
    HORIZONTAL_DIRS
  end

  def diagonal_dirs
    DIAGONAL_DIRS
  end

  private
  HORIZONTAL_DIRS = [
    [ 0,  1],
    [ 0, -1],
    [ 1,  0],
    [-1,  0]
  ]

  DIAGONAL_DIRS = [
    [-1, -1],
    [-1,  1],
    [ 1, -1],
    [ 1,  1]
  ]

  def mode_dirs #overwritten by subclass
  end

  def grow_unblocked_moves_in_dir(dx, dy)
    x, y = @pos
    moves = []

    while true
      x += dx
      y += dy

      break unless x.between?(0, 7) && y.between(0, 7)
      break if @board[[x,y]].color == @color
      
      moves << [x, y]
      break if @board[[x,y]].color == @opponent_color
    end
  end
end