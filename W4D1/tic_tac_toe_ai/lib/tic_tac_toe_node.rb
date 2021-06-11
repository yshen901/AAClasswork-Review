require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :prev_move_pos, :board, :next_mover_mark

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
    if @board.over?
      return @board.winner && @board.winner != evaluator  #false if @board.winner is nil or @board.winner is valuator
    end

    possible_moves = self.children

    if evaluator == @next_mover_mark #player's turn
      return possible_moves.all? { |child| child.losing_node?(evaluator) }
    else
      return possible_moves.any? { |child| child.losing_node?(evaluator) }
    end
  end

  def winning_node?(evaluator)
    if @board.over?
      return @board.winner == evaluator
    end

    possible_moves = self.children

    if evaluator == @next_mover_mark #player's turn
      return possible_moves.any? { |child| child.winning_node?(evaluator) }
    else
      return possible_moves.all? { |child| child.winning_node?(evaluator) }
    end
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    moves = []
    @board.rows.each_with_index do |row, i|
      row.each_with_index do |spot, j|
        pos = [i,j]
        next unless @board.empty?(pos)

        new_board = @board.dup
        new_board[pos] = @next_mover_mark
        new_next_mover = @next_mover_mark == :x ? :o : :x

        moves << TicTacToeNode.new(new_board, new_next_mover, pos)
      end
    end
    moves
  end
end
