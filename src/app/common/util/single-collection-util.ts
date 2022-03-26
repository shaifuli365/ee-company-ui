import {addPropToObj, checkObjHasPropAndValue, classToEmptyObj, getKeyListOfObj} from './object-util';
import {onlyArray, onlyPresentArray} from './type-check-util';
import {Nullable} from '../type/nullable.type';
import {classType} from '../type/class.type';


/**
 * adding new property in object from list by property and value
 * @param list [{id:1,name:'name 1'},{id:2,name:'name 2'}]
 * @param key example 'district'
 * @param value example 3
 * @return example [{id:1,name:'name 1','district':3}, {id:2,name:'name 2','district':3}]
 */
export function addPropInListOfObj<T extends object>(list: Array<T>, prop: string, value: Nullable<number | string>
): Array<T> {
  return list.map( obj => addPropToObj(obj, prop, value) );
}


/**
 * add property into object of a list
 * @param obj example [{id:1,name:'name 1'}]
 * @param prop example {id:2,name:'name 2'}
 * @return example [{id:1,name:'name 1'},{id:2,name:'name 2'}]
 */
export function addObjToList<T extends object>(list:Array<T> , obj: T): Array<T> {
  return [...list, obj];
}


/**
 * does list contain object by property
 * @param list example: [ {id:1,name:'name 1'},{id:2,name:'name 2'}]
 * @param obj example: {id:1,name:'name 1'}
 * @param prop example: id
 * @return result example:
 */
export function contain<T extends object>(list:Array<T>, obj:T, prop: string): boolean {
  for (let i = 0; i < list.length; i++) {
    if ( obj[prop] !==undefined && obj[prop] !==null
      && list[i][prop] !==undefined && list[i][prop] !==null
      && obj[prop] === list[i][prop] ) {
      return true;
    }
  }
  return false;
}


/**
 * if an object is present in a list of object
 * @param list example: [{id: 1, name: 'name 1'}, {id: 2, name: 'name 2'}, {id: 1, name: 'name 1'}]
 * @param obj example: {id: 1, name: 'name 1'}
 * @param propList1 example: id
 * @return result example : true
 */
export function isInList(list, obj, prop): boolean {
  if (list == null || list.length === 0){
    return false;
  }
  for (let i = 0 ; i < list.length; i++){
    if (list[i][prop] === obj[prop]){
      return true;
    }
  }
  /*if ( list.find(el => el[prop] === obj[prop]) !== null){
     return true;
  }*/
  return false;
}


/**
 * index of an object in a list of object
 * @param list example: [{id: 1, name: 'name 1'}, {id: 2, name: 'name 2'}, {id: 1, name: 'name 1'}]
 * @param obj example: {id: 1, name: 'name 1'}
 * @param propList1 example: id
 * @return result example : 0
 */
export function indexInList(list: any[], obj, prop: string): number {
  if (list === null || list === undefined || list.length > 0){
    return -1;
  }
  for (let i = 0 ; i < list.length; i++) {
    if (list[i] === obj[prop]){
      return i;
    }
  }
  return  -1;
}


/**
 * get the index of object from list
 * @param list example [{id:1,name:'name 1'},{id:2,name:'name 2'}]
 * @param prop example id
 * @param value example 1
 * @return example '1,2'
 */
export function getObjIndexFromList(list, prop, value): any {
  if (list == null || list === undefined || list.length === 0 ){
    return -1;
  }
  for (let i = 0 ; i < list.length; i ++) {
    if (list[i][prop] === value  ){
      return i;
    }
  }
  return -1;
}

/**
 * list to comma seperated string
 * @param list example [{id:1,name:'name 1'},{id:2,name:'name 2'}]
 * @param list example [1,2,3]
 * @param list example ['1','2','3']
 * @param key example id  / null
 * @return example '1,2'
 */
export function toCommaSeparatedValue<T extends object|string|number>
(list: Array<T>, prop:Nullable<string> = null): string{
  if (list && list.length){
    if (prop){
      let str = '';
      for (let i = 0 ; i < list.length; i ++) {
        if (i === list.length - 1){
          str = str + list[i][prop] ;
        }else{
          str = str + list[i][prop] + ',' ;
        }
      }
      return str;
    }
    else{
      return list.join(',');
    }
  }else{
    return '';
  }
}

/**
 * list to ascending sort
 */
export function asc(list: any[], key: string) {
  return list.sort((a, b) => {
    if (a[key] < b[key]) { return -1; }
    if (a[key] > b[key]) { return 1; }
    return 0;
  });
}

/**
 * list to descending sort
 */
export function desc(list: any[], key: string) {
  return list.sort((a, b) => {
    if (a[key] > b[key]) { return -1; }
    if (a[key] < b[key]) { return 1; }
    return 0;
  });
}


