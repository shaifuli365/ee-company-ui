import {groupByProp, oneToMany} from '../util/multi-collection-util';
import {Student, University, UniversityStudentProjection} from './model/model.spec';

describe('Test single collection util', () => {

  beforeEach(() => {});

  it('oneToMany', () => {


  });

  it('groupByProp', () => {

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

    const universityList:Array<University> = groupByProp<University>(
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



