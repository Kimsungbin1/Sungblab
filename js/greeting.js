// querySelector는 id를 찾는지, class를 찾는지 분명히 해줘야 함 ex) id는 앞에 #붙임. 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 일반적으로 string만 포함된 변수는 대문자로 표기함.
const HIDDEN_CLASSNAME = "hidden";

// 브라우저가 첫번째 function을 호출할 때 argument로 여러가지 정보들을 준다.
function onLoginsubmit(event) {
    
    // 브라우저가 기본 동작을 실행하지 못하게 막는다.
    event.preventDefault();
    
    const username = loginInput.value;
    
    // loginForm의 event가 실행될 때 hidden class 추가
    loginForm.classList.add(HIDDEN_CLASSNAME);
	
    // form이 사라지고, 그 자리에 Hello + username을 출력하고, 
    // 중복되니 hidden class 삭제
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}    

// click이 아닌 submit을 감지하기. ( 새로고침을 막기 위해서 )
loginForm.addEventListener("submit", onLoginsubmit);