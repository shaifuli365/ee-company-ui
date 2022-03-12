import {classToObj3} from '../../util/object-util';
import {Nullable} from '../../type/nullable.type';

export class Teacher  {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
  //no need, use classToObj function
  static partialConstructor(o: Partial<Teacher>): Teacher{
    return classToObj3(Teacher, o)
  }
}

export class StudentTeacherProjection  {
  teacherId: string;
  teacherName: string;

  studentId: string;
  studentName: string;

  constructor(teacherId: string, teacherName: string, studentId: string, studentName: string) {
    this.teacherId = teacherId;
    this.teacherName = teacherName;
    this.studentId = studentId;
    this.studentName = studentName;
  }
}

export class Student{
  id: string;
  name: string;
  email: Nullable<string>;

  constructor(id: string, name: string, email: Nullable<string> = null) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

export class University{
  id: string;
  name: string;
  studentList: Array<Student>;

  constructor(id: string, name: string, studentList: Array<Student>) {
    this.id = id;
    this.name = name;
    this.studentList = studentList;
  }
}

export class UniversityStudentProjection{
  studentId: string;
  studentName: string;
  universityId: string;
  universityName: string;

  constructor(studentId: string, studentName: string, universityId: string, universityName: string) {
    this.studentId = studentId;
    this.studentName = studentName;
    this.universityId = universityId;
    this.universityName = universityName;
  }
}

export class CommonObjectMap<T>{
  total_number_of_occurrence: number;
  obj: T;

  constructor(total_number_of_occurrence: number, obj: T) {
    this.total_number_of_occurrence = total_number_of_occurrence;
    this.obj = obj;
  }
}
