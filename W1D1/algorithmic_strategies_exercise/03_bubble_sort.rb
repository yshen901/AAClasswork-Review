# Reimplement the bubble sort outlined in the preceding lecture.
# The bubble_sort method should accept an array of numbers and arrange the elements in increasing order.
# The method should return the array.
# Do not use the built-in Array#sort

def bubble_sort(arr) 
  sorted = false
  len = arr.length
  while !sorted 
    sorted = true
    idx = 0
    while idx < len - 1
      if arr[idx] > arr[idx + 1]
        sorted = false
        arr[idx], arr[idx + 1] = arr[idx + 1], arr[idx]
      end
      idx = idx + 1
    end
  end
  return arr
end

p bubble_sort([2, 8, 5, 2, 6])      # => [2, 2, 5, 6, 8]
p bubble_sort([10, 8, 7, 1, 2, 3])  # => [1, 2, 3, 7, 8, 10]