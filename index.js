function introduction(name) {
    console.log(`Hi, my name is ${name}.`);
    return `Hi, my name is ${name}.`;
}
introduction("Josh");

/*function introduction(name) {
    return `Hi, my name is ${name}.`;
}
console.log(introduction("Josh")); 
*/

function introductionWithLanguage(name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage("Josh", "Ember.js");

function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional("Josh");