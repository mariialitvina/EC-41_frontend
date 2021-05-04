fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(response => response.json())
    .then(function (comm) {
            console.log(comm);
            console.log(comm[0]);
            console.log(comm[0].ccy);
            console.log(comm[0].buy);
            cur1.innerHTML = comm[0].ccy + " / " + comm[0].base_ccy;
            cur1buy.innerHTML = comm[0].buy;
            cur1sale.innerHTML = comm[0].sale;
            cur2.innerHTML = comm[1].ccy + " / " + comm[1].base_ccy;
            cur2buy.innerHTML = comm[1].buy;
            cur2sale.innerHTML = comm[1].sale;
            cur3.innerHTML = comm[2].ccy + " / " + comm[2].base_ccy;
            cur3buy.innerHTML = comm[2].buy;
            cur3sale.innerHTML = comm[2].sale;
            cur4.innerHTML = comm[3].ccy + " / " + comm[3].base_ccy;
            cur4buy.innerHTML = comm[3].buy;
            cur4sale.innerHTML = comm[3].sale;

            btn.addEventListener("click", f_out);

            function f_out() {
                q = comm[0].buy * Number(a.value);
                res.innerHTML = q;
            }

            btn1.addEventListener("click", f_out1);

            function f_out1() {
                z = Number(b.value) / comm[0].sale;
                res1.innerHTML = z.toFixed(4);
            }

            btn2.addEventListener("click", f_out2);

            function f_out2() {
                p = comm[1].buy * Number(c.value);
                res2.innerHTML = p;
            }

            btn3.addEventListener("click", f_out3);

            function f_out3() {
                m = Number(d.value) / comm[1].sale;
                res3.innerHTML = m.toFixed(4);
            }

            btn4.addEventListener("click", f_out4);

            function f_out4() {
                t = comm[2].buy * Number(e.value);
                res4.innerHTML = t.toFixed(4);
            }

            btn5.addEventListener("click", f_out5);

            function f_out5() {
                x = Number(f.value) / comm[2].sale;
                res5.innerHTML = x.toFixed(4);
            }

            btn6.addEventListener("click", f_out6);

            function f_out6() {
                o = comm[3].buy * Number(j.value);
                res6.innerHTML = o.toFixed(4);
            }

            btn7.addEventListener("click", f_out7);

            function f_out7() {
                g = Number(k.value) / comm[3].sale;
                res7.innerHTML = g.toFixed(6);
            }
        }
    );

fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then(response => response.json())
    .then(function (comm1) {
            console.log(comm1);
            console.log(comm1[0]);
            console.log(comm1[0].ccy);
            console.log(comm1[0].buy);
            cura1.innerHTML = comm1[0].ccy + " / " + comm1[0].base_ccy;
            cura1buy.innerHTML = comm1[0].buy;
            cura1sale.innerHTML = comm1[0].sale;
            cura2.innerHTML = comm1[1].ccy + " / " + comm1[1].base_ccy;
            cura2buy.innerHTML = comm1[1].buy;
            cura2sale.innerHTML = comm1[1].sale;
            cura3.innerHTML = comm1[2].ccy + " / " + comm1[2].base_ccy;
            cura3buy.innerHTML = comm1[2].buy;
            cura3sale.innerHTML = comm1[2].sale;
            cura4.innerHTML = comm1[3].ccy + " / " + comm1[3].base_ccy;
            cura4buy.innerHTML = comm1[3].buy;
            cura4sale.innerHTML = comm1[3].sale;
        }
    );