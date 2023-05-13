
# Coz Shopping Project

코드스테이츠 SEB FE 44기 솔로 과제를 위해 구현한 프로젝트입니다.




# Stack

<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

 <img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">

 <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">

 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">

 <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">

 <img src="https://img.shields.io/badge/reduxtoolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white">

 <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">

 <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">

 <img src="https://img.shields.io/badge/swc-FFFFFF?style=for-the-badge&logo=&logoColor=white">


<br>

`yarn berry`와 `vite`을 통해 기본적인 프로젝트 환경을 구성했습니다.

SPA로 간단하게 만드는 프로젝트인만큼 `next.js`와 같은 서버사이드렌더링을 도와주는 프레임워크까지는

도입할 필요성이 적다고 생각했고 `vite`과 `yarn berry`를 이용했을 때 개발 경험이 좋아

패키지 매니저와 보일러 플레이트로 위 둘을 선택하게 되었습니다.

CRA를 통해 구축한 프로젝트의 개발 서버를 띄우는 경우 제 환경에서 평균적으로 1000ms ~ 3000ms 정도의 시간이 소요된 데 반하여

`vite`을 통해 구축한 프로젝트의 경우에는 개발 서버를 띄우는 데 평균적으로 400ms~800ms 정도의 시간이 소요되었습니다.

따라서 자연스럽게 생산성이 향상되는 결과를 얻을 수 있었습니다.



<br>

CSS 프레임워크로는 `tailwindcss`를 채택했습니다. 

`tailwindcss`를 사용할 때의 개발 경험이 좋았으며 빠르게 css를 적용해보고 고칠 수 있다는 점에서 개발 속도가 향상될 수 있었습니다.

유지보수가 힘들고 클래스명이 너무 길어질 수 있다는 문제점은

`tailwindcss`가 제공하는 `@layer` 기능을 통해 자주 사용하면서 클래스명이 길거나 여러개의 클래스가 같이 조합되는 경우에 대한 커스텀 클래스를 만들어 사용하는 것과 `prettier-plugin-tailwindcss`를 통해 클래스의 순서를 항상 일치시키게 하는 것으로 해결하고자 했습니다.


<br>

상태 관리의 경우 `ReduxToolkit`을 채택했습니다.

API를 통해 데이터를 받아오게 되는데 이러한 상태를 관리하는 것에 매력적인 플랜은 `ReactQuery`와 `ReduxToolkitQuery` 정도였습니다.

다만 전 다크모드 구현을 고려하고 있었으므로 `React Query`를 채택할 시 `ContextAPI` 혹은 그 외 전역 상태 관리 라이브러리를 이용하거나 Props 내려주기를 통해 구현을 해야 했습니다.

따라서 모든 기능을 한번에 제공해주는 `ReduxToolkit`이 매력적인 선택지였습니다.



<br>

# 배포 링크

|

# 구조

`public` : favicon이 담긴 폴더입니다.

`assets` : 정적인 이미지들을 담은 폴더입니다.

`colors` : 포인트 컬러에 대한 값을 export하는 폴더입니다.

`hooks` : 커스텀훅으로 작성된 파일들을 구분해주었습니다.

`pages` : 페이지에 대한 컴포넌트들을 모은 폴더이며 내부에서 한번 더 페이지별로 폴더를 나누어주었습니다. 

`modules` : 전역상태 및 비동기 상태에 대한 로직을 담은 폴더입니다.

`types` : 전역적으로 자주 사용되는 type들을 담은 폴더입니다.

`src / main.tsx` : 엔트리포인트입니다.

---

## Folder Structure

```
┌── .yarn
├── src
│   ├── assets@types                  		
│   ├── colors                  	
│   ├── components                   
│   │   └── dropdown
│   │   └── layouts
│   │   └── loading       
│   │   └── modal   		   		
│   │   └── productCard
│   │   └── toast     
│   ├── hooks
│   ├── icons 
│   ├── modules  
│   │   ├── index.ts
│   │   ├── modules
│   ├── pages
│   ├── types
└───└── utils
├── App.tsx
├── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```


# 기능

1. `Local Storage`를 통하여 북마크 기능이 브라우저 창을 닫아도 유지되도록 했습니다.

2. 상품 카드를 클릭하면 모달창이 띄워지도록 하였으며 이 과정에서 `React-DOM`이 제공하는 `CreatePortal`을 사용했습니다.

3. `ReduxToolkitQuery`를 이용하여 요청을 통해 받아오는 API 데이터의 캐싱을 수행했습니다.

4. Error, Loading 상태일때 보여 줄 수 있는 컴포넌트를 구성하여 예외를 처리했습니다.

5. Header영역의 햄버거 버튼을 클릭하면 보이도록하는 `dropDown`창을 구현했습니다.

6. `React-Router-DOM` 라이브러리를 통해 간단한 라우팅을 구현했습니다.

7. 아이콘, 로고 등의 처리는 figma에서 svg 태그의 형태로 export하여 사용했으며 이 과정에서 필요한 경우 기존 svg 태그의 타입을 확장하여 사용하는 식으로 커스텀했습니다.

8. `tailwindcss`를 통해 `darkmode`를 구현했습니다.

# 문제해결과정

## 😥**모달창 구현**

말풍선 꼬리를 구현하는 것 자체는 쉽게 할 수 있지만 자연스럽게 테두리, 그림자 효과를 주는 것은 CSS 지식을 꽤 요구하는 작업이었습니다.

처음에는 말풍선을 만들어주는 사이트를 이용하여 구현하고자했지만

그렇게 한 경우 커스터마이징이 힘들다는 문제가 있었습니다.

border를 이용하여 구현하는 방법을 통해 해결할 까 하다가 검색을 해보던 중

rotate 속성을 이용하여 사각형을 회전시키면 삼각형처럼 보이게 할 수 있다는 플랜을 보고

지금까지 시도해 본 적 없던 rotate 속성을 통하여 말풍선을 구현했습니다.


## 😥**API에 없는 속성이 필요**




<br>

# 궁금한 점 

1. 전역적으로 재사용되는 Type의 경우 types 폴더 내부에서 정의를 해둔 뒤 import하는 식으로 사용했습니다. 하지만 API의 타입과 같은 부분들은 한 파일 내부에서 처리해주는 편이 더 가독성이 좋다고 생각하여 한 파일에서 처리하도록 했습니다. 어떻게 작성하는 편이 더 읽기 쉬울지 궁금합니다.

2. 이번 프로젝트는 지향점이 명확했기 때문에 재사용하지 않을 것이 확정되는 컴포넌트들은 재사용성을 위해 자원을 투자하지 않고 일회성으로 사용할 수 있게 코드를 작성했습니다. 
(ex : 드롭 다운, 모달 등) 이러한 컴포넌트들을 재사용성할 수 있도록 구성하는데 드는 시간을 아끼고자 했는데 나중에 여러가지의 확장 가능성을 고려하면 처음부터 재사용 가능하게 코드를 짜는 것이 좋을 것 같다는 생각도 들었습니다. 시간이 여유가 되면 하고 시간에 제한이 있다면 일단 빠르게 짜는게 낫다고 판단했는데 현업에서는 어떻게 판단하는지 궁금합니다.

