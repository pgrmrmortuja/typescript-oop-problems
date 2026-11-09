# Type Aliases vs Interface: Differences and Usage Guide

## Introduction

When working with TypeScript, we use type aliases and interfaces to define the structure of objects. Even though their jobs are almost the same, there are some important differences when we use them.

## Description

Interfaces are mainly used to define the shape of objects. The biggest benefit is that multiple interfaces with the same name can join or merge by themselves.

**TypeScript**

```typescript
interface User {
  name: string;
}

interface User {
  id: number;
}
```

On the other hand, you can make any kind of primitive data type or union type using type aliases. But you cannot merge them by redefining them.

**TypeScript**

```typescript
type UserRole = "admin" | "user";
```

We can easily use the extends keyword in interfaces to inherit objects. This increases code reusability a lot.

**TypeScript**

```typescript
interface Vehicle {
  brand: string;
}

interface Car extends Vehicle {
  wheels: number;
}
```

For type aliases, we have to use the intersection or and sign to inherit. This is very useful for object customization.

**TypeScript**

```typescript
type BasicInfo = { name: string };
type ContactInfo = { email: string };
type Employee = BasicInfo & ContactInfo;
```

If you need to build app data modules using object-oriented rules, it is better to choose an interface. But if you have to work with unions or tuples, using type aliases is easy.

**TypeScript**

```typescript
type Coordinates = [number, number];
```

Understanding the work type of the project is very important to choose these two tools correctly. Using the wrong concept makes it hard to maintain code.

## Conclusion

In the end, we can say that using interfaces is helpful for extending objects. But for custom types and union combinations, using type aliases is a good solution.