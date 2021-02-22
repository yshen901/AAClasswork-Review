def strange_sums (nums)
  counter = 0

  i = 0
  len = nums.length
  while i < len
    (i...len).each { |j| counter += 1 if nums[i] + nums[j] == 0 }
    i += 1
  end

  counter
end
# p strange_sums([2, -3, 3, 4, -2])     # 2
# p strange_sums([42, 3, -1, -42])      # 1
# p strange_sums([-5, 5])               # 1
# p strange_sums([19, 6, -3, -20])      # 0
# p strange_sums([9])                   # 0


def pair_product (nums, product)
  i = 0
  len = nums.length
  while i < len
    (i + 1...len).each { |j| return true if nums[i] * nums[j] == product }
    i += 1
  end

  false
end
# p pair_product([4, 2, 5, 8], 16)    # true
# p pair_product([8, 1, 9, 3], 8)     # true
# p pair_product([3, 4], 12)          # true
# p pair_product([3, 4, 6, 2, 5], 12) # true
# p pair_product([4, 2, 5, 7], 16)    # false
# p pair_product([8, 4, 9, 3], 8)     # false
# p pair_product([3], 12)             # false

def rampant_repeats(str, hash)
  repeated = ""

  str.each_char do |char|
    if !hash.has_key?(char)
      repeated << char
    else
      hash[char].times { repeated << char }
    end
  end

  repeated
end
# p rampant_repeats('taco', {'a'=>3, 'c'=>2})             # 'taaacco'
# p rampant_repeats('feverish', {'e'=>2, 'f'=>4, 's'=>3}) # 'ffffeeveerisssh'
# p rampant_repeats('misispi', {'s'=>2, 'p'=>2})          # 'mississppi'
# p rampant_repeats('faarm', {'e'=>3, 'a'=>2})            # 'faaaarm'

# Doubles are tricky!
def perfect_square? (num)
  (1..num).any? { |factor| num / Math.sqrt(num) == Math.sqrt(num) }
end
# p perfect_square?(1)     # true
# p perfect_square?(4)     # true
# p perfect_square?(64)    # true
# p perfect_square?(100)   # true
# p perfect_square?(169)   # true
# p perfect_square?(2)     # false
# p perfect_square?(40)    # false
# p perfect_square?(32)    # false
# p perfect_square?(50)    # false