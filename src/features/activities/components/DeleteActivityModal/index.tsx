import { Key } from 'react';

import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

import useRequest from '@hooks/useRequest';

type DeleteActivityModalProps = {
    activityId?: Key;
    onClose: () => void;
    onDeleted?: () => void;
    isOpen: boolean;
};

const DeleteActivityModal = ({
    activityId,
    onClose,
    onDeleted,
    isOpen,
}: DeleteActivityModalProps) => {
    const { t } = useTranslation();

    const { sendRequest, loadingRequest } = useRequest(
        `/activities/${activityId}`,
        'DELETE',
        true,
        undefined,
        () => {
            toast.success(t('deleteActivityModal.success'));
            onDeleted?.();
            onClose();
        }
    );

    return (
        <Modal placement="center" onClose={onClose} isOpen={isOpen}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            {t('deleteActivityModal.header')}
                        </ModalHeader>
                        <ModalBody>{t('deleteActivityModal.body')}</ModalBody>
                        <ModalFooter>
                            <Button color="default" onPress={onClose} isDisabled={loadingRequest}>
                                {t('cancel')}
                            </Button>
                            <Button
                                color="danger"
                                onPress={async () => await sendRequest()}
                                isLoading={loadingRequest}
                            >
                                {t('delete')}
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default DeleteActivityModal;
