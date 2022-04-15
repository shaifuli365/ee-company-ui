import {
  addObjToList,
  aggregate,
  callbackEx,
  commonObjectMap,
  contain,
  findListOfObjFromListByPropAndValue,
  findObjFromListByPropAndValue,
  toCommaSeparatedValue,
  uniqueObjList
} from '../util/single-collection-util';
import {Nullable} from '../type/nullable.type';
import {Student, University, UniversityStudentProjection} from './model/model.spec';
import {classToObj} from '../util/object-util';
import {groupByProp} from '../util/multi-collection-util';

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
    const student3: Student = classToObj(Student, {id: '3', name: 'name 3'});
    let studentList: Array<Student> = [];

    studentList = addObjToList(studentList, student1);
    studentList = addObjToList(studentList, student2);

    const studentT: Nullable<Student> = findObjFromListByPropAndValue( studentList,  'id', '1');
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


  it('test4', () => {
    const str = toCommaSeparatedValue(['abc', 'def' , 2], null);
    // console.log(str);
    expect(str).toBe('abc,def,2');
  });


  it('commonObjectMap', () => {
    let studentListT2: Array<Student> =  [
      new Student( '2',  'name 2', null)
    ];
    //new commonObjectMap( 1,  new Student( '1',  'name 1', null)),
    let studentListT: Array<Student> =  [
      new Student( '1',  'name 1', null),
      new Student( '2',  'name 2', null),
      new Student( '2',  'name 2', null),
      new Student( '3',  'name 3', null),
    ];
    const studentT3: Array<Student> = commonObjectMap( studentListT, 'id');
    expect(studentListT2).toEqual(studentT3 );
  });


  it('findListOfObjFromListByPropAndValue', () => {

    let studentList: Array<Student> = [];
    studentList = addObjToList(studentList, classToObj(Student, {id: '1', name: 'name 1'}));
    studentList = addObjToList(studentList, classToObj(Student, {id: '2', name: 'name 2'}));
    studentList = addObjToList(studentList, classToObj(Student, {id: '2', name: 'name 2'}));
    studentList = addObjToList(studentList, classToObj(Student, {id: '3', name: 'name 3'}));

    const studentListE: Array<Student> = findListOfObjFromListByPropAndValue( studentList,  'id', '2');

    let studentList2: Array<Student> = [];
    studentList2 = addObjToList(studentList2, classToObj(Student, {id: '2', name: 'name 2'}));
    studentList2 = addObjToList(studentList2, classToObj(Student, {id: '2', name: 'name 2'}));

    expect(studentListE).toEqual(studentList2 );
  });


  it('aggregate', () => {

    const t:number = aggregate([1, 2, 3], (previousValue, currentValue) => {
      return previousValue + currentValue;
    });

    expect(t).toEqual(6 );
  });


  it('callback', () => {
    const fn = (b: number) : string => {
      return b.toString();
    }
    expect(callbackEx(5,fn)).toEqual("5" );
  });

});



