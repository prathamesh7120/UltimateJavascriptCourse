
function operator(num1,num2){

   
 
   let opr = '/';
        
    switch(opr){

        case '+':
            console.log("The addition of two numbers are: ",num1+num2);
            break;

        case '-':
            console.log("The subtraction of two numbers are: ",num1-num2);
            break;  
            
        case '*':
            console.log("The multiplication of two numbers are: ",num1*num2);
            break;    
            
        case '/':
            console.log("The division of two numbers are: ",num1/num2);
            break; 
            
        case '%':
            console.log("The remainder of two numbers are: ",num1%num2);
            break;  
              
        default:
            console.log("given input is invalid......");
                
                

    }




   }

    

operator(10,20);


// 

const sum = (p,q) =>{

    return p+q;

}


console.log(sum(9,7));
