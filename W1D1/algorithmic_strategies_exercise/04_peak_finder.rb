# Write a method, peak_finder(arr), that accepts an array of numbers as an arg.
# The method should return an array containing all of "peaks" of the array.
# An element is considered a "peak" if it is greater than both it's left and right neighbor.
# The first or last element of the array is considered a "peak" if it is greater than it's one neighbor.

# 1.  Make sure the index is correct...remember the index in the loop is based on
#     the truncated value array, not the one before. Sacrifice big-O over clear code tbh.
def peak_finder (arr)
  return nil if arr.length == 0
  return arr[0] if arr.length == 1

  peaks = arr[1...-1].select.with_index do |ele, i|  
    ele > arr[i] && ele > arr[i+2]
  end
  peaks.unshift(arr[0]) if arr[0] > arr[1] 
  peaks.push(arr[-1]) if arr[-1] > arr[-2] 

  peaks
end

p peak_finder([1, 3, 5, 4])         # => [5]
p peak_finder([4, 2, 3, 6, 10])     # => [4, 10]
p peak_finder([4, 2, 11, 6, 10])    # => [4, 11, 10]
p peak_finder([1, 3])               # => [3]
p peak_finder([3, 1])               # => [3]
