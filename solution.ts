function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

function getLength(value: string | unknown[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

function filterByRating(
  arr: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  arr.forEach((item) => {
    if (item.rating < 0 || item.rating > 5) {
      throw new Error("Rating must be between 0 to 5");
    }
  });
  return arr.filter((item) => item.rating >= 4);
}

function filterActiveUsers(
  users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book) {
  console.log(
    `Title: ${book?.title}, Author: ${book?.author}, Published: ${
      book?.publishedYear
    }, Available: ${book?.isAvailable ? "Yes" : "No"}`
  );
}

function getUniqueValues(arr1: number[], arr2: number[]) {
  let newArray: number[] = [];
  function isElementExists(arr: number[], value: number) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!isElementExists(newArray, arr1[i])) {
      newArray.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (!isElementExists(newArray, arr2[j])) {
      newArray.push(arr2[j]);
    }
  }
  return newArray;
}
