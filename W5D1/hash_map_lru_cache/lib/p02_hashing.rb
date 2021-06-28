class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    hash = 0
    self.each_with_index do |el, i|
      hash = hash ^ (el.hash + i.hash)
    end
    hash
  end
end

class String
  def hash
    chars = self.chars.map(&:ord)
    chars.hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    all_vals = keys.sort.concat(values.sort)
    all_vals.hash
  end
end
