# virtual-keyboard

error

크롬 웹 브라우저의 콘솔창에 한글이 안뜨고 Process가 뜨는 문제 발견

더 알아보니 다른 브라우저나 다른 컴퓨터에서는 잘된다고 함

우선 Process가 나올때 와 한글이 나올때 둘다 한글로 취급하기 위해

정규식과 || 연산자로 문제를 해결했다.