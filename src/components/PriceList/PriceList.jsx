import React from "react";
import { Button } from "../Button/Button";
import css from "./PriceList.module.css";
import { getServices } from "../../serviceAPI";
import { useState } from 'react'

const PriceList = () => {
  const [section, setSection] = useState("IE");
  const [taxation, setTaxation] = useState("single tax");
  const [vat, setVat] = useState(false);
  const [employee, setEmployee] = useState(0);

  const services = getServices()

  const serviceSelect = services.find(service =>
    service.section === section &&
    service.taxation === taxation &&
    service.vat === vat
  )
  
  const totalAmount = (employee * 700) + serviceSelect.price;
	



  return (
    <div className={css.price__section}>
      <h2 className={css.title}>Розрахунок ціни</h2>
      <div className={css.wrapper}>
        <h3>Організаційно-правова форма</h3>
        <Button
          selected={"IE" === serviceSelect.section}
          onClick={() => setSection("IE")}
        >
          ФОП
        </Button>
        <Button
          selected={"LLC" === serviceSelect.section}
          onClick={() => setSection("LLC")}
           >
          ТОВ
      </Button>
      </div>
      <div className={css.wrapper}>
        <h3>Режим оподаткування</h3>
        <Button
            selected={"single tax" === serviceSelect.taxation}
            onClick={() => setTaxation("single tax")}
          >
            Єдиний податок
        </Button>
        <Button
            selected={"general" === serviceSelect.taxation}
            onClick={() => setTaxation("general")}
             >
            Загальна система
      </Button>
      <div className={css.wrapper}>
            <input
              type="checkbox"
              className={css.checkbox}
              checked={serviceSelect.vat}
              onChange={() => setVat(!serviceSelect.vat)}
            />
            <p className={css.text}>Платник ПДВ</p>
      </div>
      </div>
      <div className={css.wrapper}>
        <h3>Кількість найманих працівників: {employee}</h3>
        <input type="range" min="0" max="10" onChange={(event) => setEmployee(event.target.value)} list="markers" defaultValue="0"/>
        <datalist id="markers">
          <option value="0"></option>
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="5"></option>
          <option value="6"></option>
          <option value="7"></option>
          <option value="8"></option>
          <option value="9"></option>       
          <option value="10"></option>
        </datalist>
      </div>
      <div>
        <h3>Загальна сума: {totalAmount} грн.</h3>
        <p>*Ціни орієнтовні і складаються з розрахунку 350 грн/годину роботи. Кінцева ціна пакету обговорюється індивідуально.</p>
      </div>

    </div>
  );
};

export default PriceList;