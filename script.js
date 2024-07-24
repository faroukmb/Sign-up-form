document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const sumail = document.querySelector("#maili");
    const supass = document.querySelector("#passi");
    const sunum = document.querySelector("#num");
    const sunom = document.querySelector("#supnom");
    const sulnom = document.querySelector("#sp");
    const supcp = document.querySelector("#supcpass");
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const lname = document.getElementById('lname');
    const number = document.getElementById('number');
    const pass = document.getElementById('pass');
    const cpass = document.getElementById('cpass');
    const ername=document.getElementById("e1");
    const ermail=document.getElementById("e2");
    const erpass=document.getElementById("e3");
    const erlname=document.getElementById("e4");
    const ernumber=document.getElementById("e5");
    const ercpass=document.getElementById("e6");
    let isValid=false;
    if (name.value ==""){
       ername.style.display="block";
       name.style.border="2px solid red";
       name.style.backgroundColor="#ffbfbf";
       sumail.style.marginTop="-19px";
       name.addEventListener("click",()=>{
         ername.style.display="none";
         name.style.border="";
         name.style.backgroundColor="#fff";
         sumail.style.marginTop="19px";
       });
    }
    else{
        ername.style.display="none";
        name.style.border="2px solid green";
        sumail.style.marginTop="19px";
    }
    if (lname.value ==""){
        erlname.style.display="block";
        lname.style.border="2px solid red";
        lname.style.backgroundColor="#ffbfbf";
        sunum.style.marginTop="-19px";
        lname.addEventListener("click",()=>{
          erlname.style.display="none";
          lname.style.border="";
          lname.style.backgroundColor="#fff";
          sunum.style.marginTop="19px";
        });
     }
    else{
         erlname.style.display="none";
         lname.style.border="2px solid green";
         sunum.style.marginTop="19px";
     }
    if (pass.value ==""){
        erpass.style.display="block";
        pass.style.border="2px solid red";
        pass.style.backgroundColor="#ffbfbf";
        pass.addEventListener("click",()=>{
          erpass.style.display="none";
          pass.style.border="";
          pass.style.backgroundColor="#fff";
        });
     }
    else{
         erpass.style.display="none";
         pass.style.border="2px solid green";
         pass.style.backgroundColor="#fff";
     }
    if (cpass.value ==""){
        ercpass.textContent="Password confirmation required!";
        ercpass.style.display="block";
        cpass.style.border="2px solid red";
        cpass.style.backgroundColor="#ffbfbf";
        cpass.addEventListener("click",()=>{
            ercpass.style.display="none";
            cpass.style.border="";
            cpass.style.backgroundColor="#fff";
          });
    }
    else if (pass.value !== cpass.value) {
        ercpass.textContent="Passwords must match!";
        ercpass.style.display="block";
        cpass.style.border="2px solid red";
        cpass.style.backgroundColor="#ffbfbf";
        cpass.addEventListener("click",()=>{
            ercpass.style.display="none";
            cpass.style.border="";
            cpass.style.backgroundColor="#fff";
          });
        } 
    else {
        ercpass.style.display="none";
        cpass.style.border="2px solid green";
        cpass.style.backgroundColor="#fff";
      }
    let pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      if (email.value =="" || pattern.test(email.value)== false ){
        ermail.style.display="block";
        email.style.border="2px solid red";
        email.style.backgroundColor="#ffbfbf";
        supass.style.marginTop="-19px";
        email.addEventListener("click",()=>{
          ermail.style.display="none";
          email.style.border="";
          email.style.backgroundColor="#fff";
          supass.style.marginTop="19px";
        });
      }
      else {
            ermail.style.display="none";
            email.style.border="2px solid green";
            supass.style.marginTop="19px";
            
      }
    
      if (number.value ==""){
        ernumber.textContent="Phone number required!"
        ernumber.style.display="block";
        number.style.border="2px solid red";
        number.style.backgroundColor="#ffbfbf";
        supcp.style.marginTop="-19px";
        number.addEventListener("click",()=>{
          ernumber.style.display="none";
          number.style.border="";
          number.style.backgroundColor="#fff";
          supcp.style.marginTop="19px";
        });
     }
     else if( number.value.length!=8){
        ernumber.textContent="Phone number must be 8 digits!"
        ernumber.style.display="block";
        number.style.border="2px solid red";
        number.style.backgroundColor="#ffbfbf";
        supcp.style.marginTop="-19px";
        number.addEventListener("click",()=>{
          ernumber.style.display="none";
          number.style.border="";
          number.style.backgroundColor="#fff";
          supcp.style.marginTop="19px";
     });
    }
    else {
         ernumber.style.display="none";
         number.style.border="2px solid green";
         number.style.backgroundColor="#fff";
         supcp.style.marginTop="19px";
         
     }
     if ( (number.value.length==8 && number.value != "") && (email.value !=="" && pattern.test(email.value)== true) && (pass.value === cpass.value && cpass !=="") &&  pass.value !=="" &&  lname !=="" && name !=""){
        isValid=true;
     }
    
     if (isValid) {
        // Add a delay before submitting the form
        setTimeout(() => {
            this.submit();
        }, 500); // Delay in milliseconds (e.g., 2000ms = 2 seconds)
    }
});
        
