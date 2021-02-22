require "byebug"

# Changed the original prompt a bit, finds if the number of factors after 
# prime factorization is the largest!
def anti_prime?(num)
  return false if is_prime?(num)

  divisors = num_divisors(num)

  (2...num).none? { |smaller| num_divisors(smaller) > divisors}
end

def num_divisors(num)
  return 2 if is_prime?(num)
  smaller_primes = (2...num).select { |factor| is_prime?(factor) } 

  counter = 0
  smaller_primes.each do |prime|
    while num % prime == 0
      num /= prime
      counter += 1
    end
  end

  counter
end

# None returns true by default if range is 0 numbers
def is_prime?(num)
  return true if num == 2

  (2...num).none? { |fac| num % fac == 0 }
end



def matrix_addition (matrix_1, matrix_2)
  return matrix_1 if matrix_1.length == 0

  height = matrix_1.length
  length = matrix_1[0].length

  new_matrix = Array.new(height) { Array.new(length) }

  (0...height).each do |i|
    (0...length).each do |j|
      new_matrix[i][j] = matrix_1[i][j] + matrix_2[i][j]
    end
  end

  new_matrix
end
# matrix_a = [[2,5], [4,7]]
# matrix_b = [[9,1], [3,0]]
# matrix_c = [[-1,0], [0,-1]]
# matrix_d = [[2, -5], [7, 10], [0, 1]]
# matrix_e = [[0 , 0], [12, 4], [6,  3]]
# p matrix_addition(matrix_a, matrix_b) # [[11, 6], [7, 7]]
# p matrix_addition(matrix_a, matrix_c) # [[1, 5], [4, 6]]
# p matrix_addition(matrix_b, matrix_c) # [[8, 1], [3, -1]]
# p matrix_addition(matrix_d, matrix_e) # [[2, -5], [19, 14], [6, 4]]


def mutual_factors (*nums)
  largest = nums[0]
  nums.each { |num| largest = num if num > largest }

  (1..largest).select do |divisor|
    nums.all? { |num| num % divisor == 0 }
  end
end
# p mutual_factors(50, 30)            # [1, 2, 5, 10]
# p mutual_factors(50, 30, 45, 105)   # [1, 5]
# p mutual_factors(8, 4)              # [1, 2, 4]
# p mutual_factors(8, 4, 10)          # [1, 2]
# p mutual_factors(12, 24)            # [1, 2, 3, 4, 6, 12]
# p mutual_factors(12, 24, 64)        # [1, 2, 4]
# p mutual_factors(22, 44)            # [1, 2, 11, 22]
# p mutual_factors(22, 44, 11)        # [1, 11]
# p mutual_factors(7)                 # [1, 7]
# p mutual_factors(7, 9)              # [1]


def tribonacci_number(n)
  start = [1, 1, 2]
  return start[n - 1] if n <= 3

  (n - 3).times { start << start[-1] + start[-2] + start[-3] }
  start[-1]
end
# p tribonacci_number(1)  # 1
# p tribonacci_number(2)  # 1
# p tribonacci_number(3)  # 2
# p tribonacci_number(4)  # 4
# p tribonacci_number(5)  # 7
# p tribonacci_number(6)  # 13
# p tribonacci_number(7)  # 24
# p tribonacci_number(11) # 274

