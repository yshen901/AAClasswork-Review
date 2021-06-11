require 'set'

class GraphNode
  attr_accessor :value, :neighbors

  def initialize(value)
    @value = value
    @neighbors = []
  end

  def add_neighbor(neighbor_node)
    @neighbors << neighbor_node if !@neighbors.include?(neighbor_node)
    nil
  end

  def remove_neighbor(neighbor_node)
    @neighbors.delete(neighbor_node)
    nil
  end
end

def bfs(starting_node, target_value)
  visited = Set.new([starting_node])

  current_nodes = [starting_node]
  until current_nodes.empty?
    current = current_nodes.shift
    return current if current.value == target_value
    current.neighbors.each do |neighbor|
      current_nodes << neighbor unless visited.include?(neighbor)
    end
  end
end

a = GraphNode.new("a")
b = GraphNode.new("b")
c = GraphNode.new("c")
d = GraphNode.new("d")
e = GraphNode.new("e")
f = GraphNode.new("f")
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

p bfs(a, 'b')
p bfs(a, 'f')