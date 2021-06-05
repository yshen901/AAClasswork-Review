require 'byebug'

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



def bsearch_rec(arr, target)
  return nil if arr.empty?
  return nil if arr.length == 1 && arr[0] != target
  return 0 if arr[0] == target

  mid = arr.length / 2
  if arr[mid] == target
    return mid
  elsif arr[mid] > target
    return bsearch_iter(arr[0...mid], target)
  else
    call = bsearch_iter(arr[mid..-1], target) 
    if call
      return mid + call
    else
      return nil
    end
  end

  nil
end



def merge_sort_rec(arr)
  return [] if arr.length == 0
  return arr if arr.length == 1

  mid = arr.length / 2
  left = merge_sort_rec(arr[0...mid])
  right = merge_sort_rec(arr[mid..-1])

  merge(left, right)
end

def merge(arr_1, arr_2)
  return [] if arr_1.empty? && arr_2.empty?
  return arr_1 if arr_2.empty?
  return arr_2 if arr_1.empty?

  merged_arr = Array.new(arr_1.length + arr_2.length)

  idx_1 = 0
  idx_2 = 0
  while idx_1 < arr_1.length || idx_2 < arr_2.length
    spot = idx_1 + idx_2
    val_1, val_2 = arr_1[idx_1], arr_2[idx_2]

    if !val_1
      merged_arr[spot] = val_2
      idx_2 += 1
    elsif !val_2
      merged_arr[spot] = val_1
      idx_1 += 1   
    elsif val_1 > val_2  #if val_1 is out of bounds or is larger
      merged_arr[spot] = val_2
      idx_2 += 1
    else
      merged_arr[spot] = val_1
      idx_1 += 1
    end
  end

  merged_arr
end


def subsets_rec(arr)
  return [] if arr.empty?
  
  # debugger 

  last_val = arr[-1]
  lesser_sets = subsets_rec(arr[0...-1])

  greater_sets = [[last_val]]
  lesser_sets.each do |set|
    new_set = set.clone
    new_set << last_val
    greater_sets << new_set
  end

  lesser_sets.concat(greater_sets)
end



def permutations_rec(arr)
  return [] if arr.empty?
  return arr if arr.length == 1

  permutations = []
  arr.each_with_index do |ele, i|
    remaining_nums = arr[0...i] + arr[i+1..-1]
    partial_permutations = permutations_rec(remaining_nums)
    partial_permutations.each do |partial|
      permutations << [ele, *partial]
    end
  end

  permutations
end



def greedy_make_change(amt, coins)
  return [] if amt == 0

  # debugger

  largest = -1
  coins.each { |coin| largest = coin if coin > largest && amt >= coin }

  [largest].concat(greedy_make_change(amt - largest, coins))
end

def make_better_change(amt, coins)
  return [] if amt == 0

  better_change = nil
  coins.each do |coin|  
    next if amt < coin
    refactored_coins = coins.select { |option| option <= coin }
    change = [coin].concat(make_better_change(amt - coin, refactored_coins))
    better_change = change if !better_change || change.length < better_change.length
  end

  better_change
end