# Custom Python Class Guide

This guide explains how to define a class, add methods (including static methods), extend a class from another, and introduces the concept of metaprogramming with symbols.
Table of Contents

    Defining a Class
    Adding Methods to a Class
    Static Methods
        Why Add Static Methods
        How to Add Static Methods
    Extending a Class (Inheritance)
    Metaprogramming and Symbols

## 1. Defining a Class

In Python, a class is defined using the class keyword followed by the class name. A basic class contains methods and properties that define its behavior and state.
Example:

```python

class MyClass:
    def __init__(self, value):
        self.value = value
```
#### In this example:

    MyClass is a class with a constructor method __init__.
    The __init__ method initializes an instance of the class and assigns a value to self.value.

## 2. Adding Methods to a Class

Methods in a class are functions that operate on the instance of the class. By convention, the first parameter of a method is named self, which refers to the instance of the class.
Example:

```python

class MyClass:
    def __init__(self, value):
        self.value = value

    def display_value(self):
        print(f'The value is {self.value}')
```
#### In this example:

    display_value() is an instance method that prints the value stored in the object’s value attribute.

## 3. Static Methods

A static method is a method that doesn't depend on the instance (i.e., self) or the class (cls) and works independently of the class state. It behaves like a regular function, but it belongs to the class’s namespace.
#### 3.1 Why Add Static Methods

    Utility functions: When you need a utility function that logically belongs to a class but does not need to access or modify class attributes or instances.
    Organization: Keeps your code organized, making it clear that the function is closely related to the class.

#### 3.2 How to Add Static Methods

Static methods are added using the @staticmethod decorator.
Example:

```python

class MyClass:
    @staticmethod
    def add_numbers(x, y):
        return x + y
```
##### In this example:

    add_numbers() is a static method that takes two arguments and returns their sum. It doesn't use any class or instance variables.

To call it, you don’t need an instance:

```python

result = MyClass.add_numbers(3, 5)
print(result)  # Output: 8
```
## 4. Extending a Class (Inheritance)

Inheritance allows a class (child class) to inherit attributes and methods from another class (parent class), facilitating code reuse and extending functionality.
Example:

```python

class ParentClass:
    def greet(self):
        return "Hello from Parent Class"

class ChildClass(ParentClass):
    def greet(self):
        return super().greet() + " and Child Class"
```
##### In this example:

    ParentClass has a method greet().
    ChildClass inherits from ParentClass and overrides the greet() method, adding its own behavior by using super() to call the parent class's version.

Usage:

```python

child = ChildClass()
print(child.greet())  # Output: Hello from Parent Class and Child Class
```
## 5. Metaprogramming and Symbols

Metaprogramming is the concept of writing code that manipulates other code or itself at runtime. In Python, metaprogramming can be achieved with techniques like decorators, metaclasses, and introspection. Symbols in metaprogramming refer to the use of dynamic attributes or method names.
Example - Using getattr():

```python

class MyClass:
    def __init__(self):
        self.value = 10

    def display(self):
        print("This is a display method.")
```
# Metaprogramming: accessing attributes dynamically
obj = MyClass()
method_name = "display"
getattr(obj, method_name)()  # Calls obj.display()

##### In this example:

    getattr() dynamically accesses and calls the display() method of the MyClass instance.
    This demonstrates how Python's dynamic nature can be used in metaprogramming.

Symbols refer to this kind of usage where method names or attributes are treated as dynamic entities.
Conclusion

This guide covers the basics of defining a class, adding methods, utilizing static methods, inheriting from a parent class, and metaprogramming. Understanding these concepts can help you build more organized and efficient Python code.
