const toggleBtn = document.querySelector('.navbar__toogleBtn');
// html안에 있는 class 노드들 중 navbar_toogleBtn클래스를 가진 걸 찾아 연결해줌

const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    //마우스를 클릭했을 때 메뉴와 아이콘의 클래스가 
    //active가 없다면 추가있다면 다시 빼줌
    
})
//클릭이될때마다 지정하고 있는 함수를 호출


