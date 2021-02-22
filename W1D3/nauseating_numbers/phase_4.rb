require "byebug"

def mersenne_prime (num)
  i = 0
  count = 0

  until i == num
    count += 1
    i += 1 if pow_of_2(count + 1) && prime?(count)
  end

  count
end

def pow_of_2 (num)
  return false if num % 2 != 0
  return true if num == 2
  return pow_of_2 (num / 2)
end

def prime? (num)
  return false if num <= 1

  (2...num).each { |fac| return false if num % fac == 0 }
  true
end

# p mersenne_prime(1) # 3
# p mersenne_prime(2) # 7
# p mersenne_prime(3) # 31
# p mersenne_prime(4) # 127
# p mersenne_prime(6) # 131071


def triangular_word?(word)
  hash = {}
  ("a".."z").each_with_index do |letter, i|
    hash[letter] = i + 1
  end

  val = 0
  word.each_char { |char| val += hash[char] }

  i = 1
  while true
    triangular = ( i * (i + 1)) / 2
    return false if triangular > val
    return true if triangular == val
    i += 1
  end

  false
end

# p triangular_word?('abc')       # true
# p triangular_word?('ba')        # true
# p triangular_word?('lovely')    # true
# p triangular_word?('question')  # true
# p triangular_word?('aa')        # false
# p triangular_word?('cd')        # false
# p triangular_word?('cat')       # false
# p triangular_word?('sink')      # false


def consecutive_collapse (arr)
  i = 0
  temp = arr.clone

  while i < temp.length - 1
    if (temp[i] - temp[i + 1]).abs == 1
      2.times { temp.slice!(i) }
      i = 0
    else
      i += 1
    end
  end

  temp
end

# p consecutive_collapse([3, 4, 1])                     # [1]
# p consecutive_collapse([1, 4, 3, 7])                  # [1, 7]
# p consecutive_collapse([9, 8, 2])                     # [2]
# p consecutive_collapse([9, 8, 4, 5, 6])               # [6]
# p consecutive_collapse([1, 9, 8, 6, 4, 5, 7, 9, 2])   # [1, 9, 2]
# p consecutive_collapse([3, 5, 6, 2, 1])               # [1]
# p consecutive_collapse([5, 7, 9, 9])                  # [5, 7, 9, 9]
# p consecutive_collapse([13, 11, 12, 12])              # []


# Remember to take note of values...keep it all in your head. 
def pretentious_primes (arr, n)
  n > 0 ? dir = 1 : dir = -1
  n = n.abs

  new_arr = []

  arr.map do |ele|
    count = 0
    while count != n && ele >= 2
      ele += dir
      count += 1 if prime?(ele)
    end
    count == n ? new_arr << ele : new_arr << nil
  end

  new_arr
end

p pretentious_primes([4, 15, 7], 1)           # [5, 17, 11]
p pretentious_primes([4, 15, 7], 2)           # [7, 19, 13]
p pretentious_primes([12, 11, 14, 15, 7], 1)  # [13, 13, 17, 17, 11]
p pretentious_primes([12, 11, 14, 15, 7], 3)  # [19, 19, 23, 23, 17]
p pretentious_primes([4, 15, 7], -1)          # [3, 13, 5]
p pretentious_primes([4, 15, 7], -2)          # [2, 11, 3]
p pretentious_primes([2, 11, 21], -1)         # [nil, 7, 19]
p pretentious_primes([32, 5, 11], -3)         # [23, nil, 3]
p pretentious_primes([32, 5, 11], -4)         # [19, nil, 2]
p pretentious_primes([32, 5, 11], -5)         # [17, nil, nil]