import { useContext, useEffect, useState } from 'react';

import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button, Image, Link } from '@nextui-org/react';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

import Logo from '@components/Logo';
import Pass from '@components/pdf/Pass';
import LoadingSpinner from '@components/LoadingSpinner';

import useFetch from '@hooks/useFetch';
import { AuthContext } from '@/contexts/AuthContext';
import { valueToQRCodeDataURL } from '@/utils';

import { PassBasics } from './types';

const PassContainer = () => {
    const [qrCodeDataURL, setQRCodeDataURL] = useState('');
    const {
        state: {
            user: { firstName, lastName },
        },
    } = useContext(AuthContext);

    const {
        i18n: { language },
        t,
    } = useTranslation();
    const { data, isLoading } = useFetch<PassBasics>('/member/pass-basics');

    const passName = data?.name;
    const passUuid = data?.uuid;
    const googleWalletPassToken = data?.googleWalletPassToken;

    useEffect(() => {
        if (passUuid) {
            valueToQRCodeDataURL(passUuid, 512).then((dataURL) => setQRCodeDataURL(dataURL));
        }
    }, [passUuid]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="flex flex-col items-center gap-y-16">
            <div className="flip-card h-[200px] w-full rounded-lg md:h-[250px] md:w-[512px]">
                <div className="flip-card-inner rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                    <div className="flip-card-front flex items-center justify-evenly rounded-lg bg-gradient-to-t from-primary to-secondary text-white">
                        <Image src={qrCodeDataURL} height="148px" width="148px" alt="Pass QRCode" />
                        <div>
                            <Logo size="lg" clickable={false} />
                            <div>{`${firstName} ${lastName}`}</div>
                            <div>{passName}</div>
                        </div>
                    </div>
                    <div className="flip-card-back flex items-center rounded-lg bg-gradient-to-t from-primary to-secondary">
                        <div className="flex h-12 w-full items-center justify-center bg-white font-handwriting text-3xl text-black">
                            {`${firstName} ${lastName}`}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-10 md:flex-row">
                <PDFDownloadLink
                    className="w-full md:w-fit"
                    document={<Pass qrCodeDataURL={qrCodeDataURL} />}
                    fileName={t('pass')}
                >
                    <Button
                        className="h-[55px]"
                        radius="full"
                        size="lg"
                        startContent={<BsFillFileEarmarkPdfFill size="30px" />}
                        color="danger"
                        fullWidth
                    >
                        {t('download')}
                    </Button>
                </PDFDownloadLink>

                <Link
                    className="h-[55px]"
                    href={`https://pay.google.com/gp/v/save/${googleWalletPassToken}`}
                    isExternal
                >
                    <Image src={`/images/badges/add-to-google-wallet-${language}.svg`} />
                </Link>
            </div>
        </div>
    );
};

export default PassContainer;
