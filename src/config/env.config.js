export const config = {
    place: import.meta.env.VITE_PLACE,
    google: {
        apiMaps: import.meta.env.VITE_GOOGLE_API_KEY,
        clientId: import.meta.env.VITE_GOOGLE_API_KEY,
        clientEmail: import.meta.env.VITE_GOOGLE_CLIENT_EMAIL,
        privateKey: import.meta.env.VITE_GOOGLE_PRIVATE_KEY,
        folderId: import.meta.env.VITE_FOLDER_ID_GOOGLE_DRIVE
    },
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
