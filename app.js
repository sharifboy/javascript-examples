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
