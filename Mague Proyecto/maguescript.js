const btnCrearOrden = document.getElementById("btnCrearOrden");
const formularioContainer = document.getElementById("formularioContainer");

let contadorOrdenes = 0;

btnCrearOrden.addEventListener("click", function () {
  contadorOrdenes++;
  crearFormulario(contadorOrdenes);
});

//CREA UNA NUEVA ORDEN
function crearFormulario(contador) {

  const nuevoFormulario = document.createElement("form");
  nuevoFormulario.innerHTML = `
    <h3>Orden ${contador}</h3>
  <fieldset style="background-color: rgb(255, 219, 102);" id="formulario${contadorOrdenes}">

            <label for="tacos${contadorOrdenes}">Tacos</label>
            <select name="tacos" id="tacos${contadorOrdenes}" class="tacos">
            <option value="0"></option>
            <option value="100">Orden</option>
            <option value="98">7</option>
            <option value="84">6</option>
            <option value="70">5</option>
            <option value="55">1/2</option>
            <option value="42">3</option>
            <option value="28">2</option>
            <option value="14" >1</option>
            </select>

            <select name="guiso" id="guiso${contadorOrdenes}" class="guiso">
                <option value="0"></option>
                <option value="0">DS</option>
                <option value="0">DC</option>
                <option value="0">DP</option>
                <option value="0"></option>
                <option value="0">BS</option>
                <option value="0">BC</option>
                <option value="0">BP</option>
                <option value="0">BF</option>
            </select>

            <label for="sopes${contadorOrdenes}">Sopes</label>
            <select name="sopes" id="sopes${contadorOrdenes}">
                <option value="0"></option>
                <option value="100">4</option>
                <option value="75">3</option>
                <option value="55">2</option>
                <option value="25">1</option>
            </select>

            <label for="tostadas${contadorOrdenes}">Tostadas</label>
            <select name="tostadas" id="tostadas${contadorOrdenes}">
                <option value="0"></option>
                <option value="160">4</option>
                <option value="120">3</option>
                <option value="80">2</option>
                <option value="40">1</option>
                <option value="0"></option>
                <option value="0">-ESP-</option>
                <option value="150">3</option>
                <option value="100">2</option>
                <option value="50">1</option>
            </select>

            <label for="platano${contadorOrdenes}">Platano Frito</label>
            <select name="platano" id="platano${contadorOrdenes}">
                <option value="0"></option>
                <option value="35">1</option>
                <option value="70">2</option>
                <option value="105">3</option>
            </select>

            <label for="mesa${contadorOrdenes}">Mesa</label>
            <select name="mesa" id="mesa${contadorOrdenes}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="P/L">Para Llevar</option>
            </select>

    <div id="divAgregarOrden${contador}">
             </div>

            <br><br>
            <button type="button" id="btnAgregarOrden${contador}" class="btnAgregarOrdenStyle">Agregar Más</button> <br><br>
            <button type="button" id="etiCalcular${contador}" class="etiCalcular">Total:</button>
            <input type="text" id="etiTotal${contador}" class="etiTotalEstilo">
            <br><br>
            <button type="button" class="btnEliminarOrden">Eliminar Orden</button>
            <button type="button" class="btnFinalizarOrden">Finalizar Orden</button>

     </fieldset>
     <br> <hr>
  `;


  nuevoFormulario.classList.add('fadeIn');
  const leftColumn = document.querySelector('.right-column');
  const rightColumn = document.querySelector('.left-column');

  // SE PONDRÁ EN IZQUIERDA O EN DERECHA?
  if (leftColumn.innerHTML === '' || leftColumn.childElementCount < rightColumn.childElementCount) {
    leftColumn.appendChild(nuevoFormulario);
  } else {
    rightColumn.appendChild(nuevoFormulario);
  }

  // TOMAR LOS VALORES Y CALCULAR TOTAL
  const formulario = nuevoFormulario.querySelector(`#formulario${contadorOrdenes}`);
  formulario.addEventListener("change", function () {
    const selectTacos = document.getElementById(`tacos${contador}`).value;
    const selectSopes = document.getElementById(`sopes${contador}`).value;
    const selectTostadas = document.getElementById(`tostadas${contador}`).value;
    const selectPlatano = document.getElementById(`platano${contador}`).value;
    const selectsTacosExtra = formulario.querySelectorAll(`[id^="tacosExtra${contador}"]`);
    const selectsSopesExtra = formulario.querySelectorAll(`[id^="sopesExtra${contador}"]`);
    const selectsTostadasExtra = formulario.querySelectorAll(`[id^="tostadasExtra${contador}"]`);

    let total = parseInt(selectTacos) + parseInt(selectSopes) + parseInt(selectTostadas) + parseInt(selectPlatano);
    selectsTacosExtra.forEach((select) => {
      total += parseInt(select.value);
    });
    selectsSopesExtra.forEach((select) => {
      total += parseInt(select.value);
    });
    selectsTostadasExtra.forEach((select) => {
      total += parseInt(select.value);
    });

    document.getElementById(`etiTotal${contador}`).value = "$" + total;
  });

  // BOTON AGREGAR MAS
  const btnAgregarOrden = nuevoFormulario.querySelector(`#btnAgregarOrden${contador}`);
  btnAgregarOrden.addEventListener("click", function () {
    crearFormularioAdicional(contador);
  });

  // FUNCION PARA CREAR FORMULARIO ADICIONAL
  function crearFormularioAdicional(contador) {
    const divAgregarOrden = nuevoFormulario.querySelector(`#divAgregarOrden${contador}`);

    // AGREGA MAS A LA ORDEN
    const formularioAdicional = document.createElement("div");
    formularioAdicional.innerHTML = `
  <br>
    <label for="tacosExtra${contador}">Tacos</label>
    <select name="tacosExtra" id="tacosExtra${contador}_${divAgregarOrden.childElementCount}" class="tacos">
        <option value="0"></option>
        <option value="100">Orden</option>
        <option value="98">7</option>
        <option value="84">6</option>
        <option value="70">5</option>
        <option value="55">1/2</option>
        <option value="42">3</option>
        <option value="28">2</option>
        <option value="14" >1</option>
    </select>

    <select name="guisoExtra" id="guisoExtra${contador}_${divAgregarOrden.childElementCount}" class="guiso">
        <option value="0"></option>
        <option value="0">DS</option>
        <option value="0">DC</option>
        <option value="0">DP</option>
        <option value="0"></option>
        <option value="0">BS</option>
        <option value="0">BC</option>
        <option value="0">BP</option>
        <option value="0">BF</option>
    </select>

    <label for="sopesExtra${contador}">Sopes</label>
    <select name="sopesExtra" id="sopesExtra${contador}_${divAgregarOrden.childElementCount}">
        <option value="0"></option>
        <option value="100">4</option>
        <option value="75">3</option>
        <option value="55">2</option>
        <option value="25">1</option>
    </select>

    <label for="tostadasExtra${contador}">Tostadas</label>
    <select name="tostadasExtra" id="tostadasExtra${contador}_${divAgregarOrden.childElementCount}">
        <option value="0"></option>
        <option value="160">4</option>
        <option value="120">3</option>
        <option value="80">2</option>
        <option value="40">1</option>
        <option value="0"></option>
        <option value="0">-Esp-</option>
        <option value="150">3</option>
        <option value="100">2</option>
        <option value="50">1</option>
    </select>
  `;

    // Agrega el formulario adicional al div de elementos adicionales
    divAgregarOrden.appendChild(formularioAdicional);
  }

  // BOTON ELIMINAR ORDEN
  const btnEliminarOrden = nuevoFormulario.querySelector(".btnEliminarOrden");
  btnEliminarOrden.addEventListener("click", function () {
    const confirmar = confirm("¿Seguro que quieres eliminar la orden? ");
    if (confirmar) {
      nuevoFormulario.remove();
      return true;
    } else {
      return false;
    }
  });

  // BOTON FINALIZAR ORDEN
  const btnFinalizarOrden = nuevoFormulario.querySelector(".btnFinalizarOrden");
  btnFinalizarOrden.addEventListener("click", function () {
    const confirmarf = confirm("¿Seguro que quieres finalizar la orden?");
    if (confirmarf) {
      nuevoFormulario.classList.add("oculto");
      return true;
    } else {
      return false;
    }
  });

  nuevoFormulario.addEventListener('transitionend', function () {
    nuevoFormulario.classList.remove('fadeIn');
  });

}
