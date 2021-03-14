 const mostrarReloj = () => {
     let fecha = new Date();
     let hr = formatoGral(fecha.getHours());
     let min = formatoGral(fecha.getMinutes());
     let seg = formatoGral(fecha.getSeconds());
     document.getElementById("hour").innerHTML =  `${hr}:${min}:${seg}`;

     const meses = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SET", "OCT", "NOV", "DIC"];
     const dias = ["DOM", "LUN", "MAR", "MIER", "JUE", "VIE", "SAB"];
    
     let diaSemana = dias[fecha.getDay()];
     let dia = fecha.getDate();
     let mes = meses[fecha.getMonth()];
     let año = fecha.getFullYear();

     let fechaTexto = `${diaSemana}, ${dia} ${mes} ${año}`
     document.getElementById("date").innerHTML = fechaTexto;

     document.getElementById("clock-container").classList.toggle("animar");
    }

 const formatoGral = (dato) =>{
     if (dato < 10)
        dato = "0" + dato;
    return dato;

 }

 setInterval(mostrarReloj, 1000);