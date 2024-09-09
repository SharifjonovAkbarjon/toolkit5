import logo from '../../assets/Logo.png'; 
const Footer = () => {
  return (
    <div className="bg-slate-100 py-10 mt-36">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          

          <div className="mb-6 md:mb-0">
            <img src={logo} alt="Logo" className="w-32" />
          </div>
  
          <div className="mb-6 md:mb-0 md:w-1/4 text-center md:text-left">
            <ul className="flex flex-col gap-4 text-sm">
              <li className="font-bold text-lg">Информация</li>
              <li>Все права защищены © 2015 интернет-магазин AIKEA.BY Беларусь.</li>
              <li>УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом реестре 158299</li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>
          

          <div className="mb-6 md:mb-0 md:w-1/4 text-center md:text-left">
            <ul className="flex flex-col gap-4 text-sm">
              <li className="font-bold text-lg">Меню</li>
              <li>Главная | Каталог | Товары в наличии</li>
              <li>Скидки | Популярное | Вдохновение</li>
              <li>Доставка | Услуги | Условия</li>
              <li>Контакты | Список покупок | Личный кабинет</li>
            </ul>
          </div>
          

          <div className="md:w-1/4 text-center md:text-left">
            <ul className="flex flex-col gap-4 text-sm">
              <li className="font-bold text-lg">Контакты</li>
              <li>г.Минск</li>
              <li>Ул. Первомайская, Д. 1, Кв. 43</li>
              <li>+375 434 847 28 84</li>
              <li>+375 448 473 09 48</li>
              <li>ikeaekspress@gmail.com</li>
            </ul>
          </div>
          
        </div>

        <div className="flex justify-center md:justify-end mt-10">
          <img src={logo} alt="Instagram" className="w-10 h-10 mx-2 cursor-pointer" />

        </div>
      </div>
    </div>
  );
};

export default Footer;
