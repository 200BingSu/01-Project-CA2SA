import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";
import { PrimaryButton } from "../../styles/common";
import { CancleButton, ModalDiv } from "../../styles/order/BucketModal";

const DeleteMenuModal = ({ item, index, showModal, setShowModal }) => {
  const { setOrder, order } = useContext(OrderContext);
  const navigate = useNavigate();
  const handleClickButton = () => {
    setOrder(prevOrder => {
      const updatedMenu = [...prevOrder.menuList];
      if (updatedMenu[index].count > 1) {
        updatedMenu[index].count -= 1; // 수량 감소
      } else {
        setShowModal(true);
        updatedMenu.splice(index, 1);
      }
      return { ...prevOrder, menuList: updatedMenu };
    });
  };
  return (
    <ModalDiv>
      <div className="inner">
        <div className="container">
          <div className="content">
            <p className="main">
              장바구니에는 같은 가게의 메뉴만 담을 수 있습니다.
            </p>
            <p className="sub">
              선택하신 메뉴를 장바구니에 담을 경우 이전에 담은 메뉴가
              <br />
              삭제됩니다.
            </p>
          </div>
          <div className="button-box">
            <CancleButton
              type="button"
              onClick={() => {
                navigate(`/order/menu?cafeId=${order.cafeId}`);
                setShowModal(false);
              }}
            >
              취소
            </CancleButton>
            <PrimaryButton type="button" onClick={() => handleClickButton()}>
              담기
            </PrimaryButton>
          </div>
        </div>
      </div>
    </ModalDiv>
  );
};

export default DeleteMenuModal;
