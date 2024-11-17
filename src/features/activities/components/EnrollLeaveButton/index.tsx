import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Button } from '@nextui-org/react';

import { CustomerActivity } from '../CustomerDashboard/types';
import useRequest from '@hooks/useRequest';

type EnrollLeaveButtonProps = {
    enrolled: boolean;
    row: CustomerActivity;
    onSuccessfulRequest: () => void;
};

const EnrollLeaveButton = ({ enrolled, row, onSuccessfulRequest }: EnrollLeaveButtonProps) => {
    const { t } = useTranslation();

    const url = `/activities/${row.id}/${enrolled ? 'leave' : 'enrollment'}`;
    const { sendRequest, loadingRequest } = useRequest(
        url,
        enrolled ? 'DELETE' : 'POST',
        true,
        undefined,
        () => {
            onSuccessfulRequest();
            toast.success(t(enrolled ? 'leaveSuccess' : 'enrollSuccess'));
        }
    );

    return (
        <Button
            color={enrolled ? 'danger' : 'success'}
            onPress={() => sendRequest()}
            fullWidth
            isLoading={loadingRequest}
        >
            {enrolled ? t('leave') : t('enroll')}
        </Button>
    );
};

export default EnrollLeaveButton;
