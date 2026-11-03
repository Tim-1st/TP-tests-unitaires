import { fetchNationalHolidays, fetchUsers } from "./api.js";

const getNationalHolidays = async (region = "metropole") => {
    // Documentation : https://api.gouv.fr/documentation/jours-feries
    const listNationalHolidays = await fetchNationalHolidays(region);

    const res = [];
    let nextDate = null;
    for (const [key, value] of Object.entries(listNationalHolidays)) {
        nextDate = new Date(key);

        res.push({
            date: nextDate.toLocaleDateString("fr"),
            name: value,
        });
    }

    return res;
};

// Fonction pour récupérer la liste des utilisateurs avec uniquement le nom et l'email
const getUsers = async () => {
    const listUsers = await fetchUsers();
    const res = [];

    for (const user of listUsers) {
        res.push({
            name: user.name,
            email: user.email,
        });
    }

    return res;
};

export { getNationalHolidays, getUsers };
