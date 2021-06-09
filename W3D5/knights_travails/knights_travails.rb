require_relative "./node.rb"

class KnightsTravails
  @@MOVES = [
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [-2, -1],
    [-2, 1],
    [2, -1],
    [2, 1]
  ]

  def initialize(start=[0,0])
    @root_node = Node.new(start)
  end

  def find_spot(spot)
    self.build_tree
    final_node = @root_node.dfs(spot)
    final_node ? build_path(final_node) : nil
  end

  def build_path(node)
    path = []
    curr_node = node
    while curr_node.parent
      path << curr_node.value
      curr_node = curr_node.parent
    end
    path << @root_node.value
    path.reverse
  end

  def update_location(new_location)
    @root_node = Node.new(new_location)
  end

  def build_tree
    seen_nodes = Hash.new(false)
    current_nodes = [@root_node]

    until current_nodes.empty?
      current_node = current_nodes.shift
      seen_nodes[current_node.value] = true

      possible_spots = generate_spots(current_node.value)
      possible_spots.select! { |spot| !seen_nodes[spot] }
      possible_spots.each do |spot|
        new_node = Node.new(spot)
        current_node.add_child(new_node)

        current_nodes << new_node
      end
    end
  end

  def generate_spots(pos)
    possible_moves = @@MOVES.map { |move| [pos[0] + move[0], pos[1] + move[1]] }
    possible_moves.select { |move| valid_spot(move) }
  end

  def valid_spot(pos)
    x,y = pos
    x.between?(0,8) && y.between?(0,8)
  end
end