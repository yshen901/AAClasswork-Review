class Array
  def my_flatten
    return self if self.length <= 1 && !self[0].is_a?(Array)
    
    flattened = []
    self.each do |ele|
      if ele.is_a?(Array)
        flattened.concat(ele.my_flatten)
      else
        flattened << ele
      end
    end

    flattened
  end

  def my_zip(*args)
    zipped = Array.new(self.length) { Array.new(args.length + 1) }
    
    zipped.each_with_index do |row, i|
      zipped[i][0] = self[i]
      args.each_with_index do |arg, j|
        i < arg.length ? zipped[i][j+1] = arg[i] : zipped[i][j+1] = nil
      end
    end

    zipped
  end

  def my_rotate(amt = 1)
    rotated = Array.new(self.length)
    rotated.each_with_index do |ele, i|
      rotated[i] = self[ i+amt < self.length ? i+amt : (i+amt)%self.length ]
    end
    rotated
  end

  def my_join(separator="")
    str = ""
    self.each { |ele| str << ele + separator}
    str.chomp
  end

  def my_reverse
    reversed = Array.new(self.length)
    reversed.each_with_index do |ele, i|
      reversed[i] = self[-(i+1)]
    end
    reversed
  end
end

p [1, 2, 3, [4, [5, 6]], [[[7]], 8]].my_flatten # => [1, 2, 3, 4, 5, 6, 7, 8]

puts "--------------------------------------"

a = [ 4, 5, 6 ]
b = [ 7, 8, 9 ]
p [1, 2, 3].my_zip(a, b) # => [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
p a.my_zip([1,2], [8])   # => [[4, 1, 8], [5, 2, nil], [6, nil, nil]]
p [1, 2].my_zip(a, b)    # => [[1, 4, 7], [2, 5, 8]]

c = [10, 11, 12]
d = [13, 14, 15]
p [1, 2].my_zip(a, b, c, d)    # => [[1, 4, 7, 10, 13], [2, 5, 8, 11, 14]]

puts "--------------------------------------"
a = [ "a", "b", "c", "d" ]
p a.my_rotate         #=> ["b", "c", "d", "a"]
p a.my_rotate(2)      #=> ["c", "d", "a", "b"]
p a.my_rotate(-3)     #=> ["b", "c", "d", "a"]
p a.my_rotate(15)     #=> ["d", "a", "b", "c"]

puts "--------------------------------------"
a = [ "a", "b", "c", "d" ]
p a.my_join         # => "abcd"
p a.my_join("$")    # => "a$b$c$d"

puts "--------------------------------------"
p [ "a", "b", "c" ].my_reverse   #=> ["c", "b", "a"]
p [ 1 ].my_reverse               #=> [1]