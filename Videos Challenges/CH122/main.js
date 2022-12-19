let chosen = 2;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let title, age, available, lastSkill;

switch (chosen) {
    case 1:
        [
            {
                title,
                age,
                available,
                skills: [, lastSkill],
            },
        ] = myFriends;
        break;
    case 2:
        [
            ,
            {
                title,
                age,
                available,
                skills: [, lastSkill],
            },
        ] = myFriends;
        break;
    case 3:
        [
            ,
            ,
            {
                title,
                age,
                available,
                skills: [, lastSkill],
            },
        ] = myFriends;
        break;
}

// the simplest solution 👍👍👍👍👍👍👍👍
// same result of the solution above;
// if (chosen >= 1 && chosen <= 3) {
//     var { title, age, available, skills: [, lastSkill] } = myFriends[chosen - 1];
// }


console.log(title);
console.log(age);
console.log(available ? "Available" : "Not available");
console.log(lastSkill);
