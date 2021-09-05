// let number1 = 5  ///integer //Int
// let number2 = 3.5  ////float
// let user='TALGAT' ///string
// let obj ={} ///object
// let boolean=true //boolean


// let a=6
// let b=8
// console.log(a+b)

// let x=1
// // x--
// // x++
// // x-=1
// // x=x-1
// console.log(x)
// alert("Hello")
// let user
// user = prompt('ВВедите ваше имя')
// // console.log(user)
// let control=confirm('Есть ли вам 18 лет')

// console.log(control)
// let a=14
// let c='10'
// let b=9
// //<
// //>
// //=
// //<=
// //>=
// //==
// ///===
// //!=
// if(10<9){
//     //Ваш код//
//     console.log('yes')

// }else{
//     console.log('no')
// // }
// let a=6
// let b=5
// let x=1
// let y=3
// let t=15
// let r=8
// const nomer=6
// if(a>b){
//     console.log('1')}else{
//         console.log('2')
//     }
// console.log('3')
// console.log(++x+y)
// console.log(t-r,t-nomer)

// for (let i=0;i<10;i++){
//     console.log('hello'+i)
// }
// for (let i=0;i<10;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }
// let arbuz=2
// if(arbuz>2){

// if(arbuz%2==0){
//     console.log('Yes')
// }else{
//     console.log('No')
// }
// }else{
//     console.log('No')
// }
// let carColor=prompt('Цвет машины')

// if(carColor=='blue'){
//     console.log('Авто синего цвета')
// }else if(carColor=='red'){
//     console.log('Авто красного цвета')
// }else{
//     console.log('Не знаю какой цвет')
// }
// switch(carColor){
//     case 'blue':
//         console.log('Авто синего цвета')
//         break
//     case 'red':
//         console.log('Авто красного цвета')
//         break
//     default:
//         console.log('Не знаю какой цвет')    
// }
// function getEven(){
//     for(let i=0; i<10;i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }

// }
// // getEven()
// function sum(a,b){
//     console.log(a+b)
// }
// let a=prompt('Введите первое число')
// let b=prompt('Введите второе число')
// sum(Number(a),Number(b))
// sum(10,4)
//sum(25,10)
// let c=7
// let g=String(c)
// let h=Number




// function sum(a,b){
//     console.log(a**b)
    
        
// }
// let a=prompt('Введите первое число')
// let b=prompt('Введите второе число')
// sum(Number(a),Number(b))
// let a=prompt('Введите слово')

// if(a.length>=10){
//     console.log(a[0]+(a.length-2)+a[a.length-1])
// }else{
//     console.log(a)
// }
// a[a.length-1]
// let n=prompt('Введите количество участников')
// let k=prompt('Введите к-ое место')
// let arr=[]
// n=Number (n)
// k=Number(k)
// for(let i=0;i<n;i++){
//     let m=prompt(`Введите баллы участника: ${i+1}`)
//     arr[i]=Number(m)
// }
// let ch=0
// for(let i=0;i<n;i++){
//     if(arr[i]>=arr[k] && arr[i]>0){
//         ch++
//     }
// }
// console.log(ch)
// let arr=['Apple','Car','Disk','Computer','Lemon']
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.push('Jasya')
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.unshift('Jasyamasya')
// console.log(arr)

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// console.log('/////////')
// for(user of arr){
//     console.log(user)
// }
// console.log('/////////')
// for (key in arr){
//     console.log(arr[key])
// }
// let arr1=[1,2,3,4,5,6,7,8,9]
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//   console.log(arr1[5])
// //   console.log(matrix[1][2])

// let matrix=[
//     [1, 1, 0],
//     [1, 1, 1],
//     [1, 0, 0]
// ];
// let ch=0
// let s=0
// let n=3
// for (let i=0;i<n;i++){
//     s=0
//     for(let j=0;j<n;j++){
//     s+=matrix[i][j]
//     }
//     if(s>=2){
//         ch++
//     }

// }
// console.log(ch)

// let matrix=[
//     [1, 0, 0],
//     [0, 1, 1],
// ];
// let ch=0
// let s=0
// let n=2
// for (let i=0;i<n;i++){
//     s=0
//     for(let j=0;j<3;j++){
//     for(let j=0;j<3;j++){
//     s+=matrix[i][j]
//     }
//     if(s>=2){
//         ch++
//     }

// }
// console.log(ch)


// let n=prompt('Высота')
// let m=prompt('Ширина')
// let a=prompt('Размер плитки')
// let x=m/a
// let y=n/a
// for (let i=0;i<a;i++){
//     if (m%a==0){
//         ++x;
//     }
//     if (n%a!=0){
//         ++y
//     }
// }
// console.log(x/y)


