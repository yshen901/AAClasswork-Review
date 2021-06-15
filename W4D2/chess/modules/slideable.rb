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

  def grow_unblocked_moves_in_dir(dir)
    moves = []
    new_pos = @pos.dup
    dx, dy = dir

    while true
      new_pos[0] += dx
      new_pos[1] += dy

      break unless @board.valid_pos?(new_pos)
      break if @board[new_pos].color == @color
      
      moves << new_pos.dup
      break if @board[new_pos].color == @opponent_color
    end

    moves
  end
end