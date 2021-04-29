function DateTime(){
  var d = new Date();
  var day=d.getDate();
  var mon=d.getMonth();
  var yr=d.getFullYear();
  
  var hr=d.getHours();
  var min=d.getMinutes();
  var sec=d.getSeconds();

  var  date="<h2>Date: "+day+"-"+mon+"-"+yr+"</h2>";
  var time="<h2>Time: "+hr+":"+min+":"+sec+"</h2>";

  return{date,time}
  
}
//console.log(DateTime())
module.exports=DateTime;