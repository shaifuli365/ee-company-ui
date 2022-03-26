/**
 * add property into object
 * @param obj example {id:1, name:'shaiful'}
 * @param prop example city
 * @param value example tangail
 * @return example {id:1, name:'shaiful', city: 'tangail'}
 */
export function addPropToObj<T extends object>(obj: T, prop: string, value: any): T {
  return {...obj, [prop]: value};
}

/**
 * join two column
 */
export function joinObj(obj1: object, obj2: object): {} {
  return {...obj1, ...obj2};
}


/**
 * iterate over object keys
 * @param obj example {id:1,name:'shaiful'}
 */
export function objIteration(obj: object): void {
  console.log(Object.entries(obj));
  for (let [key, value] of Object.entries(obj)) {
    console.log(key + ':' + value);
  }

  console.log(Object.keys(obj));
  Object.keys(obj).forEach( (key,index) => {
    console.dir( key);
  });

  console.log(Object.values(obj));
  Object.values(obj).forEach((value, index)  => {
    console.log(value);
  });
}

export function getKeyListOfObj<T extends object>(obj: T): Array<string> {
  for (const [p, v] of Object.entries(obj)) {
    console.log(p);
  }
  return Object.keys(Object.entries(obj));
}

/**
 * find value by property from object
 * @param obj  : {id:1,name:'shaiful'}
 * @param prop example 'id'
 * @return example 1
 */
export function findValueByPropFromObj(obj: object, prop: string): any {
  for (const [key, value] of Object.entries(obj)) {
    if (key === prop) {
      return value;
    }
  }
  return null;
}

/**
 * check if object have desired property and value
 * @param list  : {id:1,name:'shaiful'}
 * @param prop example 'id'
 * @param value example 1
 * @return example true
 */
export function checkObjHasPropAndValue<T extends object>(obj: T, prop: string, value: any): boolean {
  for (const [p, v] of Object.entries(obj)) {
    if (p === prop && v === value) {
      return true;
    }
  }
  return false;
}

/**
 * object value copy
 * @param obj  : {id:1,name:'shaiful'}
 * @return example {id:1,name:'shaiful'}
 */
export function copy<T extends object>(obj: T): T {
  if (obj === null || obj === undefined){
    return {} as T;
  }
  // return Object.assign({}, obj);
  return {...obj};
  // return JSON.parse(JSON.stringify(obj));
}

/**
 * object value copy
 * @param obj1  : {id:null,name:null}
 * @param obj2  : {user_id:1,name:'shaiful'}
 * @param propMap  : [{id:'user_id'}]
 * @return example : {id:null,name:null}
 */
export function copyObjByPropMap<T extends object, U extends object>(
  obj1:T ,
  obj2:U,
  propMap:  Array<{ [key: string]: string }>
): T {
  /*if (obj1 === null || obj1 === undefined || obj2 === null || obj2 === undefined){
    throw new
  }*/
  for (let i = 0 ; i < propMap.length; i++){
    for (let [key, value] of Object.entries(propMap[i])) {
      console.log(key + ':' + value);
      // todo check if obj2 has this prop
      // todo null and undefined check
      obj1[key]= obj2[value]
    }
  }
  return obj1;
}

export function map(key:string, value:string)  : Map<string, string> {
  return new Map<string,string>();
}

export function record(obj: object)  : Record<string, string> {

  const r : Record<string, string> = {
    1: '',
    2: ''
  }
  return r;
}


/**
 * pass a object name and some properties. It will return an object
 */
export function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  let result = {} as Pick<T, K>
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }
  return result
}


export function partialTest<T, K extends keyof T>(obj: T, keys: K[]): Partial<T> {
  let result = {} as Partial<T>
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }
  return result;
}


export function classToObj<T extends object>(clazz: {new(...args: any[])}, obj: object): T {
  return Object.assign(new clazz(), obj);
}

export function classToObj2<T>(clazz: {new(...args: any[])} , obj:object) : typeof clazz {
  return Object.assign(new clazz(), obj);
}

export function classToObj3<T>(clazz: {new(...args: any[])} , obj:object) : T {
  return new clazz(obj);
}

export function classToEmptyObj<T extends object>(clazz: {new(...args: any[])}): T {
  return Object.assign(new clazz(), {});
}

export function classToEmptyObj2<T>(clazz: { new (): T; }): T {
  return Object.assign(new clazz(), {});
}

export function classToEmptyObj3(clazz: { new () }): typeof clazz {
  return new clazz();
}

export function classToEmptyObj5<T>(clazz: {new()}) : T {
  return Object.assign(new clazz());
}

export function classToEmptyObj4<T>(clazz: {new(...args: any[])}) : T {
  return Object.assign(new clazz());
}


export function objectFactory<T>(clazz: {new(...args: any[])}  , ...args: any[]) : T {
  return new clazz(...args);
}

export function objectFactory2<T>(clazz: {new(...args: any[])}  , prop1,prop2) : any {
  return new clazz(prop1,prop2);
}


/**
 * delete all property of an object
 */
export function deleteAllPropOfObject<T extends object>(obj: T) : T {
  for (var key in obj){
    if (obj.hasOwnProperty(key)){
      delete obj[key];
    }
  }
  return obj;
}

export function casting<T, U>(obj: object)  : U {
  return  <U><any>null;
  //return  <U><any>obj;
}
