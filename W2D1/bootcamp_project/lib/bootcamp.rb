class Bootcamp
  def initialize(name, slogan, student_capacity)
    @name = name
    @slogan = slogan
    @student_capacity = student_capacity
    @teachers = []
    @students = []
    
    @grades = Hash.new { |h, k| h[k] = [] }
  end

  def name
    @name
  end

  def slogan
    @slogan
  end

  def teachers
    @teachers
  end

  def students
    @students
  end

  def hire (teacher)
    @teachers << teacher
  end

  def enroll (student)
    return false if @students.length == @student_capacity
    @students << student
    true
  end

  def enrolled?(student)
    @students.include?(student)
  end   

  def student_to_teacher_ratio
    @students.length / @teachers.length
  end

  def add_grade(student, grade)
    return false unless enrolled?(student)
    @grades[student] ? @grades[student] << grade : @grades[student] = grade
    true
  end

  def num_grades(student)
    @grades[student].length
  end

  def average_grade(student)
    return nil unless enrolled?(student)
    return nil unless @grades[student].length > 0
    @grades[student].sum / @grades[student].length
  end
end
