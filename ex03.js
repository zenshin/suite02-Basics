/*

    copyArray

    Ecrire une fonction "copyArray",
    qui prend en paramètre un tableau,
    et retourne une copie de ce tableau.

    Prototype:
        arr copyArray(arr);

    Exemple:
        copyArray(["bonjour", 4, 5]); // ["bonjour", 4, 5]

*/
function copyArray(arr) {
    var arr1 = [];
    var arr2 = arr1;
    // for (var i = 0, len = arr1.length; i < len; ++i) {
    //     return arr2[i] = arr1[i];
    // }
    return arr2
}
