def range_rec(first,last)
  return [] if last <= first
  return [first] if last - first == 1

  [first].concat(range(first+1, last))
end

def range_iter(first, last)
  return [] if first >= last
  arr = Array.new(last-first)
  (first...last).each_with_index { |val, i| arr[i] = val }
  arr
end



def exponentiation_iter(x)
end

def exponentiation_rec(x)
end



def deep_dup_iter(arr)
end

def deep_dup_rec(arr)
end



def fibonacci_iter(n)
end

def fibonacci_rec(n)
end



def bsearch_iter(array, target)
end

def bsearch_rec(array, target)
end



def merge_sort_iter(arr)
end

def merge_sort_rec(arr)
end



def subsets_iter(arr)
end

def subsets_rec(arr)
end



def permutations_iter(arr)
end

def permutations_rec(arr)
end



def greedy_make_change_iter(amt, coins)
end

def greedy_make_change_rec(amt, coins)
end



def make_better_change_iter(amt,coins)
end

def make_better_change_rec(amt,coins)
end