class LRUCache
  def initialize(size)
    @store = []
    @size = size
  end

  def count
    return @store.size
  end

  def add(el)
    if @store.include?(el)
      @store.delete(el)
      @store << el
    elsif self.count < @size
      @store << el
    else
      @store.unshift
      @store << el
    end
  end

  def show
    p @store
  end
end