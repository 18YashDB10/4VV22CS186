import fs from 'fs';

export const addUrlToJson = (originalUrl, shortenedUrl) => {
    const filePath = './src/url.json';

    try {
        const data = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf-8')) : {};

        if (data[originalUrl]) {
            console.log('URL already exists in the JSON file.');
            return;
        }
        data[originalUrl] = shortenedUrl;

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log('URL added successfully!');
    } catch (error) {
        console.error('Error updating the JSON file:', error);
    }
};