require_relative 'tic_tac_toe_node'
require 'byebug'

class SuperComputerPlayer < ComputerPlayer
  def move(game, mark)
    node = TicTacToeNode.new(game.board, mark)
    possible_moves = node.children

    next_move = nil
    possible_moves.each do |move|
      if move.winning_node?(mark)
        next_move = move
        break
      end
    end

    unless next_move
      possible_moves.each do |move|
        if !move.losing_node?(mark)
          next_move = move
          break
        end
      end
    end

    raise "Error, no move found." unless next_move
    next_move.prev_move_pos
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end
