require_relative 'list.rb'

class TodoBoard
  def initialize(label)
    @list = List.new(label)
  end

  def get_command
    print "\nEnter a command: "
    cmd, *args = gets.chomp.split(' ')

    case cmd
    when 'mktodo'
      @list.add_item(*args)
    when 'up'
      @list.up(args[0].to_i, args[1].to_i)
    when 'down'
      @list.down(args[0].to_i, args[1].to_i)
    when 'swap'
      @list.swap(args[0].to_i, args[1].to_i)
    when 'sort'
      @list.sort_by_date!
    when 'priority'
      @list.print_priority
    when 'print'
      args.length == 0 ? @list.print : @list.print_full_item(args[0].to_i)
    when 'quit'
      return false
    when 'toggle'
      @list.toggle_item(args[0].to_i)
    when 'rm'
      @list.remove_item(args[0].to_i)
    when 'purge'
      @list.purge
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