
/**
 * renderImage file
 *  <img [src]="url || 'assets/images/placeholder/placeholder.jpg'" />
 */
export function renderImage(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    let url;
    reader.onload = (e) => {
        url = reader.result;
    };
    return url;
}
