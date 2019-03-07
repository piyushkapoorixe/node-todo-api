// object destructuring (ES6 feature) is pulling out a property of an object into a variable 
// suppose we have a object as follows
var user = {
    name: 'Piyush',
    age: 22
};
// now if we want to want to use object destructuring and pull out name property into a variable we can do the following
var {name} = user;
console.log(name); // prints Piyush