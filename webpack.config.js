import { resolve as _resolve } from 'path';

export const entry = './src/index.js';
export const output = {
    path: _resolve('./src/App.js', 'src'),
    filename: 'App.js', // Adjust the output filename as per your requirements
};
export const resolve = {
    fallback: {
        "buffer": require.resolve("buffer/"),
    },
};

