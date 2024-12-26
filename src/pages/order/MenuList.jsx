import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCafeInfo, getCafeMenuList } from "../../apis/order";
import Menu from "../../components/order/Menu";
import NavBar from "../../components/order/NavBar";
import { OrderContext } from "../../contexts/OrderContext";
import { SearchInput } from "../../styles/common";
import { CateButton, CateListDiv } from "../../styles/order/orderpage";
import { getCafeMenu } from "../../apis/orderapi";
import axios from "axios";

const MenuList = () => {
  const navigate = useNavigate();
  // 앞에서 보낸 navigate의 state 받아오기
  const { order } = useContext(OrderContext);
  // useState
  const [selectedCate, setSelectedCate] = useState(0);
  const [cateList, setCateList] = useState([]);
  const [cafeMenuInfo, setCafeMenuInfo] = useState({});

  // 정보 받아오기
  useEffect(() => {
    const getCafeMenu = async data => {
      try {
        const res = await axios.get(`/api/menu?cafeId=${data}`);
        const resultData = res.data.resultData;
        console.log("메뉴 리스트 조회:", resultData);
        if (resultData) {
          setCafeMenuInfo(resultData);
          const cateListArr = cafeMenuInfo?.map((item, index) => {
            return [...cateList, item.categoryName];
          });
          setCateList(cateListArr);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCafeMenu(3);
    console.log("cafeMenuInfo", cafeMenuInfo);
  }, []);

  // 메뉴 리스트에서 카테고리 정보 뽑아내기

  const handleClickCate = (item, index) => {
    setSelectedCate(index);
  };

  return (
    <div style={{ maxWidth: "640px", position: "relative", margin: "0 auto" }}>
      <NavBar path={"/"} title={"cafeName"} />
      <div
        className="header"
        style={{
          padding: "10px 20px",
          borderBottom: "5px solid var(--color-gray-100)",
        }}
      >
        <div>
          <SearchInput
            type="text"
            style={{ width: "100%", marginBottom: 10 }}
          />
        </div>
        <CateListDiv>
          {cateList.map((item, index) => {
            return (
              <CateButton
                key={index}
                type="button"
                onClick={() => {
                  handleClickCate(item, index);
                }}
                isSelected={selectedCate === index}
              >
                {item}
              </CateButton>
            );
          })}
        </CateListDiv>
      </div>
      <div className="cate-detail" style={{ padding: 20 }}>
        <h3>{cateList[selectedCate]}</h3>
        <div className="menu-list">
          {getCafeMenuList.map((item, index) => {
            return (
              <div
                key={index}
                style={{ display: "flex" }}
                onClick={() =>
                  navigate(`/order/${item.menuId}`, {
                    state: item,
                  })
                }
              >
                <Menu item={item} index={index} />
              </div>
            );
          })}
        </div>
      </div>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          height: 60,
          backgroundColor: "var(--primary-color)",
          position: "fixed",
          bottom: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          border: "transparent",
          borderRadius: 8,
        }}
        type="button"
        onClick={() => {
          navigate(
            `/order/payment?cafeName=${getCafeInfo.resultData.cafeName}`,
            { state: getCafeInfo.resultData.cafeName },
          );
        }}
      >
        <div style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
          {order.menuList.reduce((acc, curr) => {
            const totalCount = acc + curr.count;
            return totalCount;
          }, 0)}{" "}
          | 장바구니
        </div>
        <span
          style={{
            width: 15,
            height: 15,
            backgroundColor: "#fff",
            borderRadius: 10,
            color: "var(--primary-color)",
            fontSize: 12,
            fontWeight: "bold",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          {order.menuList.reduce((acc, curr) => {
            const totalCount = acc + curr.count;
            return totalCount;
          }, 0)}
        </span>
      </button>
    </div>
  );
};

export default MenuList;
