import { Page, View, Document, Image } from '@react-pdf/renderer';

import { PassProps } from './types';
import { styles } from './values';

const Pass = ({ qrCodeDataURL }: PassProps) => {
    const { page, qrCodeImage } = styles;

    return (
        <Document>
            <Page size="A4" style={page}>
                <View
                    render={() =>
                        qrCodeDataURL && <Image src={qrCodeDataURL} style={qrCodeImage} />
                    }
                />
            </Page>
        </Document>
    );
};

export default Pass;
