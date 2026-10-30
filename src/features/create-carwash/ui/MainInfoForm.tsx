import { AutoComplete, Form } from "antd";
import { UIInput } from "../../../shared/ui/UIInput";
import { UITextArea } from "../../../shared/ui/UITextArea";
import { WorkingDaysField } from "./WorkingDaysField";
import { WorkingHoursField } from "./WorkingHoursField";

export const MainInfoForm = () => {
  return (
    <>
      <Form.Item
        name="name"
        rules={[
          { required: true, message: "Пожалуйста, введите название автомойки" },
        ]}
        className="mb-0!"
        layout="vertical"
        label={
          <span className="text-base font-semibold">Название автомойки</span>
        }
      >
        <UIInput type="text" placeholder="Название автомойки" />
      </Form.Item>
      <Form.Item
        label={<span className="text-base font-semibold">Адрес автомойки</span>}
        rules={[
          { required: true, message: "Пожалуйста, введите адрес автомойки" },
        ]}
        name="address"
        className="w-full mb-0!"
        layout="vertical"
      >
        <AutoComplete
          //   value={address}
          //   options={suggestions}
          //   onSearch={handleAddressSearch}
          //   onSelect={handleAddressSelect}
          //   filterOption={false}
          className="w-full"
        >
          <UIInput placeholder="Начните вводить адрес..." className="w-full" />
        </AutoComplete>
      </Form.Item>
      <WorkingDaysField />
      <WorkingHoursField />
      <Form.Item
        label={
          <span className="text-base font-semibold">
            Описание{" "}
            <span className="text-gray-500 font-normal text-sm">
              (необязательно)
            </span>
          </span>
        }
        name="description"
        className="w-full"
        layout="vertical"
      >
        <UITextArea
          placeholder="Напишите особенности автомойки"
        />
      </Form.Item>
    </>
  );
};
