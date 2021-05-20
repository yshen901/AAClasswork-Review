# Write a method, least_common_multiple, that takes in two numbers and returns the smallest number that is a mutiple
# of both of the given numbers
def least_common_multiple(num_1, num_2)
    smaller = num_1 < num_2 ? num_1 : num_2
    larger = num_1 > num_2 ? num_1 : num_2

    (larger..larger*smaller).each { |multiple| return multiple if multiple % larger == 0 && multiple % smaller == 0 }
end


# Write a method, most_frequent_bigram, that takes in a string and returns the two adjacent letters that appear the
# most in the string.
def most_frequent_bigram(str)
    bigrams = []
    (0...str.length-1).each { |i| bigrams << str[i..i+1] }
    return nil if bigrams.empty?

    best = bigrams[0]
    times = 1

    bigrams.each do |bigram|
        count = j = 0
        while temp = str[j..-1].index(bigram)
            count += 1
            j += temp + 1
        end
        if count > times
            times = count
            best = bigram
        end
    end

    best
end

class Hash
    # Write a method, Hash#inverse, that returns a new hash where the key-value pairs are swapped
    def inverse
        hash = {}
        self.each { |k, v| hash[v] = k }
        hash
    end
end


class Array
    # Write a method, Array#pair_sum_count, that takes in a target number returns the number of pairs of elements that sum to the given target
    def pair_sum_count(num)
        count = 0
        self.each_with_index do |ele, i|
            j = i + 1
            while j < self.length
                count += 1 if self[i] + self[j] == num
                j += 1
            end
        end
        count
    end

    # Write a method, Array#bubble_sort, that takes in an optional proc argument.
    # When given a proc, the method should sort the array according to the proc.
    # When no proc is given, the method should sort the array in increasing order.
    #
    # Sorting algorithms like bubble_sort, commonly accept a block. That block accepts
    # two parameters, which represents the two elements in the array being compared.
    # If the block returns 1, it means that the second element passed to the block
    # should go before the first (i.e. switch the elements). If the block returns -1,
    # it means the first element passed to the block should go before the second
    # (i.e. do not switch them). If the block returns 0 it implies that
    # it does not matter which element goes first (i.e. do nothing).
    #
    # This should remind you of the spaceship operator! Convenient :)
    def bubble_sort(&prc)
        return self if self.length <= 1

        prc ||= Proc.new do |v1, v2|
            if v1 < v2
                -1
            elsif v1 == v2
                0
            else
                1
            end
        end

        swapped = true
        while swapped
            swapped = false
            i = 0
            while i < self.length - 1
                if prc.call(self[i], self[i+1]) == 1
                    swapped = true
                    self[i], self[i+1] = self[i+1], self[i]
                end
                i += 1
            end
        end

        return self
    end
end