// let data = prompt('Введите данные через пробел').split(' ')
// console.log(data[0],data[1],data[2])
// let s = (Number(data[1])+Number(data[2])-1)/ Number(data[2])
// let w = (Number(data[0])+Number(data[2])-1)/ Number(data[2])
// console.log(Math.floor(s)*Math.floor(w))


// let a = Number(prompt('Введите количество строк'))
// let x = 0
// for (let i=0;i<a;i++){
//     let s = prompt('Введите операцию')
//     // if(s == 'x++' || s== '++x'){
//     //     x++
//     // }else{
//     //     x--
//     // }
//     if(s[1]=='+'){
//         x++
//     }else{
//         x--
//     }
// }
// console.log(x)


// let n = prompt('input')
// let a = 1
// let b = 0
// let c = 0
// let d = 0
// for (let i = 0;i<n.length;i++){
//     if(n[i]==='A'){
//         [a,b]=[b,a]
//     }else if(n[i] === 'B'){
//         [c,b] = [b,c]
//     }else{
//         [a,c]=[c,a]
//     }
// }
// if(a==1 && b==0 && c==0){
//     console.log('1')
// }else if(a == 0 && b==1 && c==0){
//     console.log('2')
// }else{
//     console.log('3')
// }


// let a = Number(prompt())
// let i = 2
// let fib1 = 1
// let fib2 = 1
// let fib = 0
// if (a > 2){
// while(i<a){ 
//    fib = fib1 + fib2
//    fib1 = fib2
//    fib2 = fib
//    I++
// }
// console.log(fib)
// }else{
//     console.log(1)
// }


// let a = Number(prompt('in'))
// let b = ''
// let y = 0
// while (y!=1){
//     a+=1
//     b+=a
//     if(b[0]!=b[1] && b[0]!=b[2]&& b[0]!=b[3]&& b[1]!=b[2]&& b[1]!=b[3]&& b[2]!=b[3]){
//         y=1
//     }
// }
// console.log(a)



// // let h1=document.getElementsByClassName('h1')
// let body=document.querySelector('#h')
// let title=document.querySelector('h1')
// // body.style.backgroundColor='blue'
// // title.style.color='red'
// let but=document.querySelector('.button')

// but.addEventListener('click',clickButton)

// function clickButton({
//     title.style.color='red'
//     body.style.backgroundColor='blue'
// })



// let title=document.querySelector('div')
// let color=['Yellow','Green','Blue','Brown','Purple','red','Orange','Pink','gray','black','white']
// let get=0
// let input=document.querySelector('input')
// let box=document.querySelector('#ramka')
// let link=document.querySelector('a')
// let img=document.querySelector('img')
// let button=document.querySelector('#button')
// let dog=document.querySelector('#dog')
// let cow=document.querySelector('cow')
// let box=document.querySelector('#box')
// let imgcat=document.createElement('src')
// imgcat.src='cat.jpg'


// // title.style.height='300px'
// // title.style.width='70%'
// // title.style.margin='0 auto'
// // let but1 = document.querySelector('#button1')
// // but.addEventListener('click', clickbutton)
// // function clickbutton() {
// //     title.style.backgroundColor=color[++get%color.length]
// // }

// // let h1=document.querySelector('h1')

// button.addEventListener('click',function(){
//     // imgcat.style.backgroundImage=url(cat.jpg)
//     // img.setAttribute('src','cat.jpg')
//     box.innerHTML='imgcat'
// //  console.log(.getAttribute('href'))
//     // img1.setAttribute('img','url(cat.jpg)')
// //  h1.innerHTML='from js'
// }
// )
// dog.addEventListener('click',function(){
//     img.setAttribute('src','dog.jpg')
// })
// cow.addEventListener('click',function(){
//     img.setAttribute('src','cow.jpg')
// })
///////
// let BRight=document.querySelector('.right')
// let slider=document.querySelector('img')
// let BLeft=document.querySelector('.left')
// let left=0
// let right=0

// BLeft.addEventListener('click',function(){
//     let polosa=document.querySelector('#polosa');
//     left=left-150;
//     if(left<-600){
//         left=0
//     }
//     polosa.style.left=left+'px';
// })
// BRight.addEventListener('click',function(){
//     let polosa=document.querySelector('#polosa');
//     right=right+150
//     if(right>0){
//         right=-600
//     }
//     polosa.style.right=right+'px'
// })



// let sum1=document.querySelector('.sum1')
// let sum2=document.querySelector('.sum2')
// let result=document.querySelector('.result')
// let button=document.querySelector('button')

