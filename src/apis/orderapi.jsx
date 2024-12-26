import axios from "axios";
import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";

// 카페 정보 조회
export const getCafe = async (data, fn) => {
  try {
    const res = await axios.get(`/api/cafe?cafe_id=${data}`);
    const resultData = res.data.resultData;
    console.log("카페정보 조회", resultData);
    if (resultData) {
      fn(resultData);
      console.log("데이터 있음");
    }
  } catch (error) {
    console.log("카페정보 조회:", error);
  }
};

export const getCafeMenu = async data => {
  try {
    const res = await axios.get(`/api/menu?cafeId=${data}`);
    console.log("getCafeMenu res:", res.data);
    const resultData = res.data.resultData;
    return resultData;
  } catch (error) {
    console.log(error);
  }
};

export const getMenuOption = async data => {
  try {
    const res = await axios.get(`/api/cafe/menu/option?menu_id=${data}`);
    console.log("getMenuOption res:", res.data);
  } catch (error) {
    console.log(error);
  }
};

export const postOrder = async data => {
  try {
    const res = await axios.post(`백엔드주소`, data);
    console.log("postOrder res:", res.data);
    const result = res.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};
