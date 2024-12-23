# CA2SA

## 1. 아이데이션 (주제선정)

## 2. 린캔버스로 아이템의 장단점을 분석해보자.

## 3. 요구사항문서(PRD)를 작성해보자.

## 4. IA (Sitemap) / ERD

## 5. UI Flow /

## 6. UI UX 글꼴, 주색상, 보조색상 등...

## 7. 일정관리

## 8. 테스트

## 9. MVP

## 10. 향후 진행할 작업에 대한 내용

## 11. 시연 및 발표

## 12. 팀 자체 피드백 발표

## 13. 멘토 피드백

## 14. 브랜치 전략

```
main: 메인 서버 확인용
develop : 메인에 들어가기 전 서브 확인용
feature : 추가 기능 개발 확인용.
release : develop 을 release 로 옮긴 후 테스트를 진행용
hotfix : 버그를 수정용
```

## 15. 폴더 구조

```
Project-CA2SA
├─ .prettierrc
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ images
│     ├─ main_visual_image-0.png
│     ├─ main_visual_image-1.png
│     ├─ main_visual_image-2.png
│     ├─ main_visual_image-3.png
│     ├─ main_visual_image-4.png
│     ├─ main_visual_image-5.png
│     ├─ main_visual_image-6.png
│     └─ main_visual_image-7.png
├─ README.md
├─ src
│  ├─ apis
│  │  └─ order.jsx
│  ├─ App.css
│  ├─ App.jsx
│  ├─ components
│  │  ├─ DockBar.jsx
│  │  ├─ Header.jsx
│  │  ├─ main
│  │  │  └─ ListBox.jsx
│  │  └─ order
│  │     └─ Menu.jsx
│  ├─ constants
│  ├─ contexts
│  │  ├─ LoginContext.jsx
│  │  └─ OrderContext.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ ceoadmin
│  │  │  ├─ AdminPage.jsx
│  │  │  ├─ Dashboard.jsx
│  │  │  ├─ Login
│  │  │  │  ├─ LoginPage.jsx
│  │  │  │  └─ ResetPassword.jsx
│  │  │  ├─ menu
│  │  │  │  ├─ Menu.jsx
│  │  │  │  ├─ MenuEdit.jsx
│  │  │  │  └─ Options.jsx
│  │  │  ├─ orders
│  │  │  │  ├─ LiveOrders.jsx
│  │  │  │  ├─ OrderDetail.jsx
│  │  │  │  └─ Orders.jsx
│  │  │  ├─ reports
│  │  │  │  ├─ ReportDetail.jsx
│  │  │  │  └─ Reports.jsx
│  │  │  └─ store
│  │  │     ├─ Hours.jsx
│  │  │     ├─ StoreInfo.jsx
│  │  │     └─ Stores.jsx
│  │  ├─ HomePage.jsx
│  │  ├─ join
│  │  │  ├─ ConfirmForm.jsx
│  │  │  ├─ JoinPage.jsx
│  │  │  └─ SignUpPage.jsx
│  │  ├─ login
│  │  │  ├─ LoginPage.jsx
│  │  │  └─ ResetPassword.jsx
│  │  ├─ mypage
│  │  │  └─ UserPage.jsx
│  │  ├─ NotFound.jsx
│  │  ├─ order
│  │  │  ├─ Confirmation.jsx
│  │  │  ├─ MenuDetail.jsx
│  │  │  ├─ MenuList.jsx
│  │  │  ├─ OedersDetails.jsx
│  │  │  ├─ OrderPage.jsx
│  │  │  └─ Payment.jsx
│  │  ├─ orders
│  │  │  ├─ OedersDetails.jsx
│  │  │  └─ OrdersPage.jsx
│  │  ├─ search
│  │  │  └─ SearchPage.jsx
│  │  └─ terms
│  │     ├─ Marketing.jsx
│  │     ├─ PaymentService.jsx
│  │     ├─ Privacy.jsx
│  │     └─ Service.jsx
│  ├─ styles
│  │  ├─ common.js
│  │  ├─ join
│  │  │  └─ joinpage.js
│  │  └─ order
│  │     └─ orderpage.js
│  └─ utils
└─ vite.config.js

```
