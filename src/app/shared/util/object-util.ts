
/**
 * add property into object
 * @param obj example {id:1, name:'shaiful'}
 * @param prop example city
 * @param value example tangail
 * @return example {id:1, name:'shaiful', city: 'tangail'}
 */
export function addPropToObj(obj: {}, prop: string, value: any): {} {
    return {...obj, [prop]: value};
}

/**
 * iterate over object keys
 * @param obj example {id:1,name:'shaiful'}
 */
export function objIteration(obj: {}): any {
    /*for (const [key, value] of Object.entries(obj)) {
        console.log(key, value);
    }*/
    console.log(Object.keys(obj));
    Object.keys(obj).forEach( (key) => {
        console.dir( key);
    });
    console.log(Object.values(obj));

    Object.values(obj).forEach(value => {
        console.log(value);
    });
    Object.values(obj).forEach( (v, index) => {
        console.dir(index, v);
    });
}

/**
 * find value by property from object
 * @param obj  : {id:1,name:'shaiful'}
 * @param prop example 'id'
 * @return example 1
 */
export function findValueByPropFromObj(obj: {}, prop: string = null) {
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
export function checkObjHasPropAndValue(obj: {}, prop: string, value: any) {
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
export function copy(obj: {}): {} {
    if (obj === null || obj === undefined){
        return null;
    }
    // return Object.assign({}, obj);
    return {...obj};
    // return JSON.parse(JSON.stringify(obj));
}
