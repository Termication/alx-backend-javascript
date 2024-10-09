# TypeScript

This guide covers the fundamental concepts of TypeScript, including types, interfaces, classes, functions, and more advanced features like generic types and namespaces. It also provides insight into how to work with the DOM in TypeScript and the use of ambient namespaces to import external libraries.
Table of Contents

    Basic Types in TypeScript
    Interfaces, Classes, and Functions
    Working with the DOM and TypeScript
    Generic Types
    Namespaces
    Merging Declarations
    Ambient Namespaces
    Nominal Typing in TypeScript

#### Basic Types in TypeScript

TypeScript builds on JavaScript by adding static types. Here's a quick overview of the basic types in TypeScript:

    Number: let num: number = 10;
    String: let name: string = 'TypeScript';
    Boolean: let isActive: boolean = true;
    Array: let list: number[] = [1, 2, 3];
    Tuple: let tuple: [string, number] = ['Age', 30];
    Enum:

```typescript

    enum Direction {
        Up,
        Down,
        Left,
        Right,
   }
```

    Any: let anything: any = 'Could be anything';
    Void: Used in functions that do not return a value.
    Null and Undefined: They have their own types.

## Interfaces, Classes, and Functions
#### Interfaces

Interfaces define the shape of an object or a class in TypeScript:

```typescript

interface User {
    name: string;
    age: number;
    isActive: boolean;
}
```
#### Classes

Classes in TypeScript follow the ES6 class syntax with additional features like access modifiers:

```typescript

class Person implements User {
    constructor(public name: string, public age: number, public isActive: boolean) {}
}
```
## Functions

#### Functions can have typed parameters and return types:

```typescript

function greet(name: string): string {
    return `Hello, ${name}`;
}
```
#### Working with the DOM and TypeScript

TypeScript provides powerful type-checking features when interacting with the DOM. Here's an example of accessing a DOM element with proper type assertions:

```typescript

const inputElement = document.getElementById('input') as HTMLInputElement;
inputElement.value = 'Hello, World!';
```
#### Generic Types

Generics provide a way to create reusable components. A generic type can adapt to different data types while ensuring type safety.

```typescript

function identity<T>(value: T): T {
    return value;
}
```
#### Namespaces

Namespaces in TypeScript help organize code in a logical manner and prevent name collisions. They are defined using the namespace keyword:

```typescript

namespace Utils {
    export function greet(name: string): string {
        return `Hello, ${name}`;
    }
}
```
#### Merging Declarations

Declaration merging in TypeScript occurs when the compiler merges two or more separate declarations that have the same name into a single definition.

```typescript

interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}
```
#### Ambient Namespaces

Ambient namespaces are used to describe the shape of libraries that you do not have control over, such as external JavaScript files. These are often defined using declare:

```typescript

declare namespace ExternalLibrary {
    function initialize(settings: object): void;
}
```

#### Nominal Typing in TypeScript

Nominal typing ensures that different types are not mistakenly treated as compatible. Although TypeScript uses structural typing by default, nominal typing can be achieved using branding techniques:

```typescript

type UserID = string & { readonly brand: unique symbol };
function createUserID(id: string): UserID {
    return id as UserID;
}
```
