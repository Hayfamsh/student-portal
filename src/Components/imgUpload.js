/* eslint-disable react/prop-types */
import { useState } from "react";
// import {CloudUploadOutlinedIcon} from "@mui/icons-material";
import { UploadProps, Modal, Upload, Col, Row } from "antd";
import { InboxOutlined } from "@ant-design/icons";

import axios from "axios";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const ImgUpload = ({ setImageUrl }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = async ({ fileList: newFileList }) => {
    try {
      setFileList(newFileList);

      const formData = new FormData();
      formData.append("file", newFileList[0].originFileObj);

      await axios
        .post("https://react-file-upload-server.vercel.app/upload", formData)
        .then((res) => {
          if (res.status === 200) {
            setImageUrl(res.data.url);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const uploadButton = (
    <div>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Upload file</p>
    </div>
  );

  return (
    <div className=" ">
      <Upload
        action="https://react-file-upload-server.vercel.app/upload"
        className="text-black "
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList?.length >= 1 ? null : uploadButton}
      </Upload>
    </div>
  );
};
export default ImgUpload;
