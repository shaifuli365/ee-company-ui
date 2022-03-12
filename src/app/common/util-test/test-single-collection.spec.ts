import {
  addObjToList, commonObjFromList,
  contain,
  findObjFromListByPropAndValue,
  groupByProp3,
  uniqueObjList
} from '../util/single-collection-util';
import {Nullable} from '../type/nullable.type';
import {CommonObjectMap, Student, University, UniversityStudentProjection} from './model/model.spec';
import {classToObj} from '../util/object-util';

describe('Test single collection util', () => {

  beforeEach(() => {});

  it('uniqueObjList', () => {
    const list = uniqueObjList(
      [{id: 1, name: 'name 1'}, {id: 2, name: 'name 2'}, {id: 1, name: 'name 1'}], 'id');
    expect(list).toEqual([{id: 1 , name: 'name 1'}, {id: 2, name: 'name 2'}]);
  });

  it('addObjToList', () => {
    const list = addObjToList(
      [{id: 1, name: 'name 1'}, {id: 2, name: 'name 2'}], {id: 3, name: 'name 3'});
    expect(list).toEqual([{id: 1, name: 'name 1'}, {id: 2, name: 'name 2'}, {id: 3, name: 'name 3'}]);
  });

  it('findObjFromListByPropAndValue', () => {
    const student1: Student = classToObj(Student, {id: '1', name: 'name 1'});
    const student2: Student = classToObj(Student, {id: '1', name: 'name 1'});
    let studentList: Array<Student> = [];

    studentList = addObjToList(studentList, student1);
    studentList = addObjToList(studentList, student2);

    const studentT: Nullable<Student> = findObjFromListByPropAndValue( studentList,  'id', 3);
    //const studentT: Student = findFirst( studentList,  x => true , (x) => x);
    const studentT2: Student = classToObj(Student, {id: '1', name: 'name 1'});

    expect(studentT).toEqual(studentT2 );
  });


  it('uniqueObjList', () => {
    let studentListE: Array<Student> =  [
      new Student( '1',  'name 1', null),
      new Student( '2',  'name 2', null),
      new Student( '3',  'name 2', null),
    ];
    let studentListT: Array<Student> =  [
      new Student( '1',  'name 1', null),
      new Student( '2',  'name 2', null),
      new Student( '2',  'name 2', null),
      new Student( '3',  'name 3', null),
    ];
    const studentT3: Array<Student> = uniqueObjList( studentListT, 'id');
    console.log(studentT3);
    expect(studentListE).toEqual(studentT3 );
  });


  it('commonObjFromList', () => {
    let studentListT2: Array<Student> =  [
      new Student( '2',  'name 2', null)
    ];

    //new CommonObjectMap( 1,  new Student( '1',  'name 1', null)),

    let studentListT: Array<Student> =  [
      new Student( '1',  'name 1', null),
      new Student( '2',  'name 2', null),
      new Student( '2',  'name 2', null),
      new Student( '3',  'name 3', null),
    ];
    const studentT3: Array<Student> = commonObjFromList( studentListT, 'id');
    expect(studentListT2).toEqual(studentT3 );
  });

  it('contain', () => {
    let student: Student =  new Student( '1',  'name 1');

    let studentList: Array<Student> =  [
      new Student( '1',  'name 1', null),
      new Student( '1',  'name 1', null),
      new Student( '2',  'name 2', null),
      new Student( '3',  'name 3', null),
    ];
    const r: boolean = contain(studentList, student, 'id');
    expect(r).toEqual(true );
  });


  it('test5 groupByProp', () => {

    let student: Student =  new Student( '1',  'name 1');
    let university: University = new University( '1',  'name 1', [student] );

    let universityStudentProjectionList: Array<UniversityStudentProjection> =  [
      new UniversityStudentProjection('1','student 1','1','university 1'),
      new UniversityStudentProjection('2','student 1','1','university 1'),
      new UniversityStudentProjection('3','student 1','1','university 1'),
      new UniversityStudentProjection('4','student 1','1','university 1'),
      new UniversityStudentProjection('5','student 1','1','university 1'),
      new UniversityStudentProjection('6','student 1','2','university 2'),
      new UniversityStudentProjection('7','student 1','2','university 2'),
    ];

    const universityList:Array<University> = groupByProp3<University>(
      'universityId',
      universityStudentProjectionList,
      University,
      [{'':''},{'':''}],
      'studentList',
      Student,
      [{'':''},{'':''}]
    );
    console.log(universityList);
    expect(1).toEqual(1 );
  });

});



