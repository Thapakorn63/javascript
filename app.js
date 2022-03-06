
function myFunction() {
    
    var round = prompt("อยากทราบเกรดกี่วิชา : ")
    check(round);
}
function check(round) {
    for(var i = 1;i<=round;i++){
        let scoer = prompt("คะเเนนที่ได้"+ i)
        if(scoer>=80){
            alert("A")
            document.getElementById("result").innerHTML += "วิชาที่ "+ i + " คะเเนน : " + scoer + " = A"+"<br>";
        }
        else if(scoer>=75){
            alert("B+")
            document.getElementById("result").innerHTML += "วิชาที่ "+ i + " คะเเนน : " + scoer + " = B+"+"<br>";
        }
        else if(scoer>=70){
            alert("B") 
            document.getElementById("result").innerHTML += "วิชาที่ "+ i + " คะเเนน : " + scoer + " = B"+"<br>";
        }
        else if(scoer>=65){
            alert("C+")
            document.getElementById("result").innerHTML += "วิชาที่ "+ i + " คะเเนน : " + scoer + " = C+"+"<br>";        
        }
        else if(scoer>=60){
            alert("C")
            document.getElementById("result").innerHTML += "วิชาที่ "+ i + " คะเเนน : " + scoer + " = C"+"<br>";        
        }
        else if(scoer>=55){
            alert("D+")
            document.getElementById("result").innerHTML += "วิชาที่ "+ i + " คะเเนน : " + scoer + " = D+"+"<br>";        
        }
        else if(scoer>=50){
            alert("D")
            document.getElementById("result").innerHTML += "วิชาที่ "+ i + " คะเเนน : " + scoer + " = D"+"<br>";        
        }
        else{
            alert("F")
            document.getElementById("result").innerHTML += "วิชาที่ "+ i + " คะเเนน : " + scoer + " = F"+"<br>";        
        }
    }
}