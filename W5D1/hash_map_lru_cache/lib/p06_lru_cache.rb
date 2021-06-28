require_relative 'p05_hash_map'
require_relative 'p04_linked_list'

class LRUCache
  include Enumerable

  def initialize(max, prc)
    @map = HashMap.new
    @store = LinkedList.new
    @max = max
    @prc = prc
  end

  def count
    @map.count
  end

  def get(key)
    if @map[key]
      update_node!(@map[key])
    else
      calc!(key)
      eject! if count > @max
    end

    return @map[key].val
  end

  def to_s
    'Map: ' + @map.to_s + '\n' + 'Store: ' + @store.to_s
  end

  private

  def calc!(key)
    # suggested helper method; insert an (un-cached) key
    @store.append(key, @prc.call(key))
    @map[key] = @store.last
  end

  def update_node!(node)
    # suggested helper method; move a node to the end of the list
    node.remove
    @store.append(node.key, node.val)
    @map[node.key] = @store.last
  end

  def eject!
    node = @store.first

    @map.delete(node.key)
    node.remove
  end
end
