require_relative 'list.rb'

class TodoBoard
  def initialize()
    # @list = List.new(label)
    @board = {}
  end

  def get_command
    print "\nEnter a command: "
    cmd, *args = gets.chomp.split(' ')

    case cmd
    when 'mklist'
      @board[args[0]] = List.new(args[0])
    when 'ls'
      @board.each { |k, v| puts k }
    when 'showall'
      @board.each { |k, v| v.print }
    when 'mktodo'
      # @list.add_item(*args)
      list, item, deadline, desc = args
      @board[list].add_item(item, deadline, desc ||= "")
    when 'up'
      # @list.up(args[0].to_i, args[1].to_i)
      list, idx, amt = args
      @board[list].up(idx.to_i, amt.to_i)
    when 'down'
      # @list.down(args[0].to_i, args[1].to_i)
      list, idx, amt = args
      @board[list].down(idx.to_i, amt.to_i)
    when 'swap'
      # @list.swap(args[0].to_i, args[1].to_i)
      list, first, second = args
      @board[list].swap(first.to_i, second.to_i)
    when 'sort'
      # @list.sort_by_date!
      @board[args[0]].sort_by_date!
    when 'priority'
      # @list.print_priority
      @board[args[0]].print_priority
    when 'print'
      # args.length == 0 ? @list.print : @list.print_full_item(args[0].to_i)
      args.length == 1 ? @board[args[0]].print : @board[args[0]].print_full_item(args[1].to_i)
    when 'quit'
      return false
    when 'toggle'
      # @list.toggle_item(args[0].to_i)
      list, idx = args
      @board[list].toggle_item(idx.to_i)
    when 'rm'
      # @list.remove_item(args[0].to_i)
      list, idx = args
      @board[list].remove_item(idx.to_i)
    when 'purge'
      @board[args[0]].purge
    else
      print "Unknown command.\n"
    end

    true
  end

  def run
    while self.get_command
    end
  end 
end