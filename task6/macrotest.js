btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);

let title_arr = ["Тест по Макроэкономике","Тест по Макроэкономике"];
let question_arr = ["Совершенствование технологии сдвигает:","К интенсивным факторам относят:"];
let a1_arr = ["кривую спроса вверх и вправо","использование достижений НТП в производстве"];
let a2_arr = ["кривую спроса вниз и вправо","увеличение количества занятых"];
let a3_arr = ["кривую предложения вниз и вправо","расширение производственных мощностей"];
let a4_arr = ["кривую предложения вверх и влево","увеличение основных фондов"];
let answer_arr = ["кривую предложения вниз и вправо","использование достижений НТП в производстве"];
let n_right_answer_arr=[3,1];
/* enter data into arrays */
title.innerHTML=title_arr[n_question.value];
question.innerHTML=question_arr[n_question.value];
a1.innerHTML = a1_arr[n_question.value];
a2.innerHTML = a2_arr[n_question.value];
a3.innerHTML = a3_arr[n_question.value];
a4.innerHTML = a4_arr[n_question.value];
answer.innerHTML = answer_arr[n_question.value];

n_right_answer = n_right_answer_arr[n_question.value];     
console.log(n_question.value);


  function f_out (){
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
      right.classList.remove("hidden");
      wrong_div.classList.add("hidden");
    }else{
      right.classList.add("hidden");
      wrong_div.classList.remove("hidden");
    }
  }


  function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
  }

  function f_out2 (){
    right.classList.add("hidden"); /**???? */
    k = Number(n_question.value);
    k+=1;
    n_question.value = k; /** jump to the next question */
    console.log(n_question)
    title.innerHTML=title_arr[n_question.value];
    question.innerHTML=question_arr[n_question.value];
    a1.innerHTML = a1_arr[n_question.value];
    a2.innerHTML = a2_arr[n_question.value];
    a3.innerHTML = a3_arr[n_question.value];
    a4.innerHTML = a4_arr[n_question.value];
    answer.innerHTML = answer_arr[n_question.value];
    
    n_right_answer = n_right_answer_arr[n_question.value];
  }
