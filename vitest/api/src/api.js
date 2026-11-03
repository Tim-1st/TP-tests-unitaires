const fetchNationalHolidays = async (region = "metropole") => {
    try {
        const req = await fetch(
            `https://calendrier.api.gouv.fr/jours-feries/${region}.json`
        );
        const res = await req.json();

        return res;
    } catch {
        return {};
    }
};

export { fetchNationalHolidays };

// Appel de l'API pour récupérer les utilisateurs
const fetchUsers = async () => {
    try {
        const req = await fetch("https://jsonplaceholder.typicode.com/users");
        const res = await req.json();

        return res;
    } catch {
        return [];
    }
};

export { fetchUsers };
