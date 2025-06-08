
    const form=document.querySelector("form")
    form.addEventListener("submit",function(e){
      e.preventDefault()
      const height=parseFloat(document.querySelector("#height").value);
      const weight=parseFloat(document.querySelector("#weight").value);
      const result=document.querySelector("#result");
      const bmi=weight/(height*height);
      if(height==='' && height>=0 && isNaN(height)){
        result.innerHTML=`please give a valid height ${height}`
      }
      if(weight==='' && weight>=0 && isNaN(weight)){
        result.innerHTML=`please give a valid weight ${weight}`
      }
      else{
        result.innerHTML=`your body bmi is ${bmi} kilogram per meter square`
      }
      
    })