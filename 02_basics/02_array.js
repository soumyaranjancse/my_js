const marvel_heros = ["Iron man","Spiderman","Loki"]
const dc_heros = ["Batman","Superman","Flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// output -> [ 'Iron man', 'Spiderman', 'Loki', [ 'Batman', 'Superman', 'Flash' ] ]

// console.log(marvel_heros[3][2])
 // op -> Flash

// marvel_heros.concat(dc_heros) -> same output as push

// but if we do 

// const combine_heros = marvel_heros.concat(dc_heros)
// console.log(combine_heros)
// output -> [ 'Iron man', 'Spiderman', 'Loki', 'Batman', 'Superman', 'Flash' ] 

// we can also use spread operator 
// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)
// output -> [ 'Iron man', 'Spiderman', 'Loki', 'Batman', 'Superman', 'Flash' ] 

// if we got the depth array type array and we want to keep simple array. for example : array = [1,2,[3,4,[7,8]]]
// we can use flat operator

const another_array = [1,2,3,4,[7,8,[8,3]],4,2]
const another_real_array = another_array.flat(Infinity)

console.log(another_real_array)
// [1, 2, 3, 4, 7,8, 8, 3, 4, 2]

//  ANOTHER OPERATORS 
console.log(Array.isArray("Soumya")) // false
console.log(Array.from("Soumya")) // [ 'S', 'o', 'u', 'm', 'y', 'a' ]

let score1 = 100
let score2 = 190
let score3 = 183

console.log(Array.of(score1,score2,score3)) 
// op -> [ 100, 190, 183 ]