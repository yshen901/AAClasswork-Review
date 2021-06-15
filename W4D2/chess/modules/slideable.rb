module Slideable
  def moves
    horizontal_dirs + diagonal_dirs
  end

  def horizontal_dirs
    total_moves = []
    HORIZONTAL_DIRS.each do |dir|
      new_moves = grow_unblocked_moves_in_dir(dir)
      horizontal_dirs.concat(new_moves)
    end
  end

  def diagonal_dirs
    total_moves = []
    DIAGONAL_DIRS.each do |dir|
      new_moves = grow_unblocked_moves_in_dir(dir)
      total_moves.concat(new_moves)
    end
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