import {addPropToObj, checkObjHasPropAndValue} from './object-util';

/**
 * add property into object of a list
 * @param obj example [{id:1,name:'shaiful'}]
 * @param prop example city:tangail
 * @return example [{id:1,name:'shaiful',city:tangail}]
 */
export function addPropInObjOfListOfObj(list, prop, value): any {
    return list.map(obj => addPropToObj(obj, prop, value));
}

/**
 * add property into object of a list
 * @param obj example [{id:1,name:'shaiful'}]
 * @param prop example city:tangail
 * @return example [{id:1,name:'shaiful',city:tangail}]
 */
export function addObjToList(list, obj): any {
    return [...list, obj];
}

/**
 * join two list
 */
export function joinTwoList(list1, list2): any {
    return [...list1, ...list2];
}

/**
 * compare two list and return common elements
 * @param list1 example: [{id:1,name:'Shaiful'},{id:2,name:'Ferdous'},{id:3,name:'Mujahid'}]
 * @param prop1 example: 'id'
 * @param list2 example: [{id:1,name:'Shaiful'},{id:3,name:'Mujahid'}]
 * @param prop2 example: 'id'
 * @return resultList example: [{id:1,name:'Shaiful'},{id:3,name:'Mujahid'}]
 */
export function commonObjList(list1, prop1, list2, prop2): any[] {
    const resultList = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < list1.length; i++) {
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < list2.length; j++) {
            if (list1[i][prop1] === list2[j][prop2]) {
                resultList.push(list1[i]);
            }
        }
    }
    return resultList;
}

/**
 * compare two list and return un common elements
 * @param list1 example [{id: 1, name: 'shaiful'}, {id: 2, name: 'ferdous'}]
 * @param prop1 example: 'id'
 * @param list2 example [{id: 1, name: 'shaiful'}, {id: 3, name: 'mujahid'}]
 * @param prop2 example: 'id'
 * @return resultList example : [{id: 2, name: 'ferdous'}, {id: 3, name: 'mujahid'}]
 */
export function unCommonItemList(list1, prop1, list2, prop2): any[] {
    return [];
}

/**
 * return unique elements of a List
 * @param array example [{id: 1, name: 'shaiful'}, {id: 2, name: 'ferdous'}, {id: 1, name: 'shaiful'}]
 * @param prop   'id'
 * @return List example : [{id: 1, name: 'shaiful'}, {id: 2, name: 'ferdous'}]
 */
export function uniqueList(list: any[], prop): any {
    let listResult = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < list.length; i++) {
        let flag = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < listResult.length; j++) {
            if (list[i][prop] === listResult[j][prop]) {
                flag = 1;
            }
        }
        if (flag === 0){
            listResult = addObjToList(listResult, list[i]);
        }
    }
    return listResult;
    // return list.filter((value, index, self) => self.indexOf(value) === index);
}

/**
 * return non unique elements of a List
 * @param list example [{id: 1, name: 'shaiful'}, {id: 2, name: 'ferdous'}, {id: 1, name: 'shaiful'}, {id: 3, name: 'mujahid'}]
 * @param prop   'id'
 * @return List example : [{id:2,name:'ferdous'},{id:3,name:'mujahid'}]
 */
export function nonUniqueList(list, prop): any {
    const resultList = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < resultList.length; i++) {

    }
    return resultList;
}


/**
 * list to group by
 * @param list example [{id: 1, name: 'shaiful'}, {id: 2, name: 'ferdous'}, {id: 1, name: 'shaiful'}]
 * @param property example 'id'
 * @return List example :
 */
export function groupByKey(list, property): any {
    return list.reduce( (acc, obj) => ({
            ...acc, [obj[property]]: [...(acc[obj[property]] || []), obj],
        }),  {}
    );
}

export function groupByProperty(list, property): any {
    return list.reduce( (acc, obj) => {
        if (!acc[obj[property]]) {
            acc[obj[property]] = [];
        }
        acc[obj[property]].push(obj);
        return acc;
    }, {});
}

/**
 * 2 list one to many left join
 * @param list1 example [{id: 1, name: 'shaiful'}, {id: 2, name: 'ferdous'}, {id: 1, name: 'shaiful'}]
 * @param protoProp example address
 * @param propList1 example id
 * @param list2 example [{id: 1, city: 'tangail', student_id: 1}, {id: 2, name: 'ferdous'}, {id: 1, name: 'shaiful'}]
 * @param propList2 example student_id
 * @return List example :
 */
export function leftJoin(list1, protoProp, propList1, propList2, list2): any {
    return list1.map(obj => ({ ...obj, [protoProp]: list2.filter(obj2 => obj[propList1] === obj2[propList2]) }));
}
/*
const stu = [{id: 1, name: 'shaiful'}, {id: 2, name: 'ferdous'}];
const add = [{id: 1, city: 'tangail', student_id: 1}, {id: 2, city: 'dhaka', student_id: 1}, {id: 3, city: 'feni', student_id: 2}];
console.log(leftJoin(stu, 'addr', 'id', 'student_id', add));
*/




export function isInList(list, obj, prop): any {
    if (list == null || list.length === 0){
        return false;
    }
    // tslint:disable-next-line:prefer-for-of
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
 * @param list example [{id:1,name:'shaiful'},{id:2,name:'ferdous'}]
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
 * @param list example [{id:1,name:'shaiful'},{id:2,name:'ferdous'}]
 * @param key example id  / null
 * @return example '1,2'
 */
export function listToCommaSeparatedString(list: any[], key = null){
    if (list && list.length){
        if (key){
            let str = '';
            for (let i = 0 ; i < list.length; i ++) {
                if (i === list.length - 1){
                    str = str + list[i][key] ;
                }else{
                    str = str + list[i][key] + ',' ;
                }
            }
            return str;
        }
        else{
            return list.join(',');
        }
    }else{
        return null;
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
 * @param list [{id:1,name:'shaiful'},{id:2,name:'ferdous'}]
 * @param key example 'id'
 * @param value example 2
 * @return example [{id:2,name:'ferdous'}]
 */
export function findObjFromList(list: {}[], prop: string, value: number | string) {
    return list.find(item => item[prop] === value);
}


/**
 * remove object from list by property and value
 * @param list [{id:1,name:'shaiful'},{id:2,name:'ferdous'},{id:3,name:'abc'}]
 * @param key example 'id'
 * @param value example 3
 * @return example [{id:1,name:'shaiful'},{id:2,name:'ferdous'}]
 */
export function removeObjFromList(list: {}[], prop: string, value: number | string) {
    return list.filter( obj => checkObjHasPropAndValue(obj, prop, value) );
}

/**
 * adding new property in object from list by property and value
 * @param list [{id:1,name:'shaiful'},{id:2,name:'ferdous'}]
 * @param key example 'district'
 * @param value example 3
 * @return example [{id:1,name:'shaiful','district':3}, {id:2,name:'ferdous','district':3}]
 */
export function addPropInListOfObj(list: {}[], prop: string, value: number | string) {
    return list.map( obj => addPropToObj(obj, prop, value) );
}
