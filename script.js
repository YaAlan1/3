let a = +prompt("Введеит число")
for (let i = 1; i <= a; i++) {
    if (i % 2 === 0) {
     console.log(i);
    }
   
}


let people = [
    {name: "Andrey", age: 12, budget: 26},
    {name: "Jasur", age: 16, budget: 2000},
    {name: "Ley", age: 5, budget: 20},
    {name: "Rey", age: 20, budget: 220}
]


let poorest = people[0]; 

for (let i = 1; i < people.length; i++) {
    if (people[i].budget < poorest.budget) poorest = people[i];
}

console.log(poorest);



