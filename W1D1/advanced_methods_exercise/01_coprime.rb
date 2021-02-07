# Write a method, coprime?(num_1, num_2), that accepts two numbers as args.
# The method should return true if the only common divisor between the two numbers is 1.
# The method should return false otherwise. For example coprime?(25, 12) is true because
# 1 is the only number that divides both 25 and 12.

def coprime? (num_1, num_2)
  if num_1 < num_2
    small = num_1
    large = num_2
  else
    small = num_2
    large = num_1
  end

  (2..small).each do |factor|
    return false if small % factor == 0 && large % factor == 0
  end
  true
end

p coprime?(25, 12)    # => true
p coprime?(7, 11)     # => true
p coprime?(30, 9)     # => false
p coprime?(6, 24)     # => false