/**
 * find form list of object by object property and value
 * @param list [{id:1,name:'name 1'},{id:2,name:'name 2'}]
 * @param prop example 'id'
 * @param value example 2
 * @return example {id:2,name:'name 2'}
 */
export function findObjFromListByPropAndValue<T extends object>(list: Array<T>, prop: string, value: number | string) : Nullable<T>{
  onlyArray(list);
  for (let i = 0 ; i < list.length; i ++) {
    if(list[i][prop] === value){
      return list[i];
    }
  }
  return null;
}

/**
 * find form list of object by object property and value
 * @param list [{id:1,name:'name 1'},{id:2,name:'name 2'}]
 * @param prop example 'id'
 * @param value example 2
 * @return example [{id:2,name:'name 2'}]
 */
export function findListOfObjFromListByPropAndValue<T extends object>(list: Array<T>, prop: string, value: number | string) : Array<T>{
  onlyArray(list);
  let resultList: Array<T> = [];
  for (let i = 0; i < list.length; i++) {
    if(list[i][prop] === value){
      resultList = addObjToList(resultList, list[i])
    }
  }
  return resultList;
}

export function findFirst<T, U>(
  array: T[],
  predicate: (item: T) => boolean,
  selector: (item: T) => U = (x:T)=> <U><any>x)  : Nullable<U> {
  const tempArray: Array<U>= array.filter(predicate).map(selector);
  return (tempArray.length>0) ?  tempArray[0] : null;
}

/**
 * remove object from list by property and value
 * @param list [{id:1,name:'name 1'},{id:2,name:'name 2'},{id:3,name:'abc'}]
 * @param key example 'id'
 * @param value example 3
 * @return example [{id:1,name:'name 1'},{id:2,name:'name 2'}]
 */
export function removeObjFromList<T extends object>(list: Array<T>, prop: string, value: number | string) {
  return list.filter( obj => checkObjHasPropAndValue(obj, prop, value) );
}


/**
 * get a object(in a list) if it is present in list only once
 * @param list1 example: [ {id:1,name:'name 1'},{id:2,name:'name 2'},{id:2,name:'name 2'} ]
 * @param prop1 example: 'id'
 * @return resultList example: [ {id:1,name:'name 1'},{id:2,name:'name 2'}]
 */
export function uniqueObjList<T extends object>(list:Array<T>, prop: string): Array<T> {
  let resultList: Array<T> = [];
  for (let i = 0; i < list.length; i++) {
    if (!contain(resultList, list[i], prop)) {
      resultList = addObjToList(resultList, list[i])
    }
  }
  return resultList;
  //list.filter(v => !list.includes(v))
  //return list.filter(o => list.some(id => o[prop] === id ));
}

/**
 * get a object(in a list) if it is present in list more than once
 * @param list example [{id: 1, name: 'name 1'}, {id: 2, name: 'name 2'}, {id: 2, name: 'name 2'}, {id: 3, name: 'name 3'}]
 * @param prop   'id'
 * @return List example : [{id:2,name:'name 2'}]
 */
export function nonUniqueObjList<T extends object>(list:Array<T>, prop: string): Array<T> {
  const resultList = [];
  for (let i = 0; i < resultList.length; i++) {

  }
  return resultList;
}

/**
 * get a object(in a list) only once from list
 * @param list1 example: [ {id:1,name:'name 1'},{id:2,name:'name 2'},{id:2,name:'name 2'} ]
 * @param prop1 example: 'id'
 * @return resultList example: [ {id:1,name:'name 1'},{id:2,name:'name 2'}]
 */
export function distinctObjFromList<T extends object>(list:Array<T>, prop: string): Array<T> {
  return list.filter(o => list.some(id => o[prop] === id ));
}

/**
 * commonObjectMap
 * @param list1 example: [ {id:1,name:'name 1'},{id:2,name:'name 2'},{id:2,name:'name 2'} ]
 * @param prop1 example: 'id'
 * @return resultList example: map { numberOfOccurance: 2, object: {id:2,name:'name 2'},{id:2,name:'name 2'} }
 */
export function commonObjectMap<T extends object>(list:Array<T>, prop: string): Array<T> {
  return list.filter(o => list.some(id => o[prop] === id ));
}



/**
 * reduce
 * @param list1 example: [ {id:1,name:'name 1'},{id:2,name:'name 2'},{id:2,name:'name 2'} ]
 * @param prop1 example: 'id'
 * @return resultList example: map { numberOfOccurance: 2, object: {id:2,name:'name 2'},{id:2,name:'name 2'} }
 */
export function reduce<T>(
  array: T[],
  predicate: (previousValue: T, currentValue: T) => T)  : T {

  const t:number = [1, 2, 3].reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  return <T><unknown>t;

  /*const tempArray: T= array.reduce(predicate);
  return tempArray;*/

}

export function callbackEx(a, fn: (e: number) => string) : string {
  return fn(a);
}




