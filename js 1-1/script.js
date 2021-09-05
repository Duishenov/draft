
let $inputs = document.querySelectorAll('input')
let $submitBtn = document.querySelector('#regButton')
let $searchBtn = document.querySelector('#searchButton')
let $content=document.querySelector('.content')
let list= ('')
let users = []
let person = {}


$submitBtn.addEventListener('click',function(){
  let person={}
  person.name = $inputs[0].value
  person.phone = $inputs[1].value
  person.mail = $inputs[2].value
  person.gender=$inputs[3]
  document.querySelector('input[type=radio]:checked').getAttribute('value')
////
  
  users.push(person)
  localStorage.setItem('list',JSON.stringify(users))

})

$searchBtn.addEventListener('click',function(){
  let disk=JSON.parse(localStorage.getItem('list'))
  $content.innerHTML=''
    let user=disk.find(item=>item.name==$inputs[5].value);
    if(user){
    $content.insertAdjacentHTML('beforeend',`<h5>ИМЯ: ${user.name}</h5><h5>Номер: ${user.phone}</h5><h5>Почта: ${user.mail}</h5>`)
    


  }else{
    disk.forEach((item,index,array)=>{
      $content.insertAdjacentHTML("beforeend",'<h5>')
    })
  }
  
})
