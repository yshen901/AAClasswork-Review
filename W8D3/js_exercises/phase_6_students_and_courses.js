class Student {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.courses = [];
  }

  name() {
    return `${this.firstName} ${this.lastName}`;
  }

  enroll(course) {
    if (this.courses.indexOf(course) !== -1) { return; }
    if (this.hasConflict(course)) { throw "Course conflict error!"; }

    this.courses.push(course);
    course.addStudent(this);
  }

  courseLoad() {
    let credits = {};
    let course;
    for (let i = 0; i < this.courses.length; i++) {
      course = this.courses[i];
      credits[course.department] = credits[course.department] || 0;
      credits[course.department] += course.credits;
    }

    return credits;
  }

  hasConflict(course) {
    for (let i = 0; i < this.courses.length-1; i++) {
      if (course.conflictsWith(this.courses[i]))
        return true;
    }
    return false;
  }
}

class Course {
  constructor(name, department, credits, days, block) {
    this.name = name;
    this.department = department;
    this.credits = credits;

    this.block = block;
    this.days = days;

    this.students = [];
  }

  addStudent(student) {
    if (this.students.indexOf(student) == -1) {
      this.students.push(student);
      student.enroll(this);
    }
  }

  conflictsWith(otherCourse) {
    if (this.block != otherCourse.block) { return false; }

    return this.days.some( day => otherCourse.days.indexOf(day) >= -1 );
  }
}