// button.addEventListener('click',function(){
//     result.textContent=Number(sum1.value)+Number(sum2.value)
// })


// let min1=document.querySelector('.min1')
// let min2=document.querySelector('.min2')

// button.addEventListener('click',function(){
//     result.textContent=Number(min1.value)-Number(min2.value)
// })

// let min1=document.querySelector('.umn1')
// let min2=document.querySelector('.umn2')

// button.addEventListener('click',function(){
//     result.textContent=Number(umn1.value)*Number(umn2.value)
// })



// let min1=document.querySelector('.del1')
// let min2=document.querySelector('.del2')

// button.addEventListener('click',function(){
//     result.textContent=Number(umn1.value)/Number(umn2.value)
// })

// let $input1=document.querySelector('.input1')
// let $input2=document.querySelector('.input2')
// let $button=document.querySelector('button')
// let $spisok=document.querySelector('.spisok')
// let $snopka=document.querySelector('.sknopka')
// let $korobka={}
// let users=[]



// $button.addEventListener('click',function(event){
//     let $korobka={}
//     event.preventDefault();
//     console.log($input1.value,$input2.value)
//     $korobka.name=$input1.value
//     $korobka.phone=$input2.value
//     users.push($korobka)
    
    
    
    
    

// })

// $snopka.addEventListener('click',function(){
//     $spisok.innerHTML=''
//     for(let i=0;i<users.length;i++){
        
//     $spisok.insertAdjacentHTML('beforeend',`<tr><td>${users[i].name}</td><td>${users[i].phone}</td></tr><br>`)
//     }

// })

// Фронт енд 3, [26.05.21 17:16]
// let person = {
//   name: 'Uzar',
//   height: 160,
//   weight: 60,
// }
// let jj = JSON.stringify(person)
// console.log(jj)
// console.log(JSON.parse(jj))

// Фронт енд 3, [26.05.21 17:19]
// let date = new Date()

// Фронт енд 3, [26.05.21 17:25]
// localStorage.setItem('name','Anuar')
// console.log(localStorage.getItem('name'))
// localStorage.removeItem('name')

// let $keys=document.querySelectorAll('.key')
// let $key_w=document.querySelector('.key_w')
// let $key_b=document.querySelector('.key_b');

// $keys.forEach(key =>{


// key.addEventListener('click',function(playNote){
//     let key=playNote.target;
//     let note=document.getElementById(key.dataset.note)
//     note.currentTime=0;
//     note.play();
// })
// })




// let $divs = document.querySelectorAll('.div')

// for (let i=0;i<$divs.length;i++){
//   $divs[i].addEventListener('click',function(event){
//     //  $divs[i].classList.add('red')
//     event.stopPropagation()
//     console.log($divs[i].getAttribute('class'))
//   })
// }


// let cat={
//   name='cew'
// }

// function Car(model,year){
//   this.name=model;
//   this.year=year
// }
// let toyota=new Car('toyota',2015)
// let heart1 = counterLikes()


// $likes[0].addEventListener('click',function(){
//     $counters[0].textContent = heart1()
// })

// let $likes = document.querySelectorAll('img')
// let $counters = document.querySelectorAll('span')

// function counterLikes(){
//   let count = 0 
//   return function(){
//     return ++count
//   }
// }
// let heart1 = counterLikes()
// $likes[0].addEventListener('click',function(){
//     $counters[0].textContent = heart1()
// })
// let heart2 = counterLikes()
// $likes[1].addEventListener('click',function(){
//     $counters[1].textContent = heart2()
// })

// for (let i=0; i<$likes.length; i++){
//       // $likes[i].addEventListener('click',function(){
//       //   $counters[i].textContent = 
        
//       // })
// }

//
// let car={
//   name: "BMW",
//   year:2015,
//   color: 'white'
// }

// let person={

//   name:'Igor'
//   age: 30
//   job: 'programmer',
// }

// function printingObj(Obj){

//   console.log(this.name)
//   console.log(this.age)

// }

// function sayHelo(Obj){
//   if(this.gender=='femal'){
//     console.log('Привет!!!')

//   }else if(this.gender=='mal'){
//     console.log('Салам Бро')

//   }
  
// }
// let person={
//   name:'igor',
//   gender:'femal'

// }


// let person1={
//   name:'igor',
//   gender:'mal'

// }
// sayHelo.call(person,this)
// sayHelo.call(person1,this)


// function getAge(){
//   return new Date().getFullYear() - this.year
// }
// let calculateAge=(obj)=>{
//   co
// }

// let person={
//   year:2000
// }


// getAge.call(person,this)

