require_relative "./employee"

class Manager < Employee
  attr_reader :employees

  def initialize(name, title, salary, boss=nil)
    super(name, title, salary, boss)
    @employees = []
  end

  def bonus(multiplier)
    sum = 0

    @employees.each do |employee|
      sum += employee.salary
      sum += employee.bonus(1) if employee.is_a?(Manager)
    end

    sum * multiplier
  end

  def add_employee(employee)
    @employees << employee
  end
end