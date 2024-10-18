import { StyleSheet } from '@react-pdf/renderer';

import colors from '@/colors';

const { white } = colors;

export const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: white,
    },
    qrCodeImage: {
        height: '512px',
        width: '512px',
    },
});
