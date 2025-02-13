export const config = {
    apiMaps: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    place: import.meta.env.VITE_PLACE,
    bankAccount: {
        bank: import.meta.env.VITE_BANK,
        account: import.meta.env.VITE_BANK_ACCOUNT,
        alias: import.meta.env.VITE_ALIAS,
        type: import.meta.env.VITE_TYPE_ACCOUNT,
        rut: import.meta.env.VITE_RUT,
        email: import.meta.env.VITE_EMAIL_ACCOUNT
    },
    spotify: {
        clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
        clientSecret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
    },
};
