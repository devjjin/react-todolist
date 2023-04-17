# React를 활용한 Todo list 애플리케이션
이 프로젝트는 일정관리를 위한 Todo List입니다. 
사용자는 해야 할 일과 내용을 작성하고 진행중인 목록과 완료한 목록을 확인할 수 있습니다.
프로젝트는 [링크](https://react-todolist-tawny.vercel.app/) 에서 확인하실 수 있습니다.

## 프로젝트 목적
- React를 활용한 하나의 완성된 App 구현

## 사용 기술
- Language : HTML5, CSS, JavaScript
- Framework : React
- 기타 : 리액트의 상태관리 useState 훅, 컴포넌트 간 데이터 전달을 위한 props 기술 사용

## Components

### App
Todo List 앱 전체를 관리하는 최상위 컴포넌트입니다.

### TodoHeader
Todo List 애플리케이션의 제목을 표시하는 헤더 컴포넌트입니다.

### TodoCreate
새로운 Todo를 생성하는 컴포넌트입니다. 사용자는 새로운 Todo의 제목과 내용을 입력하고, 추가 버튼을 클릭하여 TodoList에 추가할 수 있습니다.

### TodoList
진행 중인 일정과 완료된 일정 리스트를 구분하여 보여주는 컴포넌트입니다.

### TodoItem
하나의 Todo의 제목과 내용을 나타내며, 사용자는 진행 중인 일정을 삭제하기 버튼을 통해 상태를 변경할 수 있습니다.
- 삭제하기 버튼 클릭 시 Todo 삭제
- 완료 버튼 클릭 시 Todo를 완료 상태로 변경하고, 완료된 일정 리스트로 이동
- 취소 버튼 클릭 시 완료된 Todo를 진행 중인 일정 리스트로 이동

