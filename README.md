# virtual-keyboard

error

크롬 웹 브라우저의 콘솔창에 한글이 안뜨고 Process가 뜨는 문제 발견

더 알아보니 다른 브라우저나 다른 컴퓨터에서는 잘된다고 함

우선 Process가 나올때 와 한글이 나올때 둘다 한글로 취급하기 위해

정규식과 || 연산자로 문제를 해결했다.

#onKeyUp(event) {
if (this.#mouseDown) return;
this.#keyPress = false;
this.#keyboardEl
.querySelector(`[data-code=${event.code}]`)
?.classList.remove("active");
}

에서 (`[data-code=${event.code}]`) 을 한 이유는

그냥 .key를 하면 쿼리셀렉터는 맨첫번째값을 반환해서
backquote만 나오기 때문이다.

그래서 나오고 난 이후에 ?문법을 사용해서
거기에 바로 active를 넣고 뺀다.
