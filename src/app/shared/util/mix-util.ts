/**
 * replace url path variable
 * @param url example /book/:id/page/:id/line/:lineNumber
 * @param replaceWith example [1,2,10]
 * @return example /book/1/page/2/line/10
 */
export function setPathVar(url: string , replaceWith: string[]) {
    let cnt = 0;
    return url.replace(/\:[a-zA-Z0-9]*/g, $0 => replaceWith[cnt++]);
}

export function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

/*export function runFnAfter(fn, milliseconds) {

}*/

