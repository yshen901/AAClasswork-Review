# Write a method, union, that accepts any number of arrays as arguments.
# The method should return an array containing all elements of the given arrays.

# 1. Adding two arrays of same dimension can just use +, not need to splat
def union(*arrs) 
  arrs.inject { |acc, arr| acc + arr }
end

p union(["a", "b"], [1, 2, 3]) # => ["a", "b", 1, 2, 3]
p union(["x", "y"], [true, false], [20, 21, 23]) # => ["x", "y", true, false, 20, 21, 23]
