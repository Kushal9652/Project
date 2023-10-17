function getdata(){
    var name=document.getElementById('name').value;
    var age=document.getElementById('age').value;
    var height=parseFloat(document.getElementById('h').value);
    var weight=parseFloat(document.getElementById('w').value);
    var h_measurement=document.getElementById('h_measurement').value;
    
    if(name && age && height && weight && h_measurement){
     var heightOnMeter=H_convertToMeter(height,h_measurement);
     var bmiRes=parseFloat(calculateBMI(weight,heightOnMeter));
     display(name,bmiRes);
    
    console.log(bmiRes);
    }
    
    else{
        alert("Please enter value");
    }
    
    }
    
    function H_convertToMeter(height,h_measurement){
        var converValue=0;
           
        if(h_measurement==='m'){
            converValue=height;
        }
        else if(h_measurement==='cm'){
            converValue=height/100;
        }
        else if(h_measurement==='f'){
            converValue=height*0.3048;
        }
        return converValue;
    }
    
    function calculateBMI(weight,heightOnMeter) {
     
        var bmiRes=weight/((heightOnMeter)*(heightOnMeter));
       return bmiRes;
    }
    
    function display(uname,bmiRes){
    
        var display='';
        if(bmiRes<16){
            display='Hi '+uname+', Your BMI value is '+bmiRes+' n and you are in Underweight (Severe thinness)';
        }
        else if(bmiRes>=16 && bmiRes<=16.9){
            display='Hi '+uname+', Your BMI value is '+bmiRes+'\n and you are in Underweight (Moderate thinness)';
        }
        else if(bmiRes>=17 && bmiRes<=18.4){
            display='Hi '+uname+', Your BMI value is '+bmiRes+' \nand you are in Underweight (Mild thinness)';
        } 
        else if( bmiRes>=18.5 && bmiRes <=24.9){
        display='Hi, '+uname+', Your BMI value is '+bmiRes+' \n and you are in Normal range';
        }
        else if( bmiRes >=25 && bmiRes<=29.9){
            display='Hi '+uname+', Your BMI value is '+bmiRes+'\n and you are in Overweight (Pre-obese)';
        }
        else if(bmiRes>=30){
            display='Hi '+uname+', Your BMI value is '+bmiRes+'\n and you are in Obese Class';
        }
        
        var displayelement=document.getElementById('display');
    
       displayelement.querySelector('h2').textContent=display;
      
        
        
    }