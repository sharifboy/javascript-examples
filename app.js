// Tagged template literals

const str = "John";
const age = 30;

const abs = `${str}, how are u`; // TAGGED TEMPLATE LITERALS \\
console.log(abs);

function hightlight(strings, ...values) {
    let result = "";
    strings.forEach((element, i) => {
        result += `${element} ${values[i] || ""}`;
    });
    return result;
}

const sentence = hightlight`Hi my name is${str}, my age is${age} years old`;
console.log(hightlight`Hi my name is${str}, my age is${age} years old`);
document.body.innerHTML = sentence;

// FUNCTION CONSTRUCTOR

function User(name, age, country) {
    if (!new.target) {
        return new User(name, age, country);
    }
    this.name = name;
    this.age = age;
    this.country = country;
    return this;
}

const person1 = User("John", 30, "USA");
const person2 = User("STEVE", 40, "Brazil");

console.log(person1, "person1");
console.log(person2, "person2");
