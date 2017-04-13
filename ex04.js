/*

    editStringAt

    Ecrire une fonction "editStringAt",
    qui modifie une chaine de caractère à une certaine position.
    La fonction retourne cette même chaine de caractère avec les modifications attendus.

    Prototype:
        str editStringAt(str, position, char);

    Exemple:
        editStringAt("toto", 3, "a"); // "tota";

*/
function editStringAt(str, pos, char) {

    return str.substr(0, pos) + char + str.substr(pos + 1);
};
