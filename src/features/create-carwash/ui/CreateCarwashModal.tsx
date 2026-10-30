import { useState } from "react";
import { UIModal } from "../../../shared/ui/UIModal";
import { Form, Steps } from "antd";
import type { FormProps } from "antd";
import { UIButton } from "../../../shared/ui/UIButton";
import { MainInfoForm } from "./MainInfoForm";
import { ContactsForm } from "./ContactsForm";
import { PhotosForm } from "./PhotosForm";

const LAST_STEP = 2;
const STEP_FIELDS = [
  ["name", "address", "workingDays", "openingTime", "closingTime", "breaks"],
  ["phone", "email"],
  [],
];

export const CreateCarwashModal = ({
  isModalOpen,
  onClose,
  onSubmit,
}: {
  isModalOpen: boolean;
  onClose: () => void;
  onSubmit?: FormProps["onFinish"];
}) => {
  const [current, setCurrent] = useState(2);
  const [form] = Form.useForm();

  const handleClose = () => {
    form.resetFields();
    setCurrent(0);
    onClose();
  };

  const handleNext = () => {
    void form.validateFields(STEP_FIELDS[current]).then(
      () => setCurrent((step) => step + 1),
      (errorInfo) => {
        if (!errorInfo?.errorFields) {
          console.error("Не удалось проверить поля текущего шага", errorInfo);
        }
      },
    );
  };

  const handleBack = () => {
    setCurrent((step) => Math.max(step - 1, 0));
  };

  const handleAction = () => {
    if (current === LAST_STEP) {
      form.submit();
      return;
    }

    handleNext();
  };

  const footer = (
    <div className="flex w-full gap-4">
      <UIButton
        type="default"
        onClick={current === 0 ? handleClose : handleBack}
        className="w-full"
      >
        {current === 0 ? "Отмена" : "Назад"}
      </UIButton>
      <UIButton type="primary" onClick={handleAction} className="w-full">
        {current === LAST_STEP
          ? "Добавить автомойку"
          : current === 0
            ? "Продолжить"
            : "Следующий шаг"}
      </UIButton>
    </div>
  );

  return (
    <UIModal
      isModalOpen={isModalOpen}
      setIsModalOpen={(open) => {
        if (!open) handleClose();
      }}
      title="Добавить автомойку"
      footer={footer}
      width={760}
    >
      <Steps
        current={current}
        items={[
          { title: "Основная информация" },
          { title: "Контактные данные" },
          { title: "Фотографии" },
        ]}
        className="my-5!"
      />

      <Form
        form={form}
        className="flex flex-col gap-7 w-full"
        noValidate
        onFinish={onSubmit}
      >
        {current === 0 && <MainInfoForm />}
        {current === 1 && <ContactsForm />}
        {current === 2 && <PhotosForm />}
      </Form>
    </UIModal>
  );
};
