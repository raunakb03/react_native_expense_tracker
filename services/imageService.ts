import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_PRESET_NAME } from "@/constants";
import { ResponseType } from "@/types";
import axios from "axios";

const CLOUDINARY_API_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

  export const uploadFileToCloudinary = async (
    file: {uri? : string} | string,
    folderName: string
): Promise<ResponseType> => {
  try {
    if(typeof file == 'string'){
      return { success: true, data: file };
    }

    if(file && file.uri){
      const formData = new FormData();
      formData.append('file', {
        uri: file.uri,
        type: 'image/jpeg',
        name: file.uri.split('/').pop(),
      } as any);

      formData.append('upload_preset',CLOUDINARY_PRESET_NAME);
      formData.append('folder', folderName);

      const res = await axios.post(CLOUDINARY_API_URL, formData, {
        headers: {
          "Content-Type" : "multipart/form-data",
        }
      });

      return {
        success: true,
        data: res.data.secure_url,
      };
    }
    return {success: true};
  } catch (error: any) {
    console.log('error uploading file to cloudinary', error);
    return {
      success: false,
      msg: error.message,
    };
  }
}

export const getProfileImage = (file: any) => {
  if(file && typeof file == 'string') return file;
  if(file && typeof file == 'object') return file.uri;

  return require('../assets/images/defaultAvatar.png');
}
