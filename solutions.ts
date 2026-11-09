function multiplyValue(value: number, multiplier?: number): number {
  const finalMultiplier = multiplier !== undefined ? multiplier : 2;
  return value * finalMultiplier;
}


function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input === true ? "Active" : "Inactive";
  }
}


function formatCoordinate(coordinate: readonly [number, number, string]): string {
  const [latitude, longitude, locationName] = coordinate;
return `Location: ${locationName} (${latitude}, ${longitude})`;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((accumulator: T[], currentArray: T[]) => {
    return [...accumulator, ...currentArray];
  }, []);
}


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const popularList = courses.filter((course) => {
    return course.isPublished === true && course.students >= minStudents;
  });
  
  return popularList;
}


function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const extractedValues: T[K][] = items.map((singleItem: T) => {
    return singleItem[key];
  });

  return extractedValues;
}


class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return "Employee: " + this.name + ", Base Salary: " + this.baseSalary;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return "Manager of " + this.department + ": " + this.name;
  }
}


function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}