interface Theme {
    color: {
        bc: string
        primary: string
        second: string
        gray_100: string
        gray_200: string
        gray_300: string
        gray_400: string
        gray_500: string
        gray_600: string
        gray_700: string
        gray_800: string
        gray_900: string
        white: string
        black:string
    },
    typography: {
        font: string
    }
}

export const theme: Theme = {
    color: {
        bc: '#242124',
        primary: '#BE5C3D',
        second: '#4A4436',

        gray_100: '#f1f3f5',
        gray_200: '#e9ecef',
        gray_300: '#dee2e6',
        gray_400: '#ced4da', 
        gray_500: '#adb5bd', 
        gray_600: '#868e96', 
        gray_700: '#495057', 
        gray_800: '#343a40',
        gray_900: '#212529',

        white: '#FFFFFF',
        black: '#000000'
    },
    typography: {
        font: "'Inter', sans-serif"
    }
}