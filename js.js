fetch('http://localhost/macrotest_server.php') . 
    then(response => response.json()) 
    .then(function(query){
        console.log(query);

        console.log(query);
        answers(n_question.value, query);
        
        

btn.addEventListener("click", f_out);    
btn1.addEventListener("click", f_out1); 
btn2.addEventListener("click", () => f_out2(query) );  
btn3.addEventListener("click", () => f_out2(query) );  

     
     
    }
);


/*query = {
  title_arr : [  "Тест по Макроэкономике","Тест по Макроэкономике"],
  question_arr : ["Совершенствование технологии сдвигает:","К интенсивным факторам относят:"],
  a1_arr : ["кривую спроса вверх и вправо","использование достижений НТП в производстве" ],
  a2_arr : ["кривую спроса вниз и вправо","увеличение количества занятых"],
  a3_arr : ["кривую предложения вниз и вправо","расширение производственных мощностей"],
  a4_arr : ["кривую предложения вверх и влево","увеличение основных фондов"],
  answer_arr : ["кривую предложения вниз и вправо","использование достижений НТП в производстве" ],  
  n_right_answer_arr : [3,1]  
}
*/

/* счётчики */

let n_answer = 2;
let right_answers = 0;

console.log(query)
answers(n_question.value); 


function f_out ()
{
    console.log(y1.checked);  
    console.log(y2.checked);
    console.log(y3.checked);
    console.log(y4.checked);

    if (y1.checked){ n_a = 1;}
    if (y2.checked){ n_a = 2;}
    if (y3.checked){ n_a = 3;}
    if (y4.checked){ n_a = 4;}
    
    console.log(n_a);

    if (n_a == n_right_answer){
      right_answers += 1;
      right_div.classList.remove("hidden");  
      wrong_div.classList.add("hidden");  
    }
    else{
      right_answers-=1;
      right_div.classList.add("hidden");
      wrong_div.classList.remove("hidden");
      wrong.classList.remove("hidden");
    }
    console.log("n_question.value = "+n_question.value);
    console.log("n_answer = "+n_answer);
    
    if (n_question.value >= n_answer)  
    {
     
      btn2.classList.add("hidden");
      btn3.classList.add("hidden");  
      let el1 = document.createElement("p");
      el1.innerHTML = "<b>"+right_answers+"</b>";
      right_div.appendChild(el1);
    } 
}



function f_out1 ()
{
      answer.classList.toggle("hidden"); 
      btn1.classList.toggle("opend");
}
  
function f_out2 (query)
{
        right_div.classList.add("hidden");
        wrong.classList.add("hidden");
        wrong_div.classList.add("hidden");  
        answer.classList.add("hidden");
        k = Number(n_question.value);
        k+=1;
        
        answers(k, query)
        
        n_right_answer = n_right_answer_arr[n_question.value];

        if (n_question.value >= n_answer)  
        {
          
          btn2.classList.add("hidden");
          btn3.classList.add("hidden");

        }
}

/* Повторяющиеся строки кода в функцию */

function answers(k, query){
  
  n_question.value = k;
  console.log(query.n_question)

  title.innerHTML= query.title_arr[n_question.value];
  question.innerHTML= query.question_arr[n_question.value];  
  

  a1.innerHTML = query.a1_arr[n_question.value];            
  a2.innerHTML = query.a2_arr[n_question.value];
  a3.innerHTML = query.a3_arr[n_question.value];
  a4.innerHTML = query.a4_arr[n_question.value];
  answer.innerHTML = query.answer_arr[n_question.value]; 
  
  n_right_answer = query.n_right_answer_arr[n_question.value];
}