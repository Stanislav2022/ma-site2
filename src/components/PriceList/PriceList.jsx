import React from 'react';
import imgprice from '../../images/untitledprice.webp';
import { MdBusiness, MdBusinessCenter } from 'react-icons/md';
import { FcMinus } from 'react-icons/fc';
import { Button } from '../Button/Button';
import css from './PriceList.module.css';
import { getServices } from '../../serviceAPI';
import { useState } from 'react';

const PriceList = () => {
  const [section, setSection] = useState('IE');
  const [taxation, setTaxation] = useState('single tax');
  const [vat, setVat] = useState(false);
  const [employee, setEmployee] = useState(0);

  const services = getServices();

  const serviceSelect = services.find(
    service =>
      service.section === section &&
      service.taxation === taxation &&
      service.vat === vat
  );

  const totalAmount = employee * 700 + serviceSelect.price;

  return (
    <div className={css.section}>
      <div className={css.title}>
        <h2 className={css.title__section}>Розрахунок ціни</h2>
        <FcMinus size="2em" />
      </div>
      <div className={css.price__section}>
        <div>
          <div className={css.wrapper}>
            <h3 className={css.choice__title}>
              Виберіть організаційно-правову форму
            </h3>
            <div className={css.wrapper__choice}>
              <div className={css.choice__btn}>
                <Button
                  selected={'IE' === serviceSelect.section}
                  onClick={() => setSection('IE')}
                >
                  ФОП <MdBusinessCenter size="18px" />
                </Button>
              </div>
              <div className={css.choice__btn}>
                <Button
                  selected={'LLC' === serviceSelect.section}
                  onClick={() => setSection('LLC')}
                >
                  ТОВ <MdBusiness size="18px" />
                </Button>
              </div>
            </div>
          </div>
          <div className={css.wrapper}>
            <h3 className={css.choice__title}>Виберіть режим оподаткування</h3>
            <div className={css.wrapper__choice}>
              <div className={css.choice__btn}>
                <Button
                  selected={'single tax' === serviceSelect.taxation}
                  onClick={() => setTaxation('single tax')}
                >
                  Єдиний податок
                </Button>
              </div>
              <div className={css.choice__btn}>
                <Button
                  selected={'general' === serviceSelect.taxation}
                  onClick={() => setTaxation('general')}
                >
                  Загальна система
                </Button>
              </div>
            </div>
            <div className={css.wrapper}>
              <h3 className={css.choice__title}>Платник ПДВ</h3>
              <input
                type="checkbox"
                className={css.checkbox}
                checked={serviceSelect.vat}
                onChange={() => setVat(!serviceSelect.vat)}
              />
            </div>
          </div>
          <div className={css.wrapper}>
            <h3 className={css.choice__title}>
              Кількість найманих працівників:
            </h3>

            <input
              type="range"
              min="0"
              max="10"
              onChange={event => setEmployee(event.target.value)}
              list="markers"
              defaultValue="0"
            />
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
            <p className={css.employee}>{employee}</p>
            <p>
              *Кінцева ціна пакету обговорюється індивідуально в залежності від
              об’єму наданих послуг.
            </p>
          </div>
        </div>
        <div className={css.img__container}>
          <img src={imgprice} alt="Our Service" width="700px" />
          <p className={css.amount}> {totalAmount} грн/міс.</p>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
