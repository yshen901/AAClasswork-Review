require "employee"

class Startup
    attr_reader :name, :funding, :salaries, :employees

    def initialize(name, funding, salaries)
        @name = name
        @funding = funding
        @salaries = salaries
        @employees = []
    end

    def valid_title?(title_name)
        salaries.any? { |key, val| key == title_name }
    end

    def >(other_startup)
        self.funding > other_startup.funding
    end

    def hire(name, title)
        raise "invalid title" unless valid_title?(title)
        @employees << Employee.new(name, title)
    end

    def size
        @employees.length
    end

    def pay_employee(employee)
        raise "no money for salary" if @funding < @salaries[employee.title]
        
        amount = @salaries[employee.title]
        employee.pay(amount)
        @funding -= amount
    end

    def payday
        @employees.each { |employee| pay_employee(employee) }
    end

    def average_salary
        total = @employees.sum { |employee| @salaries[employee.title] }
        total / @employees.length
    end

    def close
        @employees = []
        @funding = 0
    end

    def acquire(another_one)
        @funding += another_one.funding
        @employees.concat(another_one.employees)
        another_one.salaries.each do |key, val|
            @salaries[key] = val unless @salaries.has_key?(key)
        end
        another_one.close
    end
end
