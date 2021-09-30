var dateofBirth=document.querySelector("#date-of-birth");
var luckyNumber=document.querySelector("#lucky-number");
var check=document.querySelector("#check-it");

const outputBox=document.querySelector("#output-box");

function calculateSum(dob)
{
    dob=dob.replaceAll("-","");
      let sum=0;
   for (let i=0;i<dob.length;i++) {
    sum = sum + Number(dob.charAt(i));}
   console.log(sum);
      return sum;
};
function checkValidity()
{

   if(luckyNumber.value && dateofBirth.value)
{
      if(luckyNumber.value>0){
        checkBirthDateIsLucky();}
      else
        {outputBox.innerText=("Enter positive lucky number please");}
      
   }
   else{
       outputBox.innerText=("please Input both fields");
        }
}
function checkBirthDateIsLucky()
{
      var dob=dateofBirth.value;
       var numberToCheck=luckyNumber.value;
      const sum=calculateSum(dob);
      if(sum%numberToCheck==0)
     {
      outputBox.innerText=("your birthday is  lucky");
   }
   else
   {
        outputBox.innerText=("your birthday is not lucky");
   }
 };
check.addEventListener("click",checkValidity)