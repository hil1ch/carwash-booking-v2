import { Form, Upload } from "antd";
// import type { UploadProps } from "antd";
import { Plus } from "lucide-react";

// const normalizeFileList: UploadProps["getValueFromEvent"] = (event) =>
//   event?.fileList ?? [];

export const PhotosForm = () => {
  return (
    <Form.Item
      name="photos"
      valuePropName="fileList"
      //   getValueFromEvent={normalizeFileList}
    >
      <Upload
        listType="picture-card"
        accept="image/*"
        multiple
        maxCount={10}
        beforeUpload={() => false}
      >
        <div className="flex flex-col items-center gap-2">
          <Plus size={20} />
          <span>Добавить фото</span>
        </div>
      </Upload>
    </Form.Item>
  );
};
