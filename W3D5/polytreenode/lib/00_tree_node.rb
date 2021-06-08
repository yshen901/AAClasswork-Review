class PolyTreeNode
  attr_reader :parent, :children, :value
  
  def initialize(value)
    @parent = nil
    @children = []
    @value = value
  end

  def parent=(new_parent)
    @parent.children.delete(self) if @parent
    new_parent.children << self if new_parent && !new_parent.children.include?(self)
    @parent = new_parent
  end

  def add_child(child)
    @children << child unless @children.include?(child)
    child.parent = self
  end

  def remove_child(child)
    raise "Not a child!" unless @children.include?(child)
    child.parent = nil
    @children.delete(child)
  end

  def dfs(target_value)
    return self if @value == target_value
    @children.each do |child|
      search_result = child.dfs(target_value)
      return search_result if search_result
    end
    nil
  end

  def bfs(target_value)
    values = [self]
    until values.empty?
      current = values.shift
      return current if current.value == target_value
      values.concat(current.children)
    end
    nil
  end
end