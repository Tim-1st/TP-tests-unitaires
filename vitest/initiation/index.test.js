import { expect, test, it, describe } from 'vitest';
import { sum, reverseString, createUsers, isAdult, calculateTVA } from "./index";

test("adds 1 + 2 to equal 3 and 6 + 3 to equal 9", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(6, 3)).toBe(9);
});

it("should return true for an adult", () => {
    expect(isAdult(20)).toBe(true);
});

it("should return false for a minor", () => {
    expect(isAdult(15)).toBe(false);
});

// Note : "test" can be replaced by "it"
it("should return 4 elements", () => {
    const nbOfItemsToCreate = 4;
    expect(createUsers(nbOfItemsToCreate)).toHaveLength(nbOfItemsToCreate);
});

it('should return object with key "age"', () => {
    const res = createUsers(2);
    expect(res[0]).toHaveProperty("age");
});

it("should reverse a simple string", () => {
    expect(reverseString("hello")).toBe("olleh");
});

it("should calculate TVA", () => {
    expect(calculateTVA(65)).toBe(68.58);
});

describe("calculateTVA", () => {
    it("should return the price with 5.5% VAT, rounded up to 2 decimals", () => {
        expect(calculateTVA(65)).toBe(68.58);
    });
});