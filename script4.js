var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);

    var res=data.filter((ele)=>ele.region==="Asia");
console.log(res);

var res1=data.filter((ele)=>ele.population<200000);
console.log(res1);


var es=data.forEach((ele)=>{
  console.log(`name:${ele.name}  capital:${ele.capital}  flag:${ele.flag} 

  `)});


const sum = data.reduce((acc, it) => {
    acc[it.population] = acc[it.population] + 1 || 1;
    return acc;
  }, {});
  console.log(sum);
 
var ree=data.map((country)=>{
  if(country.currencies){
    Object.keys(country.currencies).filter((c)=>{
      if(country.currencies[c]["symbol"]==="$"){
        console.log(country.name.official);
       
      }
    })
  }
})

}
data()



