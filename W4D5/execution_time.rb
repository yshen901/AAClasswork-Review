def my_min(list) # O(n^2)
  i = 0
  while true
    item = list[i]
    return item if list.all? { |other_item| item <= other_item }
    i += 1
  end
end


def my_min(list) # O(n)
  min = list[0]
  list.each do |item|
    min = item if item < min
  end
  min
end


def largest_contiguous_subsum(list) # O(n^3) time, O(n^3) space
  subarrays = []
  
  i = 0
  until i == list.length
    j = i
    until j == list.length
      subarrays << list[i..j]
      j += 1
    end
    i += 1
  end

  subarrays.sort_by(&:sum)[-1].sum
end
p largest_contiguous_subsum([5,3,-7])


def largest_contiguous_subsum_better(list) # O(n) time, O(1) space
  largest = list[0]
  current = list[0]
  
  i = 1
  until i == list.length
    current < 0 ? current = list[i] : current += list[i]
    largest = current if largest < current
    i += 1
  end

  largest
end
p largest_contiguous_subsum_better([5,3,-7])
