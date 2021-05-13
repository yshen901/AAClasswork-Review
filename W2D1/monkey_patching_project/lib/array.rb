# Monkey-Patch Ruby's existing Array class to add your own custom methods
class Array
  def span
    return nil if self.empty?
    sorted = self.sort
    sorted[-1] - sorted[0]
  end

  def average
    return nil if self.empty?
    self.sum.to_f / self.length
  end

  def median
    return nil if self.empty?
    sorted = self.sort
    length = self.length
    if length % 2 == 0
        return (sorted[length/2 - 1] + sorted[length/2]).to_f / 2
    else
        return sorted[length/2]
    end
  end

  def counts
    counter = Hash.new(0)
    self.each { |ele| counter[ele] += 1 }
    counter
  end

  def my_count(val)
    counter = 0
    self.each { |ele| counter += 1 if val == ele}
    counter
  end

  def my_index(val)
    self.each_with_index { |ele, i| return i if ele == val }
    nil
  end

  def my_uniq
    exists = Hash.new(false)
    unique_array = []
    self.each do |ele|
        unless exists[ele]
            exists[ele] = true
            unique_array << ele
        end
    end
    unique_array
  end

  def my_transpose
    return [] if self.empty?

    rows = self.length
    cols = self[0].length
    transposed = Array.new(cols) { Array.new(rows) }

    transposed.each_with_index do |ele, row_idx|
        transposed.each_with_index do |ele, col_idx|
            transposed[row_idx][col_idx] = self[col_idx][row_idx]
        end
    end

    transposed
  end
end
