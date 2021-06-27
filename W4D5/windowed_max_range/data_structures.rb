class MyQueue
  def initialize
    @store = []
  end

  def peek
    @store[0]
  end

  def enqueue(val)
    @store << val
    nil
  end

  def dequeue(val)
    @store.shift(val)
  end

  def empty?
    @store.empty?
  end
  
  def size
    @store.length
  end
end


class MyStack
  def initialize
    @store = []
  end

  def peek
    @store[-1]
  end

  def push(val)
    @store.push(val)
    nil
  end

  def pop
    @store.pop
  end

  def empty?
    @store.empty?
  end
  
  def size
    @store.length
  end
end


class StackQueue
  def initialize
    @pusher = MyStack.new
    @popper = MyStack.new
  end

  def size
    @popper.size + @pusher.size
  end

  def empty?
    @popper.empty? && @pusher.empty?
  end

  def peek
    if @popper.empty?
      until @pusher.empty?
        @popper.push(@pusher.pop)
      end
    end
      
    @popper.peek
  end

  def enqueue(val)
    @pusher.push(val)
    nil
  end

  def dequeue
    if @popper.empty?
      until @pusher.empty?
        @popper.push(@pusher.pop)
      end
    end
    @popper.pop
  end
end


class MinMaxStack
  def initialize
    @store = MyStack.new
  end

  def peek
    @store.peek[:value] unless @store.empty?
  end

  def size
    @store.size
  end

  def empty?
    @store.empty?
  end

  def max
    @store.peek[:max] unless empty?
  end

  def min
    @store.peek[:min] unless empty?
  end

  def push(val)
    new_val = {
      value: val,
      min: self.empty? || val < self.min ? val : @store.peek[:min],
      max: self.empty? || val > self.max ? val : @store.peek[:max]
    }

    @store.push(new_val)
    new_val
  end

  def pop
    @store.pop[:value] unless empty?
  end
end


class MinMaxStackQueue
  attr_reader :max, :min

  def initialize
    @popper = MinMaxStack.new
    @pusher = MinMaxStack.new
  end

  def peek
    if @popper.empty?
      until @pusher.empty?
        @popper.push(@pusher.pop)
      end
    end
      
    @popper.peek
  end

  def size
    @pusher.size + @popper.size
  end

  def enqueue(val)
    @pusher.push(val)
  end

  def dequeue
    if @popper.empty?
      until @pusher.empty?
        @popper.push(@pusher.pop)
      end
    end
    @popper.pop
  end

  def max
    if @popper.empty?
      until @pusher.empty?
        @popper.push(@pusher.pop)
      end
      return @popper.max
    end

    @pusher.empty? || @popper.max > @pusher.max ? @popper.max : @pusher.max
  end

  def min
    if @popper.empty?
      until @pusher.empty?
        @popper.push(@pusher.pop)
      end
      return @popper.min
    end

    @pusher.empty? || @popper.min < @pusher.min ? @popper.min : @pusher.min
  end
end