# Run `bundle exec rspec` and satisy the specs.
# You should implement your methods in this file.
# Feel free to use the debugger when you get stuck.

# 1. USE PARENTHESES FOR RANGE ITERATIONS
def largest_prime_factor (num)
  return num if is_prime?(num)

  counter = num - 1
  while counter > 2
    return counter if num % counter == 0 && is_prime?(counter)
    counter -= 1
  end

  -1
end

def is_prime? (num)
  return false if num < 2

  (2...num).none? do |factor|
    return false if num % factor == 0
  end
end



def unique_chars? (str)
  dup_char = Hash.new(false)

  str.each_char do |char|
    return false if dup_char[char]
    dup_char[char] = true
  end

  true
end

def dupe_indices (arr)
  first_char = Hash.new(-1)
  indices = {}

  arr.each_with_index do |val, i|
    if first_char[val] == -1
      first_char[val] = i
    else
      indices.has_key?(val) ? indices[val] << i : indices[val] = [first_char[val], i]      
    end
  end

  indices
end

def ana_array (arr_1, arr_2)
  counter = Hash.new(0)

  arr_1.each { |ele| counter[ele] += 1 }
  arr_2.each { |ele| counter[ele] -= 1 }

  counter.each_value { |val| return false if val != 0 }
  true
end