require "byebug"

# O(n^2) time, O(1) space
def bad_two_sum?(arr, target)
  i = 0
  while i < arr.length - 1
    j = i + 1
    while j < arr.length
      return true if arr[i] + arr[j] == target
      j += 1
    end
    i += 1
  end
  false
end



# O(nlogn) time, O(n) space
def okay_two_sum?(arr, target)
  sorted_arr = arr.sort

  sorted_arr.each do |val|
    next if target - val == val
    return true if target - val != val && bsearch(sorted_arr, target - val)
  end
  false
end

def bsearch(arr, target)
  return false if arr.length == 0
  
  middle = arr.length / 2
  if arr[middle] == target
    return true
  elsif arr[middle] > target
    return bsearch(arr[0 ... middle], target)
  else
    return bsearch(arr[middle + 1 .. -1], target)
  end
end



# O(n) time, O(n) space
def two_sum?(arr, target)
  values = Hash.new(false)
  arr.each { |val| values[val] = true }

  values.each do |k, v|
    next if target - k == k
    return true if values[target - k]
  end
  false
end