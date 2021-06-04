def range_rec(first,last)
  return [] if last <= first
  return [first] if last - first == 1

  [first].concat(range_rec(first+1, last))
end



def sum_iter(arr)
  sum = 0
  arr.each { |val| sum += val }
  sum
end

def sum_rec(arr)
  return 0 if arr.empty?
  return arr[0] if arr.length == 1

  arr.pop + sum_rec(arr)
end



def exponentiation_1(x, n)
  return 0 if x == 0
  return 1 if n == 0

  if n > 0
    return x * exponentiation_1(x, n-1) if n > 0
  else
    return 1.0 * exponentiation_1(x, n+1) / x if n < 0
  end
end

def exponentiation_2(x, n)
  return 0 if x == 0
  return 1 if n == 0
  return x if n == 1
  return 1.0/x if n == -1

  new_n, factor = 1
  if n % 2 == 0
    new_n, factor = n/2, 1
  elsif n > 0
    new_n, factor = (n-1)/2, x
  else
    new_n, factor = (n+1)/2, 1.0/x
  end

  call_value = exponentiation_2(x, new_n)
  call_value * call_value * factor
end



def deep_dup_rec(arr)
  return [] if arr.empty?
  return [arr[0]] if arr.length == 1 && !arr[0].is_a?(Array)

  final = []
  arr.each do |ele|
    ele.is_a?(Array) ? final << deep_dup_rec(ele) : final << ele
  end
  
  final
end



def fibonacci_iter(n)
  sequence = [0,1]
  (n-2).times { sequence << sequence[-1] + sequence[-2] }
  
  sequence
end

def fibonacci_rec(n)
  return [] if n == 0
  return [0] if n == 1
  return [0,1] if n == 2

  fib_rest = fibonacci_rec(n-1)
  fib_rest << fib_rest[-1] + fib_rest[-2]
  fib_rest
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