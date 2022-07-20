// if tou use new Object ---> yourObj --->  Object.prototype ---> null

// yourObj.__proto__ ---> send you to Object.prototype

// if we use constractor  ---> yourObj ---> constractor.prototype ---> Object.prototype ---> null

// yourObj.__proto__ ---> send you to constractor.prototype

// simple obj
let protoObj = {
    name:'DataView',
phone: '0038377'
}
// another wey for obj
let protoObj2 = new Object();
protoObj2.name = 'DataView';
protoObj2.phone = '12345';

// give the obj another prototype from other obj 
Object.setPrototypeOf(protoObj2, protoObj);

// better wey to do sameting
let childObj = Object.create(protoObj);

// to get the prototype
Object.getPrototypeOf(childObj)