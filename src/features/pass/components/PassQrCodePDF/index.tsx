import { Page, View, Document, Image } from '@react-pdf/renderer';
import { styles } from './styles';

type PassQrCodePdfProps = {
    qrCodeDataURL: string;
};

const PassQrCodePDF = ({ qrCodeDataURL }: PassQrCodePdfProps) => {
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

export default PassQrCodePDF;
