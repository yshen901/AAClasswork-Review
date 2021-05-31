class Array
  def my_each(&blk)
    i = 0
    while i < self.length
      yield self[i]
      i += 1
    end
    self
  end

  def my_select(&blk)
    selected = []
    self.my_each do |ele|
      selected << ele if yield(ele)
    end
    selected
  end

  def my_reject(&blk)
    excluded = []
    self.my_each { |ele| excluded << ele unless yield(ele) }
    excluded
  end
  
  def my_any?(&blk)
    self.my_each { |ele| return true if yield ele}
    false
  end

  def my_all?(&blk)
    self.my_each { |ele| return false unless yield ele}
    true
  end
end

return_value = [1, 2, 3].my_each do |num|
  puts num
end.my_each do |num|
  puts num
end
p return_value  # => [1, 2, 3]

puts "----------------------------"

a = [1, 2, 3]
p a.my_select { |num| num > 1 } # => [2, 3]
p a.my_select { |num| num == 4 } # => []

puts "----------------------------"
a = [1, 2, 3]
p a.my_reject { |num| num > 1 } # => [1]
p a.my_reject { |num| num == 4 } # => [1, 2, 3]

puts "----------------------------"
a = [1, 2, 3]
p a.my_any? { |num| num > 1 } # => true
p a.my_any? { |num| num == 4 } # => false
p a.my_all? { |num| num > 1 } # => false
p a.my_all? { |num| num < 4 } # => true