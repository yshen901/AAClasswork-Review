require_relative "item.rb"

class List
  attr_accessor :label

  def initialize(label)
    @label = label
    @items = []
  end

  def add_item(title, deadline, description = "")
    @items << Item.new(title, deadline, description)
    true
  end

  def size
    @items.length
  end

  def valid_index?(index)
    index.between?(0,self.size - 1)
  end

  def swap(index_1, index_2)
    return false unless self.valid_index?(index_1) && self.valid_index?(index_2)
    @items[index_1], @items[index_2] = @items[index_2], @items[index_1]
    true
  end

  def [](index)
    return nil unless valid_index?(index)
    @items[index]
  end

  def priority
    @items.first
  end

  def print
    puts "-----------------------------------------------"
    puts @label.ljust(40)
    puts "-----------------------------------------------"
    puts "Index | Item               | Deadline   | Done "
    puts "-----------------------------------------------"
    @items.each_with_index do |item, i|
      puts i.to_s.ljust(5) + " | " + item.title.ljust(18) + " | " + item.deadline.ljust(10) + " | " + (item.done ? "[X]  " : "[ ]  ")
    end
    nil
  end

  def print_full_item(idx)
    puts "----------------------------------------"
    puts @items[idx].title.ljust(20) + " | " + @items[idx].deadline.ljust(10) + " | " + (@items[idx].done ? "[X] " : "[ ] ")
    puts @items[idx].description.ljust(40)
  end

  def print_priority
    self.print_full_item(0)
  end

  def up(idx, amt=1)
    return false unless valid_index?(idx)
    amt.times do
      if idx > 0
        @items[idx], @items[idx - 1] = @items[idx - 1], @items[idx]
        idx -= 1
      end
    end
    true
  end

  def down(idx, amt=1)
    return false unless valid_index?(idx)
    amt.times do
      if idx < @items.length - 1
        @items[idx], @items[idx + 1] = @items[idx + 1], @items[idx]
        idx += 1
      end
    end
    true
  end

  def sort_by_date!
    @items.sort_by! do |item|
      item.deadline.split("-").join("").to_i
    end
  end

  def toggle_item(idx)
    return false unless valid_index?(idx)
    @items[idx].toggle
    true
  end

  def remove_item(idx)
    return false unless valid_index?(idx)
    @items = @items[0...idx] + @items[idx+1..-1]
  end

  def purge
    i = 0
    while i < @items.length
      @items[i].done ? self.remove_item(i) : i += 1
    end
  end
end