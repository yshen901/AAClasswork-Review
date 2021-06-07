class Stack
  def initialize
    @stack = []
  end

  def push(el)
    @stack.push(el)
    el
  end

  def pop
    @stack.pop
  end

  def peek
    @stack[-1]
  end
end

class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.push(el)
    nil
  end

  def dequeue
    @queue.shift
  end

  def peek
    @queue[0]
  end
end

class Map
  def initialize
    @my_map = []
  end

  def set(key, value)
    idx = get_idx(key)
    idx ? @my_map[idx][1] = value : @my_map.push([key, value])
    [key, value]
  end

  def get(key)
    idx = get_idx(key)
    idx ? @my_map[idx][1] : nil
  end

  def delete(key)
    idx = get_idx(key)
    @my_map = @my_map[0...idx] + @my_map[idx+1..-1] if idx
  end

  def show
    @my_map
  end

  private
  def get_idx(key)
    @my_map.each_with_index do |pair, i|
      return i if pair[0] == key
    end
    nil
  end
end