// let printingObj =()=>{
//   return('hi')
// }
// let sum=()=>'hi'


// function rec(number){
//   if(number<10){
//     console.log(++number)
//     return rec(number)
//   }
// }
// let number=0




// function rec(n){
  
//   if(n){

    
//     console.log
    
//   

  
// }
// let n=1024
// // rec(n)
// const bmw={
//   name:'BMW',
//   ['model']:'x6 sport',
//   ['year']:2019,
// }
// console.log(bmw)


// const createPost = (title,text,date = new Date().toLocaleDateString()) =>({title,text,date})
// let post = createPost('Скоро поедем отдыхать!!!','Поедем на ИссыкКуль')


// const car=()=>{
//   return{
//     name: name,
//     model: model


//   }
// }
// let ford=car('Ford','Focus')

// const createPost=(title,text,date)=>Number('25.06.2021'.slice(0,2)) - new Date().getDate()
//   return{
//     title: title,
//     text: text,
//     date: date-new Date().getDate()
//   }
// }
// let post=createPost('ИК','Поедем','25.06.2021')


// const car = (name,model) =>({name,model})
// let ford = car('Ford','Focus')

// let color = 'carColor'
// let bmw = {
//     name: 'BMW',
//     model: 'X5',
//     ['year']: 2015,
//     [color]: 'red',
    
//     write(){
//       const {name,model} = this
//       console.log(name,model)
//     }
// }


// let $form=document.querySelector('form')

// $form.addEventListener('submit',event=>{
//   let person={
//     title:$form.title.value,
//     text:$form.text.value

//   }
//   console.log(person.title,person.text)
// })



// $form.addEventListener('submit',event=>{
//   event.preventDefault()
//     let title=$form.title.value
//     let text=$form.text.value
//     printData({title,text})


  
  
// })
// function printData(data){
//   let forma={
//     title:data.title,
//     text:data.text
//   }
//   console.log(forma)
// }

// function printData(data){
//   let forma={
//     ...data
//   } 
//   console.log(forma)
// }
// function printData(...args){
//   const {title,text}=args
//     let forma2={
//       date: new Date().toLocaleDateString,
//       title,text
    
//   } 
//   console.log(forma2)
// }

// let weatherUrl='https://api.openweathermap.org/data/2.5/weather?id=1528334&lang=ru&appid=ccdac4b62f57b7e2646f5a72374decdf'
// fetch(weatherUrl)
//     .then(function(response) { return response.json()
// })
//     .then(function(data) {
//        console.log(data)
    //    let $date=new Date()
    //    alert ($date.getFullYear)
       
//     var jsonDate = new Date();
//     alert(jsonDate.getFullYear())
//     var backToDate = jsonDate;
    
    
//     console.log(backToDate);
       
//        document.querySelector('.day').innerHTML=('Погода на сегодня')
//        document.querySelector('#city').textContent='Город:'+data.name
//        document.querySelector('.degree').innerHTML='Температура:'+Math.round(data.main.temp-273)+'&deg;'
//        document.querySelector('.state').textContent=data.weather[0]['description']
// })




// fetch("https://codetogo.io/api/users.xml")
//   .then(response => response.text())
//   .then(data => {
//     const parser = new DOMParser();
//     const xml = parser.parseFromString(data, "application/xml");
//     console.log(xml);
//   })
//   .catch(console.error);


//   document.querySelector('#btn').addEventListener('click',function(){

//     let url = 'https://jsonplaceholder.typicode.com/users'
//     let imageUrl = 'https://jsonplaceholder.typicode.com/photos'
 
//     fetch(url)
//         .then(function(response){
 
//              return response.json()
//         })
//         .then(function(data){
 
//             fetch(imageUrl)
//                 .then(function(resp){
//                      return resp.json()
//                 })
//                 .then(function(dat){
//                  for(let i=0;i<10;i++){
//                      let div = document.createElement('div')
//                      div.classList.add('item')
//                      div.insertAdjacentHTML('beforeend',`<h5>Имя юзера: ${data[i].name}</h5><img src="${dat[i].thumbnailUrl}"><p>${dat[i].title}</p>`)
//                      document.querySelector('#list').insertAdjacentElement('beforeend',div)
//                  }
//             })
//         })
//  })

// for (var i = 0; i < 10; i++) {
// 	setTimeout(function() {
//     	console.log(i);
// })
const arr = [1,2,3], arr2 = [7,8,9], arr3 = [4,5,6];

console.log(`arr4=[${arr[0]+','+arr[1]+','+arr[2]+','+arr3[0]+','+arr3[1]+','+arr3[2]+','+arr2[0]+','+arr2[1]+','+arr2[2]}]`)
