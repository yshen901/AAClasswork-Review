class Item

  def self.valid_date?(date_string)
    year, month, day = date_string.split("-")
    
    return false unless year && month && day
    return false unless year.length == 4 && year.to_i.between?(0,9999)
    return false unless month.length == 2 && month.to_i.between?(1,12)
    return false unless day.length == 2 && day.to_i.between?(1,31)

    true
  end

  attr_accessor :title, :description
  attr_reader :deadline, :done

  def initialize(title, deadline, description, done = false)
    raise "Invalid date." unless Item.valid_date?(deadline)

    @title = title
    @deadline = deadline
    @description = description
    @done = done
  end

  def deadline=(new_deadline)
    raise "Invalid date." unless Item.valid_date?(new_deadline)
    @deadline = new_deadline
  end 

  def toggle
    @done = !@done
  end
end