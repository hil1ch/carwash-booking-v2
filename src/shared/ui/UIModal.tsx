import { Modal } from "antd";
import type { FC, ReactNode } from "react";
import { UIButton } from "./UIButton";
import classNames from "classnames";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen?: (isModalOpen: boolean) => void;
  title?: ReactNode;
  children?: ReactNode;
  description?: ReactNode;
  okText?: ReactNode;
  handleOk?: () => void;
  isError?: boolean;
  danger?: boolean;
  errorMessage?: ReactNode;
  centered?: boolean;
  okButtonClassName?: string;
  footer?: ReactNode;
  hideDefaultFooter?: boolean;
  zIndex?: number;
  confirmLoading?: boolean;
  cancelText?: ReactNode;
  width?: number;
}

export const UIModal: FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  title,
  children,
  description,
  confirmLoading,
  okText,
  handleOk,
  isError,
  danger = false,
  errorMessage = "Ошибка!",
  centered,
  okButtonClassName,
  footer,
  hideDefaultFooter = false,
  zIndex = 1010,
  cancelText,
  width
}) => {
  const defaultFooter = hideDefaultFooter ? null : (
    <UIButton
      type="primary"
      onClick={handleOk}
      loading={confirmLoading}
      danger={danger}
      className={classNames("mx-auto", okButtonClassName)}
    >
      {okText}
    </UIButton>
  );

  return (
    <Modal
      confirmLoading={confirmLoading}
      title={
        <h2 className="text-center mb-2 text-lg sm:text-xl md:text-2xl dark:text-white">
          {title}
        </h2>
      }
      open={isModalOpen}
      onCancel={() => setIsModalOpen?.(false)}
      zIndex={zIndex}
      footer={footer ?? defaultFooter}
      centered={centered}
      cancelText={cancelText}
      width={width}
    >
      {children}
      {description && <span className="text-center block">{description}</span>}
      {isError && (
        <>
          <br />
          <span className="text-danger">{errorMessage}</span>
        </>
      )}
    </Modal>
  );
};