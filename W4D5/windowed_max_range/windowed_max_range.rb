require_relative "./data_structures"
require "byebug"
require "benchmark"

# O(size^2) time, O(1) space
def naive_windowed_max_range(arr, size)
  current_max_range = nil

  i = 0
  while i < arr.length - size + 1
    min = arr[i]
    max = arr[i]

    j = i+1
    while j < i + size
      min = arr[j] if min > arr[j]
      max = arr[j] if max < arr[j] 
      j += 1
    end

    current_max_range ||= max - min
    current_max_range = max - min if current_max_range < max - min

    i += 1
  end

  current_max_range
end
p naive_windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p naive_windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p naive_windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p naive_windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8

p Benchmark.measure { windowed_max_range([*(1..100000)], 1000) == 6 } # 2, 5, 4, 8


def windowed_max_range(arr, size)
  return nil if arr.length < size

  window = MinMaxStackQueue.new
  current_max_range = arr[size - 1] - arr[0]
  
  i = 0
  while i < arr.size
    window.enqueue(arr[i])
    window.dequeue if window.size > size

    if window.size == size
      window_range = window.max - window.min
      current_max_range = window_range if window_range > current_max_range
    end

    i += 1
  end
  
  current_max_range
end
p windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8

p Benchmark.measure { windowed_max_range([*(1..100000)], 1000) == 6 } # 2, 5, 4, 8 ... there is a time difference when window size is large