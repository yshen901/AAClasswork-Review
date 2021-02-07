# Write a method, multi_dimensional_sum(array), that accepts a multidimensional array as an arg 
# and returns the sum of all numbers in the array.

# 1. Splat only decomposes one array...how does it work?
def multi_dimensional_sum(arr)
  return arr if !arr.is_a?(Array)

  arr.inject do |acc, ele| 
    multi_dimensional_sum(acc) + multi_dimensional_sum(ele)
  end
end

arr_1 = [
    [4, 3, 1],
    [8, 1],
    [2]
]
p multi_dimensional_sum(arr_1)    # => 19

arr_2 = [
    [ [3, 6], [7] ],
    [ [5, 2], 1 ]
]
p multi_dimensional_sum(arr_2)    # => 24