import { vi, describe, it, expect } from "vitest";

import { getNationalHolidays, getUsers } from "../src/index";
import { fetchNationalHolidays, fetchUsers } from "../src/api";

// Simulate the data expected from backend
const mockedData = {
    "2028-01-01": "1er janvier",
    "2028-04-17": "Lundi de Pâques",
    "2028-05-01": "1er mai",
    "2028-05-08": "8 mai",
    "2028-05-25": "Ascension",
    "2028-06-05": "Lundi de Pentecôte",
    "2028-07-14": "14 juillet",
};

//Fausses données API pour les utilisateurs (moke)
const mockedUsers = [
    { id: 1, name: "Alice", username: "alice", email: "alice@test.fr" },
];

vi.mock("../src/api.js", () => ({
    fetchNationalHolidays: vi.fn(() => mockedData),

    // vi.mock pour fetchUsers, renvoie les fausses données d'utilisateurs
    fetchUsers: vi.fn(() => mockedUsers),
}));

describe("List national holidays metropole", () => {
    it("returns an array", async () => {
        const res = await getNationalHolidays();
        expect(Array.isArray(res)).toBeTruthy();
    });

    it("returns an array of objects", async () => {
        const res = await getNationalHolidays();
        const listKeys = ["name", "date"];

        listKeys.forEach((keyExpected) => {
            expect(res[0]).toHaveProperty(keyExpected);
        });
    });
});

// Tests pour la fonction getUsers
describe("List users", () => {
    it("returns an array", async () => {
        const res = await getUsers();
        expect(Array.isArray(res)).toBe(true);
    });

    it("keeps only name and email", async () => {
        const res = await getUsers();
        expect(res).toEqual([{ name: "Alice", email: "alice@test.fr" }]);
    });
});