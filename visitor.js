// MyStruct is an object with 2 fields: 'left' and 'right'.
// Sometimes we need to set 'left', while sometimes we need to set 'right'.
// It has a method called 'set' whose purpose is to either set 'left' or 'right' depending on its parameter.
// Its parameter is a visitor: a 'LeftVisitor' sets the 'left' field, while a 'RightVisitor' sets the 'right' field.

class MyStruct {
    constructor() { this.left = 0; this.right = 0; }
    set(visitor) { visitor.visit(this); }
};

class Visitor {
    constructor(value) { this.value = value; }
    visit(myStruct) { throw 'Method not implemented'; };
}

class LeftVisitor extends Visitor {
    constructor(value) { super(value); }
    visit(myStruct) { myStruct.left = this.value; };
}

class RightVisitor extends Visitor {
    visit(myStruct) { myStruct.right = this.value; };
}

// Regardless setting 'left' or 'right', we always call 'set'. 
// The argument of 'set' knows which fild to set.

void function main() {    
    const s = new MyStruct();
    s.set(new LeftVisitor(3));
    s.set(new RightVisitor(4));
    console.log(JSON.stringify(s));
}(); 
