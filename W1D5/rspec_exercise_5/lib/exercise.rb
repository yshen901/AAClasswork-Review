def zip (*arrs)
    combined_arrs = []

    i = 0
    while (i < arrs[0].length) 
        row = []
        arrs.each { |arr| row << arr[i] }
        combined_arrs << row
        i += 1
    end

    combined_arrs
end

def prizz_proc (arr, prc_1, prc_2)
    arr.select do |ele|
        prc_1.call(ele) != prc_2.call(ele)
    end
end

def zany_zip (*arrs)
    longest = 0
    arrs.each { |arr| longest = arr.length if arr.length > longest }

    zipped = []
    i = 0
    until i == longest
        row = []
        arrs.each do |arr|
            arr[i] ? row << arr[i] : row << nil
        end
        zipped << row
        i += 1
    end
    zipped
end

def maximum (arr, &blk)
    return nil if arr.empty?

    largest_val = blk.call(arr[0])
    largest_ele = arr[0]

    arr.each do |ele|
        if blk.call(ele) >= largest_val
            largest_ele = ele
            largest_val = blk.call(ele)
        end
    end

    return largest_ele
end

def my_group_by (arr, &blk)
    hash = {}
    
    arr.each do |ele|
        key = blk.call(ele)
        if hash.has_key?(key)
            hash[key] << ele
        else
            hash[key] = [ele]
        end
    end
    hash
end

def max_tie_breaker(arr, prc, &blk)
    return nil if arr.empty?

    largest_blk = blk.call(arr[0])
    largest_ele = arr[0]

    arr.each do |ele|
        blk_call = blk.call(ele)

        if blk_call > largest_blk
            largest_blk = blk_call
            largest_ele = ele
        elsif blk_call == largest_blk
            largest_ele = ele if prc.call(ele) > prc.call(largest_ele)
        end
    end
    largest_ele
end

def silly_syllables (sentence)
    vowels = "aeiouAEIOU"

    silly_sentence = []
    words = sentence.split(" ")

    words.each do |word|
        first = 0
        first += 1 until first == word.length || vowels.include?(word[first])
    
        last = word.length - 1
        last -= 1 until last == -1 || vowels.include?(word[last])
    
        if first == word.length || first == last
            silly_sentence << word
        else
            silly_sentence << word[first..last]
        end
    end
    
    silly_sentence.join(" ")
end