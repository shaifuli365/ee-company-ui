import {
  addPropToObj,
  casting,
  classToEmptyObj,
  classToEmptyObj4,
  classToObj,
  classToObj3,
  copy,
  copyObjByPropMap,
  getKeyListOfObj,
  objectFactory2,
  objIteration,
  pickObjectKeys
} from '../util/object-util';

import {Student, StudentTeacherProjection, Teacher} from './model/model.spec';

describe('Test object util', () => {
  /* beforeEach(() => { service = new TestService(); }); */

  it('getKeyOfClass', () => {
    getKeyListOfObj(classToObj(Teacher, {}));

    expect(1).toEqual(1);
  });

  it('partialConstructor', () => {
    const a2 = Teacher.partialConstructor({id:'1'});
    console.log(a2);
    console.log(a2.id);
    expect(1).toEqual(1);
  });

  it('objectFactory', () => {
    const student2: Student = new Student('2', 'name 2', null);
    const student3: Student = objectFactory2<Student>(Student,'id','name');
    console.log(student3);
    expect(student2).toEqual(student3);
  });


  it('classToObj', () => {
    const student1: Student =  new Student( '1',  'name 1');
    const student2: Student = classToObj3(Student, {'id':'1', 'name':'name 1'});
    console.log(typeof student2);
    console.log(student2);
    expect(student1).toEqual(student2);
  });

  it('classToObj', () => {
    const student1: Student =  new Student( '1',  'name 1');
    const student2: Student = classToObj3(Student,{'id':'1', 'name':'name 1'});
    console.log(typeof student2);
    console.log(student2);
    expect(student2).toEqual(student1 );
  });

  it('objIteration', () => {
    // objIteration(classToEmptyObj(Teacher));
    // objIteration(classToObj(Teacher,{id:'world'}));
    // objIteration(Teacher.describe(classToObj(Teacher,{id:'world'})));
    // expect(1).toEqual(1 );

    let a:Teacher = classToEmptyObj4(Teacher);
    console.log(a);
    //objIteration(a)
    // let array = Object.getOwnPropertyNames(a);
    // console.log(array);
  });

  it('copyObjByPropMap', () => {
    let a:Teacher = copyObjByPropMap(
      classToEmptyObj(Teacher),
      classToObj<StudentTeacherProjection>(StudentTeacherProjection,
        {teacherId: 'teacherId 1', teacherName: 'teacherName 1',
          studentId: 'studentId 1', studentName: 'studentName 1'}),
      [{id:'teacherId'},{name:'teacherName'}]
    );
    console.log(a);
  });


  it('addPropToObj', () => {
    const obj : object = addPropToObj({id: 1, name: 'name 1'}, 'city' , 'city 1');
    expect(obj).toEqual({id: 1, name: 'name 1', city: 'city 1'});
  });


  it('objIteration', () => {
    objIteration({id: 1, name: 'name 1'});
    expect(1).toEqual(1);
  });

  it('copy', () => {
    const student2: Student = new Student('2', 'name 2')
    const student3: Student = copy(student2);
    console.log(student3);
    expect(student2).toEqual(student3);
  });

  it('map', () => {
    /*const o: object = {id:1,name:'shaiful'}
    console.log(typeof o);
    console.log(o)

    const student: Student = new Student('2', 'name 2');
    console.log(typeof student);
    console.log(student)*/

    let m : Map<string,string> = new Map<string,string>();
    m.set('1','111');
    m.set('2','222');
    m.set('3','333');
    m.set('4','444');
    console.log(typeof m);
    console.log(m);

    console.log(m.get("1"));
    console.log(m.has("1"));
    console.log(m.has("3"));

    console.log(m.size);
    console.log(m.delete("2"));

    //m.clear();

    /*let m2 : Map<string,string> = new Map<string,string>([
      ["key1", "value1"],
      ["key2", "value2"]
    ]);
    console.log(typeof m2);
    console.log(m2);*/

    for (let key of m.keys()) {
      console.log(key);
    }
    for (let value of m.values()) {
      console.log(value);
    }

    console.log("The Map Enteries are: ");
    for (let entry of m.entries()) {
      console.log(entry[0], entry[1]);
    }

    expect(1).toEqual(1);
  });



  it('casting', () => {
    console.log(casting({'id':'1', 'name':'name 1'}));
    const student1: Student = new Student('1', 'name 1');
    const student2: Student = casting( {id: '1', name: 'name 1'});
    //expect(student1).toEqual(student2 );
  });

  it('pickObjectKeys', () => {
    const student1: Student = new Student('1', 'name 1');
    const student = pickObjectKeys(student1, ['id', 'name']);
    console.log(typeof student);
    console.log(student);
    expect(student).toEqual(student1 );
  });

  it('generateObject', () => {
    const student1: Student = new Student('1', 'name 1');

    const student2: Student = classToEmptyObj(Student);
    console.log(typeof student2);
    console.log(student2);
    //expect(student2).toEqual(student1 );
  });

});
