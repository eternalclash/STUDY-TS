//함수의 파라미터에 타입을 정의하는 방식
function sum (a : number,b : number)
{
    return a +b;
}
sum(10,20)

//함수의 반환 값에 타입을 정의하는 방식
function add() : number {
    return 10;
}

//함수의 옵셔널 파라미터
function log(a:string , b?:string)
{

}
//옵셔널 파라미터를 통해 파라미터의 개수를 조절할 수 있음