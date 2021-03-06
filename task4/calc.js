btn.addEventListener("click", f_out);

  function f_out (){
      q = (Number(income.value) - Number(expenses.value)) * (1-Number(fee.value));
      result.innerHTML = q;
         
  }
