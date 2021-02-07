# Write a method, max_inject(arr), that accepts any amount of numbers arguments and returns
# the largest number. Solve this using the built-in inject.

# 1. don't do num = acc ... it automatically sets acc to what each iteration returns
# 2. remember to always return something, num if acc < num will return nil sometimes
# 3. one line if statements doesn't need "if"
def max_inject(*nums) 
  nums.inject { |acc, num| acc < num ? num : acc }
end

p max_inject(1, -4, 0, 7, 5)  # => 7
p max_inject(30, 28, 18)      # => 30
