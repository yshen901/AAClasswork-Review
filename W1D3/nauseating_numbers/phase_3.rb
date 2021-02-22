def matrix_addition_reloaded (*matrices)
  return nil if matrices.empty?
  height = matrices[0].length
  width = matrices[0][0].length

  if matrices.any? { |matrix| matrix.length != height || matrix[0].length != width}
    return nil
  end

  sum = Array.new(height) { Array.new(width, 0) }
  matrices.each do |matrix|
    matrix.each_with_index do |row, i|
      row.each_with_index do |ele, j|
        sum[i][j] += ele
      end
    end
  end

  sum
end

# matrix_a = [[2,5], [4,7]]
# matrix_b = [[9,1], [3,0]]
# matrix_c = [[-1,0], [0,-1]]
# matrix_d = [[2, -5], [7, 10], [0, 1]]
# matrix_e = [[0 , 0], [12, 4], [6,  3]]

# p matrix_addition_reloaded(matrix_a, matrix_b)              # [[11, 6], [7, 7]]
# p matrix_addition_reloaded(matrix_a, matrix_b, matrix_c)    # [[10, 6], [7, 6]]
# p matrix_addition_reloaded(matrix_e)                        # [[0, 0], [12, 4], [6, 3]]
# p matrix_addition_reloaded(matrix_d, matrix_e)              # [[2, -5], [19, 14], [6, 4]]
# p matrix_addition_reloaded(matrix_a, matrix_b, matrix_e)    # nil
# p matrix_addition_reloaded(matrix_d, matrix_e, matrix_c)    # nil


def squarocol? (arr)
  width = arr.length

  arr.each_with_index do |ele, i|
    valid_row = ele.all? { |val| val == ele[0] }
    return true if valid_row
  end

  arr.each_with_index do |ele, i|
    col = i
    row = 0
    valid_col = true
    while row < width
      valid_col = false if arr[row][col] != ele[i]
      row += 1
    end
    return true if valid_col
  end

  false
end

# p squarocol?([
#   [:a, :x , :d],
#   [:b, :x , :e],
#   [:c, :x , :f],
# ]) # true

# p squarocol?([
#   [:x, :y, :x],
#   [:x, :z, :x],
#   [:o, :o, :o],
# ]) # true

# p squarocol?([
#   [:o, :x , :o],
#   [:x, :o , :x],
#   [:o, :x , :o],
# ]) # false

# p squarocol?([
#   [1, 2, 2, 7],
#   [1, 6, 6, 7],
#   [0, 5, 2, 7],
#   [4, 2, 9, 7],
# ]) # true

# p squarocol?([
#   [1, 2, 2, 7],
#   [1, 6, 6, 0],
#   [0, 5, 2, 7],
#   [4, 2, 9, 7],
# ]) # false


def squaragonal? (arr)
  dis = 0
  length = arr.length

  diag_1 = arr[0][0]
  valid_1 = true

  diag_2 = arr[0][-1]
  valid_2 = true

  while dis < length
    valid_1 = false if arr[dis][dis] != diag_1
    valid_2 = false if arr[dis][-1 - dis] != diag_2
    dis += 1
  end

  valid_1 || valid_2
end

# p squaragonal?([
#   [:x, :y, :o],
#   [:x, :x, :x],
#   [:o, :o, :x],
# ]) # true

# p squaragonal?([
#   [:x, :y, :o],
#   [:x, :o, :x],
#   [:o, :o, :x],
# ]) # true

# p squaragonal?([
#   [1, 2, 2, 7],
#   [1, 1, 6, 7],
#   [0, 5, 1, 7],
#   [4, 2, 9, 1],
# ]) # true

# p squaragonal?([
#   [1, 2, 2, 5],
#   [1, 6, 5, 0],
#   [0, 2, 2, 7],
#   [5, 2, 9, 7],
# ]) # false


def pascals_triangle (n)
  return [] if n <= 0
  return [[1]] if n == 1
  
  triangle = [[1]]
  row = 1
  (n-1).times do
    last_row = triangle[-1]
    length = last_row.length

    row += 1
    new_row = []
    row.times do |i|
      if i == 0
        new_row << 1
      elsif i == length
        new_row << 1
      else
        # debugger
        new_row << last_row[i] + last_row[i-1]
      end
    end
    triangle << new_row
  end

  triangle
end

# p pascals_triangle(5)
# # [
# #     [1],
# #     [1, 1],
# #     [1, 2, 1],
# #     [1, 3, 3, 1],
# #     [1, 4, 6, 4, 1]
# # ]

# p pascals_triangle(7)
# # [
# #     [1],
# #     [1, 1],
# #     [1, 2, 1],
# #     [1, 3, 3, 1],
# #     [1, 4, 6, 4, 1],
# #     [1, 5, 10, 10, 5, 1],
# #     [1, 6, 15, 20, 15, 6, 1]
# # ]