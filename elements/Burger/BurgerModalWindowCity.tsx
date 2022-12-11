import Link from "next/link";
import React from "react";

type ModalWindowCity = {
  openWindowCity: any;
  setOpenWindowCity: any;
};

const BurgerModalWindowCity = ({
  openWindowCity,
  setOpenWindowCity,
}: ModalWindowCity) => {
  return (
    <>
      <div
        onClick={() => setOpenWindowCity(false)}
        className={`modal_city_holder animated_city ${
          openWindowCity ? "show_city" : ""
        } `}
      >
        <div className="modal_city_window" onClick={(e) => e.stopPropagation()}>
          <div className="modal_city_header">
            <div className="modal_city_heading">Виберіть своє місто</div>
            <button
              onClick={() => setOpenWindowCity(false)}
              className="modal_city_close"
            >
              X
            </button>
          </div>
          <div className="modal_city_content">
            <p className="header_location_intro">
              <i className="intro_icon fa-sharp fa-solid fa-truck-fast"></i>
              Доставляємо замовлення по всій Україні!
            </p>
            <ul className="header_location_popular">
              <li className="header_location_popular_item">
                <button className="button header_location_popular_link">
                  Київ
                </button>
              </li>
              <li className="header_location_popular_item">
                <button className="button header_location_popular_link">
                  Харків
                </button>
              </li>
              <li className="header_location_popular_item">
                <button className="button header_location_popular_link">
                  Одеса
                </button>
              </li>
              <li className="header_location_popular_item">
                <button className="button header_location_popular_link">
                  Дніпро
                </button>
              </li>
              <li className="header_location_popular_item">
                <button className="button header_location_popular_link">
                  Запоріжжя
                </button>
              </li>
              <li className="header_location_popular_item">
                <button className="button header_location_popular_link">
                  Львів
                </button>
              </li>
            </ul>
            <form className="header_location_search">
              <fieldset className="header_form_row">
                <label className="form_label">
                  Вкажіть населенний пункт України
                </label>
                <div className="header_location_search_input">
                  <div className="autocomplete">
                    <input
                      placeholder="Виберіть своє місто"
                      className="input_location"
                      type="text"
                    />
                    <ul className="autocomplete_list"></ul>
                  </div>
                </div>
              </fieldset>
              <p className="header_location__search_example">
                Наприклад,
                <button className="button header_location_example_link">
                  Котюжини
                </button>
              </p>
            </form>
            <fieldset className="header_form_row">
              <div className="header_location_footer">
                <Link
                  onClick={() => {
                    setOpenWindowCity(false);
                  }}
                  className="button location_footer_button"
                  href="/"
                >
                  Перейти на головну сторінку
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenWindowCity(false);
                  }}
                  className="button location_footer_applybutton"
                >
                  Застосувати
                </button>
              </div>
            </fieldset>
            <p className="header_location_caption">
              Вибір міста допоможе надати актуальну інформацію про наявність
              товару, його ціни та методів доставки у вашому місті! Це допоможе
              зберегти більше вільного часу для вас!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerModalWindowCity;
