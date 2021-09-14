// 1. Fonction multiplier. git push -u origin main/master -> Pousser le changement pour la premiere fois. Generer un token
const multiplier = (nombre1, nombre2) => nombre1 * nombre2
console.log(multiplier(5,6));



// 2. Fonction multiplier.
const diviser = function(nombre1, nombre2) {
    if (nombre1 == 0 || nombre2 == 0) {
        return NaN
    }
    return nombre1 / nombre2;
}

console.log(diviser(10,5))



// 3. Sommes de éléments du tableau.
function SommeDesElementsDuTableau(Array) {
    let somme = 0
    Array.forEach(function(element) {
        somme += element
})
    if(Array.length <= 0) {
        return 0
    } else {
        return somme
    }
}



// 4. Liste des multiples de 2 d'un tableau
function ListeElementsMultiplesDe2(Array) {
    switch (Array) {

        //Verifie si la liste est undefined.
        case (typeof Array === undefined):
            console.log("Le tableau est undefined.")
            break;
        //Verifie si le tableau est vide.
        case (Array.length <= 0):
            console.log("Le tableau est vide.")
            break;

        default:
            let multiples = []
            for(let i=0; i < Array.length; i++) {
                if((Array[i] % 2) == 0) {
                    multiples.push({
                        element: Array[i],
                        index: i
                    })}
            } return multiples
            break;
    }}

const liste = [20,43,21,50]


module.exports = {
    multiplier,
    diviser,
    SommeDesElementsDuTableau,
    ListeElementsMultiplesDe2
}
