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

    var arr1 = [arr];
    var arr2 = arr1;
    return arr2;
};
