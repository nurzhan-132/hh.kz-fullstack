'use strict';

const { queryInterface, Sequelize } = require("sequelize");

const specializationTypes = [{
  "id": "1",
  "name": "Информационные технологии, интернет, телеком",
  "specializations": [{
      "id": "1.395",
      "name": "Банковское ПО",
      "laboring": false
  }, {
      "id": "1.400",
      "name": "Оптимизация сайта (SEO)",
      "laboring": false
  }, {
      "id": "1.420",
      "name": "Администратор баз данных",
      "laboring": false
  }, {
      "id": "1.474",
      "name": "Стартапы",
      "laboring": false
  }, {
      "id": "1.475",
      "name": "Игровое ПО",
      "laboring": false
  }, {
      "id": "1.536",
      "name": "CRM системы",
      "laboring": false
  }, {
      "id": "1.744",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "1.3",
      "name": "CTO, CIO, Директор по IT",
      "laboring": false
  }, {
      "id": "1.9",
      "name": "Web инженер",
      "laboring": false
  }, {
      "id": "1.10",
      "name": "Web мастер",
      "laboring": false
  }, {
      "id": "1.25",
      "name": "Аналитик",
      "laboring": false
  }, {
      "id": "1.30",
      "name": "Арт-директор",
      "laboring": false
  }, {
      "id": "1.50",
      "name": "Системы управления предприятием (ERP)",
      "laboring": false
  }, {
      "id": "1.82",
      "name": "Инженер",
      "laboring": false
  }, {
      "id": "1.89",
      "name": "Интернет",
      "laboring": false
  }, {
      "id": "1.110",
      "name": "Компьютерная безопасность",
      "laboring": false
  }, {
      "id": "1.113",
      "name": "Консалтинг, Аутсорсинг",
      "laboring": false
  }, {
      "id": "1.116",
      "name": "Контент",
      "laboring": false
  }, {
      "id": "1.117",
      "name": "Тестирование",
      "laboring": false
  }, {
      "id": "1.137",
      "name": "Маркетинг",
      "laboring": false
  }, {
      "id": "1.161",
      "name": "Мультимедиа",
      "laboring": false
  }, {
      "id": "1.172",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "1.203",
      "name": "Передача данных и доступ в интернет",
      "laboring": false
  }, {
      "id": "1.211",
      "name": "Поддержка, Helpdesk",
      "laboring": false
  }, {
      "id": "1.221",
      "name": "Программирование, Разработка",
      "laboring": false
  }, {
      "id": "1.225",
      "name": "Продажи",
      "laboring": false
  }, {
      "id": "1.232",
      "name": "Продюсер",
      "laboring": false
  }, {
      "id": "1.246",
      "name": "Развитие бизнеса",
      "laboring": false
  }, {
      "id": "1.270",
      "name": "Сетевые технологии",
      "laboring": false
  }, {
      "id": "1.272",
      "name": "Системная интеграция",
      "laboring": false
  }, {
      "id": "1.273",
      "name": "Системный администратор",
      "laboring": false
  }, {
      "id": "1.274",
      "name": "Системы автоматизированного проектирования",
      "laboring": false
  }, {
      "id": "1.277",
      "name": "Сотовые, Беспроводные технологии",
      "laboring": false
  }, {
      "id": "1.295",
      "name": "Телекоммуникации",
      "laboring": false
  }, {
      "id": "1.296",
      "name": "Технический писатель",
      "laboring": false
  }, {
      "id": "1.327",
      "name": "Управление проектами",
      "laboring": false
  }, {
      "id": "1.359",
      "name": "Электронная коммерция",
      "laboring": false
  }]
}, {
  "id": "20",
  "name": "Строительство, недвижимость",
  "specializations": [{
      "id": "20.396",
      "name": "Эксплуатация",
      "laboring": false
  }, {
      "id": "20.445",
      "name": "ЖКХ",
      "laboring": false
  }, {
      "id": "20.484",
      "name": "Геодезия и картография",
      "laboring": false
  }, {
      "id": "20.490",
      "name": "Рабочие строительных специальностей",
      "laboring": true
  }, {
      "id": "20.525",
      "name": "Землеустройство",
      "laboring": false
  }, {
      "id": "20.526",
      "name": "Оценка",
      "laboring": false
  }, {
      "id": "20.527",
      "name": "Отопление, вентиляция и кондиционирование",
      "laboring": false
  }, {
      "id": "20.528",
      "name": "Водоснабжение и канализация",
      "laboring": false
  }, {
      "id": "20.573",
      "name": "Тендеры",
      "laboring": false
  }, {
      "id": "20.755",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "20.20",
      "name": "Агент",
      "laboring": false
  }, {
      "id": "20.58",
      "name": "Гостиницы, Магазины",
      "laboring": false
  }, {
      "id": "20.63",
      "name": "Дизайн/Оформление",
      "laboring": false
  }, {
      "id": "20.70",
      "name": "Жилье",
      "laboring": false
  }, {
      "id": "20.83",
      "name": "Инженер",
      "laboring": false
  }, {
      "id": "20.186",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "20.189",
      "name": "Нежилые помещения",
      "laboring": false
  }, {
      "id": "20.233",
      "name": "Проектирование, Архитектура",
      "laboring": false
  }, {
      "id": "20.287",
      "name": "Строительство",
      "laboring": false
  }, {
      "id": "20.325",
      "name": "Управление проектами",
      "laboring": false
  }, {
      "id": "20.375",
      "name": "Девелопер",
      "laboring": false
  }, {
      "id": "20.387",
      "name": "Прораб",
      "laboring": false
  }]
}, {
  "id": "17",
  "name": "Продажи",
  "specializations": [{
      "id": "17.397",
      "name": "Электротехническое оборудование, Светотехника",
      "laboring": false
  }, {
      "id": "17.401",
      "name": "Химическая продукция",
      "laboring": false
  }, {
      "id": "17.405",
      "name": "Сертификация",
      "laboring": false
  }, {
      "id": "17.417",
      "name": "Строительные материалы",
      "laboring": false
  }, {
      "id": "17.418",
      "name": "Сельское хозяйство",
      "laboring": false
  }, {
      "id": "17.440",
      "name": "Текстиль, Одежда, Обувь",
      "laboring": false
  }, {
      "id": "17.441",
      "name": "Франчайзинг",
      "laboring": false
  }, {
      "id": "17.443",
      "name": "Мебель",
      "laboring": false
  }, {
      "id": "17.446",
      "name": "Системы безопасности",
      "laboring": false
  }, {
      "id": "17.486",
      "name": "Сантехника",
      "laboring": false
  }, {
      "id": "17.487",
      "name": "Бытовая техника",
      "laboring": false
  }, {
      "id": "17.520",
      "name": "Продавец в магазине",
      "laboring": true
  }, {
      "id": "17.535",
      "name": "Торговые сети",
      "laboring": false
  }, {
      "id": "17.538",
      "name": "Продажи по телефону, Телемаркетинг",
      "laboring": true
  }, {
      "id": "17.572",
      "name": "Тендеры",
      "laboring": false
  }, {
      "id": "17.580",
      "name": "Клининговые услуги",
      "laboring": false
  }, {
      "id": "17.623",
      "name": "Финансовые услуги",
      "laboring": false
  }, {
      "id": "17.625",
      "name": "Решения по автоматизации процессов",
      "laboring": false
  }, {
      "id": "17.751",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "17.15",
      "name": "Автомобили, Запчасти",
      "laboring": false
  }, {
      "id": "17.24",
      "name": "Алкоголь",
      "laboring": false
  }, {
      "id": "17.59",
      "name": "ГСМ, нефть, бензин",
      "laboring": false
  }, {
      "id": "17.65",
      "name": "Дилерские сети",
      "laboring": false
  }, {
      "id": "17.66",
      "name": "Дистрибуция",
      "laboring": false
  }, {
      "id": "17.111",
      "name": "Компьютерная техника",
      "laboring": false
  }, {
      "id": "17.112",
      "name": "Компьютерные программы",
      "laboring": false
  }, {
      "id": "17.144",
      "name": "Медицина, Фармацевтика",
      "laboring": false
  }, {
      "id": "17.149",
      "name": "Менеджер по работе с клиентами",
      "laboring": false
  }, {
      "id": "17.152",
      "name": "Металлопрокат",
      "laboring": false
  }, {
      "id": "17.156",
      "name": "Многоуровневый маркетинг",
      "laboring": false
  }, {
      "id": "17.183",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "17.196",
      "name": "Оптовая торговля",
      "laboring": false
  }, {
      "id": "17.231",
      "name": "Продукты питания",
      "laboring": false
  }, {
      "id": "17.242",
      "name": "Прямые продажи",
      "laboring": false
  }, {
      "id": "17.256",
      "name": "Розничная торговля",
      "laboring": false
  }, {
      "id": "17.269",
      "name": "Телекоммуникации, Сетевые решения",
      "laboring": false
  }, {
      "id": "17.279",
      "name": "Станки, тяжелое оборудование",
      "laboring": false
  }, {
      "id": "17.301",
      "name": "Товары для бизнеса",
      "laboring": false
  }, {
      "id": "17.302",
      "name": "FMCG, Товары народного потребления",
      "laboring": false
  }, {
      "id": "17.303",
      "name": "Торговля биржевыми товарами",
      "laboring": false
  }, {
      "id": "17.306",
      "name": "Торговый представитель",
      "laboring": false
  }, {
      "id": "17.324",
      "name": "Управление продажами",
      "laboring": false
  }, {
      "id": "17.333",
      "name": "Услуги для бизнеса",
      "laboring": false
  }, {
      "id": "17.334",
      "name": "Услуги для населения",
      "laboring": false
  }, {
      "id": "17.350",
      "name": "Цветные металлы",
      "laboring": false
  }, {
      "id": "17.358",
      "name": "Электроника, фото, видео",
      "laboring": false
  }]
}, {
  "id": "13",
  "name": "Медицина, фармацевтика",
  "specializations": [{
      "id": "13.398",
      "name": "Клинические исследования",
      "laboring": false
  }, {
      "id": "13.432",
      "name": "Производство",
      "laboring": false
  }, {
      "id": "13.433",
      "name": "Регистратура",
      "laboring": false
  }, {
      "id": "13.438",
      "name": "Оптика",
      "laboring": false
  }, {
      "id": "13.447",
      "name": "Психология",
      "laboring": false
  }, {
      "id": "13.489",
      "name": "Медицинский представитель",
      "laboring": false
  }, {
      "id": "13.537",
      "name": "Медицинский советник",
      "laboring": false
  }, {
      "id": "13.567",
      "name": "Дефектолог, Логопед",
      "laboring": false
  }, {
      "id": "13.578",
      "name": "Фармацевт",
      "laboring": false
  }, {
      "id": "13.587",
      "name": "Врач-эксперт",
      "laboring": false
  }, {
      "id": "13.732",
      "name": "Стоматология",
      "laboring": false
  }, {
      "id": "13.748",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "13.49",
      "name": "Ветеринария",
      "laboring": false
  }, {
      "id": "13.128",
      "name": "Лаборант",
      "laboring": false
  }, {
      "id": "13.131",
      "name": "Лечащий врач",
      "laboring": false
  }, {
      "id": "13.138",
      "name": "Маркетинг",
      "laboring": false
  }, {
      "id": "13.155",
      "name": "Младший и средний медперсонал",
      "laboring": true
  }, {
      "id": "13.185",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "13.220",
      "name": "Провизор",
      "laboring": false
  }, {
      "id": "13.227",
      "name": "Продажи",
      "laboring": false
  }, {
      "id": "13.228",
      "name": "Лекарственные препараты",
      "laboring": false
  }, {
      "id": "13.229",
      "name": "Медицинское оборудование",
      "laboring": false
  }, {
      "id": "13.268",
      "name": "Сертификация",
      "laboring": false
  }]
}, {
  "id": "5",
  "name": "Банки, инвестиции, лизинг",
  "specializations": [{
      "id": "5.399",
      "name": "Ипотека, Ипотечное кредитование",
      "laboring": false
  }, {
      "id": "5.424",
      "name": "Паевые фонды",
      "laboring": false
  }, {
      "id": "5.426",
      "name": "Экономист",
      "laboring": false
  }, {
      "id": "5.444",
      "name": "Финансовый мониторинг",
      "laboring": false
  }, {
      "id": "5.450",
      "name": "Кредитование малого и среднего бизнеса",
      "laboring": false
  }, {
      "id": "5.457",
      "name": "Риски: операционные",
      "laboring": false
  }, {
      "id": "5.458",
      "name": "Риски: финансовые",
      "laboring": false
  }, {
      "id": "5.459",
      "name": "Риски: рыночные",
      "laboring": false
  }, {
      "id": "5.460",
      "name": "Автокредитование",
      "laboring": false
  }, {
      "id": "5.534",
      "name": "Факторинг",
      "laboring": false
  }, {
      "id": "5.579",
      "name": "Работа с проблемными заемщиками",
      "laboring": false
  }, {
      "id": "5.691",
      "name": "Private Banking",
      "laboring": false
  }, {
      "id": "5.735",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "5.4",
      "name": "Forex",
      "laboring": false
  }, {
      "id": "5.23",
      "name": "Акции, Ценные бумаги",
      "laboring": false
  }, {
      "id": "5.27",
      "name": "Аналитик",
      "laboring": false
  }, {
      "id": "5.34",
      "name": "Аудит, Внутренний контроль",
      "laboring": false
  }, {
      "id": "5.41",
      "name": "Бумаги с фиксированной доходностью (fixed Income)",
      "laboring": false
  }, {
      "id": "5.42",
      "name": "Бухгалтер",
      "laboring": false
  }, {
      "id": "5.45",
      "name": "Валютный контроль",
      "laboring": false
  }, {
      "id": "5.51",
      "name": "Внутренние операции (Back Office)",
      "laboring": false
  }, {
      "id": "5.61",
      "name": "Денежный рынок (money market)",
      "laboring": false
  }, {
      "id": "5.79",
      "name": "Инвестиционная компания",
      "laboring": false
  }, {
      "id": "5.101",
      "name": "Трейдинг, Дилинг",
      "laboring": false
  }, {
      "id": "5.103",
      "name": "Кассовое обслуживание, инкассация",
      "laboring": false
  }, {
      "id": "5.106",
      "name": "Коммерческий банк",
      "laboring": false
  }, {
      "id": "5.121",
      "name": "Корпоративное финансирование",
      "laboring": false
  }, {
      "id": "5.123",
      "name": "Корреспондентские, Международные отношения",
      "laboring": false
  }, {
      "id": "5.124",
      "name": "Риски: кредитные",
      "laboring": false
  }, {
      "id": "5.126",
      "name": "Кредиты",
      "laboring": false
  }, {
      "id": "5.132",
      "name": "Лизинг",
      "laboring": false
  }, {
      "id": "5.133",
      "name": "Риски: лизинговые",
      "laboring": false
  }, {
      "id": "5.163",
      "name": "Налоги",
      "laboring": false
  }, {
      "id": "5.177",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "5.192",
      "name": "Обменные пункты, Банкоматы",
      "laboring": false
  }, {
      "id": "5.195",
      "name": "ОПЕРУ",
      "laboring": false
  }, {
      "id": "5.210",
      "name": "Пластиковые карты",
      "laboring": false
  }, {
      "id": "5.215",
      "name": "Портфельные инвестиции",
      "laboring": false
  }, {
      "id": "5.219",
      "name": "Привлечение клиентов",
      "laboring": false
  }, {
      "id": "5.224",
      "name": "Продажа финансовых продуктов",
      "laboring": false
  }, {
      "id": "5.234",
      "name": "Проектное финансирование",
      "laboring": false
  }, {
      "id": "5.241",
      "name": "Прямые инвестиции",
      "laboring": false
  }, {
      "id": "5.250",
      "name": "Расчеты",
      "laboring": false
  }, {
      "id": "5.257",
      "name": "Розничный бизнес",
      "laboring": false
  }, {
      "id": "5.262",
      "name": "Руководство бухгалтерией",
      "laboring": false
  }, {
      "id": "5.304",
      "name": "Торговое финансирование",
      "laboring": false
  }, {
      "id": "5.341",
      "name": "Филиалы",
      "laboring": false
  }, {
      "id": "5.365",
      "name": "Оценка залога, Стоимости имущества",
      "laboring": false
  }, {
      "id": "5.366",
      "name": "Риски: прочие",
      "laboring": false
  }, {
      "id": "5.367",
      "name": "Методология, Банковские технологии",
      "laboring": false
  }, {
      "id": "5.368",
      "name": "Разработка новых продуктов, Маркетинг",
      "laboring": false
  }, {
      "id": "5.369",
      "name": "Отчетность",
      "laboring": false
  }, {
      "id": "5.370",
      "name": "Казначейство, Управление ликвидностью",
      "laboring": false
  }, {
      "id": "5.371",
      "name": "Кредиты: розничные",
      "laboring": false
  }, {
      "id": "5.372",
      "name": "Бюджетирование",
      "laboring": false
  }, {
      "id": "5.394",
      "name": "Эмиссии",
      "laboring": false
  }]
}, {
  "id": "21",
  "name": "Транспорт, логистика",
  "specializations": [{
      "id": "21.402",
      "name": "Гражданская авиация",
      "laboring": false
  }, {
      "id": "21.403",
      "name": "Бизнес-авиация",
      "laboring": false
  }, {
      "id": "21.480",
      "name": "Контейнерные перевозки",
      "laboring": false
  }, {
      "id": "21.481",
      "name": "Диспетчер",
      "laboring": false
  }, {
      "id": "21.482",
      "name": "Водитель",
      "laboring": true
  }, {
      "id": "21.506",
      "name": "Экспедитор",
      "laboring": true
  }, {
      "id": "21.563",
      "name": "Кладовщик",
      "laboring": true
  }, {
      "id": "21.564",
      "name": "Рабочий склада",
      "laboring": true
  }, {
      "id": "21.756",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "21.763",
      "name": "Общественный транспорт",
      "laboring": false
  }, {
      "id": "21.12",
      "name": "Авиаперевозки",
      "laboring": false
  }, {
      "id": "21.17",
      "name": "Автоперевозки",
      "laboring": true
  }, {
      "id": "21.53",
      "name": "ВЭД",
      "laboring": false
  }, {
      "id": "21.69",
      "name": "Железнодорожные перевозки",
      "laboring": false
  }, {
      "id": "21.74",
      "name": "Закупки, Снабжение",
      "laboring": false
  }, {
      "id": "21.136",
      "name": "Логистика",
      "laboring": false
  }, {
      "id": "21.158",
      "name": "Морские/Речные перевозки",
      "laboring": false
  }, {
      "id": "21.176",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "21.275",
      "name": "Складское хозяйство",
      "laboring": false
  }, {
      "id": "21.292",
      "name": "Таможенное оформление",
      "laboring": false
  }, {
      "id": "21.310",
      "name": "Трубопроводы",
      "laboring": false
  }]
}, {
  "id": "18",
  "name": "Производство, сельское хозяйство",
  "specializations": [{
      "id": "18.404",
      "name": "Сертификация",
      "laboring": false
  }, {
      "id": "18.431",
      "name": "Главный механик",
      "laboring": false
  }, {
      "id": "18.451",
      "name": "Управление проектами",
      "laboring": false
  }, {
      "id": "18.453",
      "name": "Ювелирная промышленность",
      "laboring": false
  }, {
      "id": "18.488",
      "name": "Метролог",
      "laboring": false
  }, {
      "id": "18.568",
      "name": "Конструктор",
      "laboring": false
  }, {
      "id": "18.585",
      "name": "Атомная энергетика",
      "laboring": false
  }, {
      "id": "18.752",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "18.13",
      "name": "Авиационная промышленность",
      "laboring": false
  }, {
      "id": "18.16",
      "name": "Автомобильная промышленность",
      "laboring": false
  }, {
      "id": "18.56",
      "name": "Главный агроном",
      "laboring": false
  }, {
      "id": "18.57",
      "name": "Главный инженер",
      "laboring": false
  }, {
      "id": "18.73",
      "name": "Закупки и снабжение",
      "laboring": false
  }, {
      "id": "18.75",
      "name": "Зоотехник",
      "laboring": false
  }, {
      "id": "18.81",
      "name": "Инженер",
      "laboring": false
  }, {
      "id": "18.84",
      "name": "Инженер, Мясо- и птицепереработка",
      "laboring": false
  }, {
      "id": "18.85",
      "name": "Инженер, Производство и переработка зерновых",
      "laboring": false
  }, {
      "id": "18.86",
      "name": "Инженер, Производство сахара",
      "laboring": false
  }, {
      "id": "18.118",
      "name": "Контроль качества",
      "laboring": false
  }, {
      "id": "18.129",
      "name": "Легкая промышленность",
      "laboring": false
  }, {
      "id": "18.130",
      "name": "Деревообработка, Лесная промышленность",
      "laboring": false
  }, {
      "id": "18.142",
      "name": "Машиностроение",
      "laboring": false
  }, {
      "id": "18.143",
      "name": "Мебельное производство",
      "laboring": false
  }, {
      "id": "18.153",
      "name": "Металлургия",
      "laboring": false
  }, {
      "id": "18.174",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "18.190",
      "name": "Нефтепереработка",
      "laboring": false
  }, {
      "id": "18.201",
      "name": "Охрана труда",
      "laboring": false
  }, {
      "id": "18.208",
      "name": "Пищевая промышленность",
      "laboring": false
  }, {
      "id": "18.212",
      "name": "Полиграфия",
      "laboring": false
  }, {
      "id": "18.245",
      "name": "Радиоэлектронная промышленность",
      "laboring": false
  }, {
      "id": "18.263",
      "name": "Руководство предприятием",
      "laboring": false
  }, {
      "id": "18.265",
      "name": "Сельхозпроизводство",
      "laboring": false
  }, {
      "id": "18.290",
      "name": "Стройматериалы",
      "laboring": false
  }, {
      "id": "18.291",
      "name": "Табачная промышленность",
      "laboring": false
  }, {
      "id": "18.297",
      "name": "Технолог",
      "laboring": false
  }, {
      "id": "18.298",
      "name": "Технолог, Мясо- и птицепереработка",
      "laboring": false
  }, {
      "id": "18.299",
      "name": "Технолог, Производство и переработка зерновых",
      "laboring": false
  }, {
      "id": "18.300",
      "name": "Технолог, Производство сахара",
      "laboring": false
  }, {
      "id": "18.330",
      "name": "Управление цехом",
      "laboring": false
  }, {
      "id": "18.339",
      "name": "Фармацевтическая промышленность",
      "laboring": false
  }, {
      "id": "18.348",
      "name": "Химическая промышленность",
      "laboring": false
  }, {
      "id": "18.354",
      "name": "Эколог",
      "laboring": false
  }, {
      "id": "18.360",
      "name": "Электроэнергетика",
      "laboring": false
  }, {
      "id": "18.361",
      "name": "Энергетик производства",
      "laboring": false
  }, {
      "id": "18.373",
      "name": "Судостроение",
      "laboring": false
  }]
}, {
  "id": "26",
  "name": "Закупки",
  "specializations": [{
      "id": "26.406",
      "name": "Сертификация",
      "laboring": false
  }, {
      "id": "26.407",
      "name": "Автомобили, Запчасти",
      "laboring": false
  }, {
      "id": "26.408",
      "name": "Алкоголь",
      "laboring": false
  }, {
      "id": "26.409",
      "name": "ГСМ, нефть, бензин",
      "laboring": false
  }, {
      "id": "26.410",
      "name": "Компьютерная техника",
      "laboring": false
  }, {
      "id": "26.411",
      "name": "Фармацевтика",
      "laboring": false
  }, {
      "id": "26.412",
      "name": "Продукты питания",
      "laboring": false
  }, {
      "id": "26.413",
      "name": "Товары для бизнеса",
      "laboring": false
  }, {
      "id": "26.414",
      "name": "Электроника, фото, видео",
      "laboring": false
  }, {
      "id": "26.415",
      "name": "Химическая продукция",
      "laboring": false
  }, {
      "id": "26.416",
      "name": "FMCG, Товары народного потребления",
      "laboring": false
  }, {
      "id": "26.419",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "26.427",
      "name": "Металлопрокат",
      "laboring": false
  }, {
      "id": "26.437",
      "name": "Управление закупками",
      "laboring": false
  }, {
      "id": "26.439",
      "name": "Строительные материалы",
      "laboring": false
  }, {
      "id": "26.449",
      "name": "Электротехническое оборудование/светотехника",
      "laboring": false
  }, {
      "id": "26.473",
      "name": "Станки, Тяжелое оборудование",
      "laboring": false
  }, {
      "id": "26.574",
      "name": "Тендеры",
      "laboring": false
  }, {
      "id": "26.742",
      "name": "Другое",
      "laboring": false
  }]
}, {
  "id": "19",
  "name": "Страхование",
  "specializations": [{
      "id": "19.421",
      "name": "Актуарий",
      "laboring": false
  }, {
      "id": "19.430",
      "name": "Урегулирование убытков",
      "laboring": false
  }, {
      "id": "19.483",
      "name": "Перестрахование",
      "laboring": false
  }, {
      "id": "19.586",
      "name": "Врач-эксперт",
      "laboring": false
  }, {
      "id": "19.754",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "19.18",
      "name": "Автострахование",
      "laboring": false
  }, {
      "id": "19.19",
      "name": "Агент",
      "laboring": false
  }, {
      "id": "19.28",
      "name": "Андеррайтер",
      "laboring": false
  }, {
      "id": "19.108",
      "name": "Комплексное страхование физических лиц",
      "laboring": false
  }, {
      "id": "19.109",
      "name": "Комплексное страхование юридических лиц",
      "laboring": false
  }, {
      "id": "19.147",
      "name": "Медицинское страхование",
      "laboring": false
  }, {
      "id": "19.170",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "19.259",
      "name": "Руководитель направления",
      "laboring": false
  }, {
      "id": "19.282",
      "name": "Страхование бизнеса",
      "laboring": false
  }, {
      "id": "19.283",
      "name": "Страхование жизни",
      "laboring": false
  }, {
      "id": "19.284",
      "name": "Страхование недвижимости",
      "laboring": false
  }, {
      "id": "19.285",
      "name": "Страхование ответственности",
      "laboring": false
  }, {
      "id": "19.357",
      "name": "Эксперт-оценщик",
      "laboring": false
  }]
}, {
  "id": "23",
  "name": "Юристы",
  "specializations": [{
      "id": "23.422",
      "name": "Авторское право",
      "laboring": false
  }, {
      "id": "23.442",
      "name": "Международное право",
      "laboring": false
  }, {
      "id": "23.476",
      "name": "Земельное право",
      "laboring": false
  }, {
      "id": "23.477",
      "name": "Договорное право",
      "laboring": false
  }, {
      "id": "23.478",
      "name": "Регистрация юридических лиц",
      "laboring": false
  }, {
      "id": "23.479",
      "name": "Взыскание задолженности, Коллекторская деятельность",
      "laboring": false
  }, {
      "id": "23.539",
      "name": "Антимонопольное право",
      "laboring": false
  }, {
      "id": "23.759",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "23.2",
      "name": "Compliance",
      "laboring": false
  }, {
      "id": "23.21",
      "name": "Адвокат",
      "laboring": false
  }, {
      "id": "23.29",
      "name": "Арбитраж",
      "laboring": false
  }, {
      "id": "23.36",
      "name": "Банковское право",
      "laboring": false
  }, {
      "id": "23.72",
      "name": "Законотворчество",
      "laboring": false
  }, {
      "id": "23.88",
      "name": "Интеллектуальная собственность",
      "laboring": false
  }, {
      "id": "23.120",
      "name": "Корпоративное право",
      "laboring": false
  }, {
      "id": "23.159",
      "name": "Морское право",
      "laboring": false
  }, {
      "id": "23.165",
      "name": "Налоговое право",
      "laboring": false
  }, {
      "id": "23.182",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "23.187",
      "name": "Недвижимость",
      "laboring": false
  }, {
      "id": "23.188",
      "name": "Недропользование",
      "laboring": false
  }, {
      "id": "23.214",
      "name": "Помощник",
      "laboring": false
  }, {
      "id": "23.266",
      "name": "Семейное право",
      "laboring": false
  }, {
      "id": "23.276",
      "name": "Слияния и поглощения",
      "laboring": false
  }, {
      "id": "23.286",
      "name": "Страховое право",
      "laboring": false
  }, {
      "id": "23.311",
      "name": "Трудовое право",
      "laboring": false
  }, {
      "id": "23.314",
      "name": "Уголовное право",
      "laboring": false
  }, {
      "id": "23.352",
      "name": "Ценные бумаги, Рынки капитала",
      "laboring": false
  }, {
      "id": "23.362",
      "name": "Юрисконсульт",
      "laboring": false
  }]
}, {
  "id": "3",
  "name": "Маркетинг, реклама, PR",
  "specializations": [{
      "id": "3.423",
      "name": "Ассистент",
      "laboring": false
  }, {
      "id": "3.507",
      "name": "Тайный покупатель",
      "laboring": true
  }, {
      "id": "3.508",
      "name": "Проведение опросов, Интервьюер",
      "laboring": true
  }, {
      "id": "3.509",
      "name": "Промоутер",
      "laboring": true
  }, {
      "id": "3.747",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "3.1",
      "name": "Below The Line (BTL)",
      "laboring": false
  }, {
      "id": "3.8",
      "name": "PR, Маркетинговые коммуникации",
      "laboring": false
  }, {
      "id": "3.26",
      "name": "Аналитик",
      "laboring": false
  }, {
      "id": "3.31",
      "name": "Арт директор",
      "laboring": false
  }, {
      "id": "3.40",
      "name": "Бренд-менеджмент",
      "laboring": false
  }, {
      "id": "3.48",
      "name": "Верстальщик",
      "laboring": false
  }, {
      "id": "3.64",
      "name": "Дизайнер",
      "laboring": false
  }, {
      "id": "3.90",
      "name": "Интернет-маркетинг",
      "laboring": false
  }, {
      "id": "3.98",
      "name": "Исследования рынка",
      "laboring": false
  }, {
      "id": "3.114",
      "name": "Консультант",
      "laboring": false
  }, {
      "id": "3.119",
      "name": "Копирайтер",
      "laboring": false
  }, {
      "id": "3.148",
      "name": "Менеджер по работе с клиентами",
      "laboring": false
  }, {
      "id": "3.150",
      "name": "Менеджмент продукта (Product manager)",
      "laboring": false
  }, {
      "id": "3.151",
      "name": "Мерчендайзинг",
      "laboring": false
  }, {
      "id": "3.166",
      "name": "Наружная реклама",
      "laboring": false
  }, {
      "id": "3.171",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "3.206",
      "name": "Печатная реклама",
      "laboring": false
  }, {
      "id": "3.209",
      "name": "Планирование, Размещение рекламы",
      "laboring": false
  }, {
      "id": "3.213",
      "name": "Политический PR",
      "laboring": false
  }, {
      "id": "3.230",
      "name": "Продвижение, Специальные мероприятия",
      "laboring": false
  }, {
      "id": "3.236",
      "name": "Производство рекламы",
      "laboring": false
  }, {
      "id": "3.244",
      "name": "Радио реклама",
      "laboring": false
  }, {
      "id": "3.253",
      "name": "Рекламный агент",
      "laboring": false
  }, {
      "id": "3.294",
      "name": "Телевизионная реклама",
      "laboring": false
  }, {
      "id": "3.305",
      "name": "Торговый маркетинг(Trade marketing)",
      "laboring": false
  }, {
      "id": "3.318",
      "name": "Управление маркетингом",
      "laboring": false
  }, {
      "id": "3.328",
      "name": "Управление проектами",
      "laboring": false
  }]
}, {
  "id": "2",
  "name": "Бухгалтерия, управленческий учет, финансы предприятия",
  "specializations": [{
      "id": "2.425",
      "name": "Экономист",
      "laboring": false
  }, {
      "id": "2.434",
      "name": "Планово-экономическое управление",
      "laboring": false
  }, {
      "id": "2.454",
      "name": "МСФО, IFRS",
      "laboring": false
  }, {
      "id": "2.463",
      "name": "Бухгалтер-калькулятор",
      "laboring": false
  }, {
      "id": "2.464",
      "name": "Основные средства",
      "laboring": false
  }, {
      "id": "2.465",
      "name": "GAAP",
      "laboring": false
  }, {
      "id": "2.467",
      "name": "ACCA",
      "laboring": false
  }, {
      "id": "2.468",
      "name": "ТМЦ",
      "laboring": false
  }, {
      "id": "2.469",
      "name": "Первичная документация",
      "laboring": false
  }, {
      "id": "2.523",
      "name": "CIPA",
      "laboring": false
  }, {
      "id": "2.737",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "2.33",
      "name": "Аудит",
      "laboring": false
  }, {
      "id": "2.43",
      "name": "Бухгалтер",
      "laboring": false
  }, {
      "id": "2.44",
      "name": "Бюджетирование и планирование",
      "laboring": false
  }, {
      "id": "2.46",
      "name": "Валютный контроль",
      "laboring": false
  }, {
      "id": "2.100",
      "name": "Казначейство",
      "laboring": false
  }, {
      "id": "2.102",
      "name": "Кассир, Инкассатор",
      "laboring": false
  }, {
      "id": "2.125",
      "name": "Кредитный контроль",
      "laboring": false
  }, {
      "id": "2.164",
      "name": "Налоги",
      "laboring": false
  }, {
      "id": "2.179",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "2.200",
      "name": "Оффшоры",
      "laboring": false
  }, {
      "id": "2.249",
      "name": "Расчет себестоимости",
      "laboring": false
  }, {
      "id": "2.261",
      "name": "Руководство бухгалтерией",
      "laboring": false
  }, {
      "id": "2.335",
      "name": "Учет заработной платы",
      "laboring": false
  }, {
      "id": "2.337",
      "name": "Учет счетов и платежей",
      "laboring": false
  }, {
      "id": "2.342",
      "name": "Финансовый анализ",
      "laboring": false
  }, {
      "id": "2.343",
      "name": "Финансовый контроль",
      "laboring": false
  }, {
      "id": "2.344",
      "name": "Финансовый менеджмент",
      "laboring": false
  }, {
      "id": "2.351",
      "name": "Ценные бумаги",
      "laboring": false
  }]
}, {
  "id": "4",
  "name": "Административный персонал",
  "specializations": [{
      "id": "4.428",
      "name": "Последовательный перевод",
      "laboring": false
  }, {
      "id": "4.429",
      "name": "Делопроизводство",
      "laboring": false
  }, {
      "id": "4.456",
      "name": "Вечерний секретарь",
      "laboring": false
  }, {
      "id": "4.494",
      "name": "Уборщица/уборщик",
      "laboring": true
  }, {
      "id": "4.734",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "4.32",
      "name": "Архивист",
      "laboring": false
  }, {
      "id": "4.47",
      "name": "Ввод данных",
      "laboring": false
  }, {
      "id": "4.52",
      "name": "Водитель",
      "laboring": true
  }, {
      "id": "4.127",
      "name": "Курьер",
      "laboring": true
  }, {
      "id": "4.181",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "4.205",
      "name": "Персональный ассистент",
      "laboring": false
  }, {
      "id": "4.207",
      "name": "Письменный перевод",
      "laboring": false
  }, {
      "id": "4.255",
      "name": "Ресепшен",
      "laboring": false
  }, {
      "id": "4.264",
      "name": "Секретарь",
      "laboring": false
  }, {
      "id": "4.271",
      "name": "Синхронный перевод",
      "laboring": false
  }, {
      "id": "4.278",
      "name": "Сотрудник call-центра",
      "laboring": true
  }, {
      "id": "4.332",
      "name": "Управляющий офисом (Оffice manager)",
      "laboring": false
  }, {
      "id": "4.338",
      "name": "Учет товарооборота",
      "laboring": false
  }, {
      "id": "4.374",
      "name": "АХО",
      "laboring": false
  }]
}, {
  "id": "16",
  "name": "Государственная служба, некоммерческие организации",
  "specializations": [{
      "id": "16.435",
      "name": "НИИ",
      "laboring": false
  }, {
      "id": "16.569",
      "name": "Архивариус",
      "laboring": false
  }, {
      "id": "16.570",
      "name": "Атташе",
      "laboring": false
  }, {
      "id": "16.571",
      "name": "Библиотекарь",
      "laboring": false
  }, {
      "id": "16.658",
      "name": "Муниципалитет",
      "laboring": false
  }, {
      "id": "16.739",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "16.760",
      "name": "Военнослужащий",
      "laboring": false
  }, {
      "id": "16.761",
      "name": "Сотрудник полиции/ГИБДД",
      "laboring": false
  }, {
      "id": "16.38",
      "name": "Благотворительность",
      "laboring": false
  }, {
      "id": "16.194",
      "name": "Общественные организации",
      "laboring": false
  }, {
      "id": "16.216",
      "name": "Правительство",
      "laboring": false
  }]
}, {
  "id": "11",
  "name": "Искусство, развлечения, масс-медиа",
  "specializations": [{
      "id": "11.436",
      "name": "Кино",
      "laboring": false
  }, {
      "id": "11.745",
      "name": "Корректор, ретушер",
      "laboring": false
  }, {
      "id": "11.62",
      "name": "Дизайн, графика, живопись",
      "laboring": false
  }, {
      "id": "11.71",
      "name": "Журналистика",
      "laboring": false
  }, {
      "id": "11.76",
      "name": "Издательская деятельность",
      "laboring": false
  }, {
      "id": "11.99",
      "name": "Казино и игорный бизнес",
      "laboring": false
  }, {
      "id": "11.134",
      "name": "Литературная, Редакторская деятельность",
      "laboring": false
  }, {
      "id": "11.157",
      "name": "Мода",
      "laboring": false
  }, {
      "id": "11.160",
      "name": "Музыка",
      "laboring": false
  }, {
      "id": "11.173",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "11.218",
      "name": "Пресса",
      "laboring": false
  }, {
      "id": "11.240",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "11.243",
      "name": "Радио",
      "laboring": false
  }, {
      "id": "11.293",
      "name": "Телевидение",
      "laboring": false
  }, {
      "id": "11.347",
      "name": "Фотография",
      "laboring": false
  }]
}, {
  "id": "9",
  "name": "Высший менеджмент",
  "specializations": [{
      "id": "9.448",
      "name": "Юриспруденция",
      "laboring": false
  }, {
      "id": "9.452",
      "name": "Страхование",
      "laboring": false
  }, {
      "id": "9.521",
      "name": "Спортивные клубы, Фитнес, Салоны красоты",
      "laboring": false
  }, {
      "id": "9.532",
      "name": "Управление закупками",
      "laboring": false
  }, {
      "id": "9.562",
      "name": "Антикризисное управление",
      "laboring": false
  }, {
      "id": "9.738",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "9.22",
      "name": "Администрирование",
      "laboring": false
  }, {
      "id": "9.67",
      "name": "Добыча cырья",
      "laboring": false
  }, {
      "id": "9.78",
      "name": "Инвестиции",
      "laboring": false
  }, {
      "id": "9.94",
      "name": "Информационные технологии, Интернет, Мультимедиа",
      "laboring": false
  }, {
      "id": "9.95",
      "name": "Искусство, Развлечения, Масс-медиа",
      "laboring": false
  }, {
      "id": "9.105",
      "name": "Коммерческий Банк",
      "laboring": false
  }, {
      "id": "9.115",
      "name": "Консультирование",
      "laboring": false
  }, {
      "id": "9.139",
      "name": "Маркетинг, Реклама, PR",
      "laboring": false
  }, {
      "id": "9.145",
      "name": "Медицина, Фармацевтика",
      "laboring": false
  }, {
      "id": "9.168",
      "name": "Наука, Образование",
      "laboring": false
  }, {
      "id": "9.226",
      "name": "Продажи",
      "laboring": false
  }, {
      "id": "9.238",
      "name": "Производство, Технология",
      "laboring": false
  }, {
      "id": "9.289",
      "name": "Строительство, Недвижимость",
      "laboring": false
  }, {
      "id": "9.307",
      "name": "Транспорт, Логистика",
      "laboring": false
  }, {
      "id": "9.312",
      "name": "Туризм, Гостиницы, Рестораны",
      "laboring": false
  }, {
      "id": "9.317",
      "name": "Управление малым бизнесом",
      "laboring": false
  }, {
      "id": "9.321",
      "name": "Управление персоналом, Тренинги",
      "laboring": false
  }, {
      "id": "9.345",
      "name": "Финансы",
      "laboring": false
  }]
}, {
  "id": "7",
  "name": "Автомобильный бизнес",
  "specializations": [{
      "id": "7.455",
      "name": "Шины, Диски",
      "laboring": false
  }, {
      "id": "7.502",
      "name": "Тонировщик",
      "laboring": true
  }, {
      "id": "7.503",
      "name": "Автослесарь",
      "laboring": true
  }, {
      "id": "7.565",
      "name": "Автожестянщик",
      "laboring": true
  }, {
      "id": "7.566",
      "name": "Автомойщик",
      "laboring": true
  }, {
      "id": "7.733",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "7.14",
      "name": "Автозапчасти",
      "laboring": false
  }, {
      "id": "7.222",
      "name": "Продажа",
      "laboring": false
  }, {
      "id": "7.235",
      "name": "Производство",
      "laboring": false
  }, {
      "id": "7.239",
      "name": "Прокат, лизинг",
      "laboring": false
  }, {
      "id": "7.267",
      "name": "Сервисное обслуживание",
      "laboring": false
  }, {
      "id": "7.392",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }]
}, {
  "id": "8",
  "name": "Безопасность",
  "specializations": [{
      "id": "8.461",
      "name": "Системы видеонаблюдения",
      "laboring": false
  }, {
      "id": "8.462",
      "name": "Взыскание задолженности, Коллекторская деятельность",
      "laboring": false
  }, {
      "id": "8.519",
      "name": "Инкассатор",
      "laboring": true
  }, {
      "id": "8.575",
      "name": "Пожарная безопасность",
      "laboring": false
  }, {
      "id": "8.736",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "8.77",
      "name": "Имущественная безопасность",
      "laboring": false
  }, {
      "id": "8.135",
      "name": "Личная безопасность",
      "laboring": false
  }, {
      "id": "8.202",
      "name": "Охранник",
      "laboring": true
  }, {
      "id": "8.260",
      "name": "Руководитель СБ",
      "laboring": false
  }, {
      "id": "8.356",
      "name": "Экономическая и информационная безопасность",
      "laboring": false
  }]
}, {
  "id": "10",
  "name": "Добыча сырья",
  "specializations": [{
      "id": "10.470",
      "name": "Бурение",
      "laboring": false
  }, {
      "id": "10.471",
      "name": "Маркшейдер",
      "laboring": false
  }, {
      "id": "10.472",
      "name": "Газ",
      "laboring": false
  }, {
      "id": "10.740",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "10.54",
      "name": "Геологоразведка",
      "laboring": false
  }, {
      "id": "10.80",
      "name": "Инженер",
      "laboring": false
  }, {
      "id": "10.191",
      "name": "Нефть",
      "laboring": false
  }, {
      "id": "10.258",
      "name": "Руда",
      "laboring": false
  }, {
      "id": "10.315",
      "name": "Уголь",
      "laboring": false
  }, {
      "id": "10.323",
      "name": "Управление предприятием",
      "laboring": false
  }, {
      "id": "10.393",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }]
}, {
  "id": "22",
  "name": "Туризм, гостиницы, рестораны",
  "specializations": [{
      "id": "22.491",
      "name": "Повар",
      "laboring": true
  }, {
      "id": "22.504",
      "name": "Хостес",
      "laboring": true
  }, {
      "id": "22.505",
      "name": "Швейцар",
      "laboring": true
  }, {
      "id": "22.518",
      "name": "Сомелье",
      "laboring": true
  }, {
      "id": "22.529",
      "name": "Анимация",
      "laboring": true
  }, {
      "id": "22.530",
      "name": "Оформление виз",
      "laboring": false
  }, {
      "id": "22.531",
      "name": "Управление туристическим бизнесом",
      "laboring": false
  }, {
      "id": "22.757",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "22.11",
      "name": "Авиабилеты",
      "laboring": false
  }, {
      "id": "22.35",
      "name": "Банкеты",
      "laboring": false
  }, {
      "id": "22.39",
      "name": "Бронирование",
      "laboring": false
  }, {
      "id": "22.55",
      "name": "Гид, Экскурсовод",
      "laboring": false
  }, {
      "id": "22.104",
      "name": "Кейтеринг",
      "laboring": false
  }, {
      "id": "22.175",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "22.193",
      "name": "Официант, Бармен",
      "laboring": true
  }, {
      "id": "22.198",
      "name": "Организация встреч, Конференций",
      "laboring": false
  }, {
      "id": "22.199",
      "name": "Организация туристических продуктов",
      "laboring": false
  }, {
      "id": "22.204",
      "name": "Персонал кухни",
      "laboring": true
  }, {
      "id": "22.223",
      "name": "Продажа туристических услуг",
      "laboring": false
  }, {
      "id": "22.248",
      "name": "Размещение, Обслуживание гостей",
      "laboring": false
  }, {
      "id": "22.316",
      "name": "Управление гостиницами",
      "laboring": false
  }, {
      "id": "22.329",
      "name": "Управление ресторанами, Барами",
      "laboring": false
  }, {
      "id": "22.353",
      "name": "Шеф-повар",
      "laboring": false
  }]
}, {
  "id": "24",
  "name": "Спортивные клубы, фитнес, салоны красоты",
  "specializations": [{
      "id": "24.492",
      "name": "Массажист",
      "laboring": true
  }, {
      "id": "24.493",
      "name": "Парикмахер",
      "laboring": true
  }, {
      "id": "24.624",
      "name": "Ногтевой сервис",
      "laboring": true
  }, {
      "id": "24.753",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "24.377",
      "name": "Косметология",
      "laboring": true
  }, {
      "id": "24.378",
      "name": "Тренерский состав",
      "laboring": false
  }, {
      "id": "24.379",
      "name": "Администрация",
      "laboring": false
  }, {
      "id": "24.380",
      "name": "Продажи",
      "laboring": false
  }]
}, {
  "id": "29",
  "name": "Рабочий персонал",
  "specializations": [{
      "id": "29.495",
      "name": "Грузчик",
      "laboring": true
  }, {
      "id": "29.510",
      "name": "Слесарь",
      "laboring": true
  }, {
      "id": "29.511",
      "name": "Токарь, Фрезеровщик",
      "laboring": true
  }, {
      "id": "29.512",
      "name": "Фасовщик",
      "laboring": true
  }, {
      "id": "29.513",
      "name": "Столяр",
      "laboring": true
  }, {
      "id": "29.514",
      "name": "Сварщик",
      "laboring": true
  }, {
      "id": "29.515",
      "name": "Электрик",
      "laboring": true
  }, {
      "id": "29.516",
      "name": "Швея",
      "laboring": true
  }, {
      "id": "29.517",
      "name": "Сборщик",
      "laboring": true
  }, {
      "id": "29.540",
      "name": "Гардеробщик",
      "laboring": true
  }, {
      "id": "29.541",
      "name": "Дворник, Уборщик",
      "laboring": true
  }, {
      "id": "29.542",
      "name": "Дорожные рабочие",
      "laboring": true
  }, {
      "id": "29.543",
      "name": "Жестянщик",
      "laboring": true
  }, {
      "id": "29.544",
      "name": "Заправщик картриджей",
      "laboring": true
  }, {
      "id": "29.545",
      "name": "Комплектовщик, Укладчик-упаковщик",
      "laboring": true
  }, {
      "id": "29.546",
      "name": "Краснодеревщик",
      "laboring": true
  }, {
      "id": "29.547",
      "name": "Кузнец",
      "laboring": true
  }, {
      "id": "29.548",
      "name": "Лифтер",
      "laboring": true
  }, {
      "id": "29.549",
      "name": "Машинист производства",
      "laboring": true
  }, {
      "id": "29.550",
      "name": "Машинист сцены",
      "laboring": true
  }, {
      "id": "29.551",
      "name": "Машинист экскаватора",
      "laboring": true
  }, {
      "id": "29.552",
      "name": "Механик",
      "laboring": true
  }, {
      "id": "29.553",
      "name": "Оператор станков",
      "laboring": true
  }, {
      "id": "29.554",
      "name": "Пастух, Чабан",
      "laboring": true
  }, {
      "id": "29.555",
      "name": "Перемотчик",
      "laboring": true
  }, {
      "id": "29.556",
      "name": "Разнорабочий",
      "laboring": true
  }, {
      "id": "29.557",
      "name": "Сантехник",
      "laboring": true
  }, {
      "id": "29.558",
      "name": "Шлифовщик",
      "laboring": true
  }, {
      "id": "29.559",
      "name": "Штукатур",
      "laboring": true
  }, {
      "id": "29.560",
      "name": "Электромонтер, Кабельщик",
      "laboring": true
  }, {
      "id": "29.561",
      "name": "Ювелир",
      "laboring": true
  }, {
      "id": "29.581",
      "name": "Монтажник",
      "laboring": true
  }, {
      "id": "29.582",
      "name": "Проводник",
      "laboring": true
  }, {
      "id": "29.583",
      "name": "Маляр",
      "laboring": true
  }, {
      "id": "29.588",
      "name": "Другое",
      "laboring": true
  }, {
      "id": "29.162",
      "name": "Наладчик",
      "laboring": true
  }]
}, {
  "id": "27",
  "name": "Домашний персонал",
  "specializations": [{
      "id": "27.496",
      "name": "Воспитатель, Гувернантка/гувернёр, Няня",
      "laboring": true
  }, {
      "id": "27.497",
      "name": "домработница/домработник, Горничная",
      "laboring": true
  }, {
      "id": "27.498",
      "name": "Персональный водитель",
      "laboring": true
  }, {
      "id": "27.499",
      "name": "Садовник",
      "laboring": true
  }, {
      "id": "27.500",
      "name": "Повар",
      "laboring": true
  }, {
      "id": "27.501",
      "name": "Сиделка",
      "laboring": true
  }, {
      "id": "27.533",
      "name": "Помощник по хозяйству, Управляющий",
      "laboring": true
  }, {
      "id": "27.584",
      "name": "Репетитор",
      "laboring": true
  }, {
      "id": "27.741",
      "name": "Другое",
      "laboring": false
  }]
}, {
  "id": "15",
  "name": "Начало карьеры, студенты",
  "specializations": [{
      "id": "15.730",
      "name": "Бухгалтерия",
      "laboring": false
  }, {
      "id": "15.731",
      "name": "Закупки",
      "laboring": false
  }, {
      "id": "15.750",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "15.764",
      "name": "Рабочий персонал",
      "laboring": false
  }, {
      "id": "15.68",
      "name": "Добыча сырья",
      "laboring": false
  }, {
      "id": "15.93",
      "name": "Информационные технологии, Интернет, Мультимедиа",
      "laboring": false
  }, {
      "id": "15.96",
      "name": "Искусство, Развлечения, Масс-медиа",
      "laboring": false
  }, {
      "id": "15.140",
      "name": "Маркетинг, Реклама, PR",
      "laboring": false
  }, {
      "id": "15.146",
      "name": "Медицина, Фармацевтика",
      "laboring": false
  }, {
      "id": "15.167",
      "name": "Наука, Образование",
      "laboring": false
  }, {
      "id": "15.237",
      "name": "Производство, Технологии",
      "laboring": false
  }, {
      "id": "15.281",
      "name": "Страхование",
      "laboring": false
  }, {
      "id": "15.288",
      "name": "Строительство, Архитектура",
      "laboring": false
  }, {
      "id": "15.308",
      "name": "Транспорт, Логистика",
      "laboring": false
  }, {
      "id": "15.313",
      "name": "Туризм, Гостиницы, Рестораны",
      "laboring": false
  }, {
      "id": "15.320",
      "name": "Управление персоналом",
      "laboring": false
  }, {
      "id": "15.346",
      "name": "Финансы, Банки, Инвестиции",
      "laboring": false
  }, {
      "id": "15.363",
      "name": "Юристы",
      "laboring": false
  }, {
      "id": "15.388",
      "name": "Административный персонал",
      "laboring": false
  }, {
      "id": "15.389",
      "name": "Продажи",
      "laboring": false
  }, {
      "id": "15.390",
      "name": "Автомобильный бизнес",
      "laboring": false
  }, {
      "id": "15.391",
      "name": "Консультирование",
      "laboring": false
  }]
}, {
  "id": "25",
  "name": "Инсталляция и сервис",
  "specializations": [{
      "id": "25.743",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "25.381",
      "name": "Сервисный инженер",
      "laboring": false
  }, {
      "id": "25.382",
      "name": "Руководитель сервисного центра",
      "laboring": false
  }, {
      "id": "25.383",
      "name": "Менеджер по сервису - сетевые и телекоммуникационные технологии",
      "laboring": false
  }, {
      "id": "25.384",
      "name": "Менеджер по сервису - промышленное оборудование",
      "laboring": false
  }, {
      "id": "25.385",
      "name": "Менеджер по сервису - транспорт",
      "laboring": false
  }, {
      "id": "25.386",
      "name": "Инсталляция и настройка оборудования",
      "laboring": false
  }]
}, {
  "id": "12",
  "name": "Консультирование",
  "specializations": [{
      "id": "12.746",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "12.5",
      "name": "Internet, E-Commerce",
      "laboring": false
  }, {
      "id": "12.6",
      "name": "Knowledge management",
      "laboring": false
  }, {
      "id": "12.7",
      "name": "PR Consulting",
      "laboring": false
  }, {
      "id": "12.92",
      "name": "Информационные технологии",
      "laboring": false
  }, {
      "id": "12.97",
      "name": "Исследования рынка",
      "laboring": false
  }, {
      "id": "12.122",
      "name": "Корпоративные финансы",
      "laboring": false
  }, {
      "id": "12.180",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "12.197",
      "name": "Организационное консультирование",
      "laboring": false
  }, {
      "id": "12.251",
      "name": "Реинжиниринг бизнес процессов",
      "laboring": false
  }, {
      "id": "12.252",
      "name": "Реинжиниринг, Аутсорсинг финансовой функции",
      "laboring": false
  }, {
      "id": "12.280",
      "name": "Стратегия",
      "laboring": false
  }, {
      "id": "12.322",
      "name": "Управление практикой",
      "laboring": false
  }, {
      "id": "12.326",
      "name": "Управление проектами",
      "laboring": false
  }, {
      "id": "12.331",
      "name": "Управленческое консультирование",
      "laboring": false
  }, {
      "id": "12.376",
      "name": "Недвижимость",
      "laboring": false
  }]
}, {
  "id": "14",
  "name": "Наука, образование",
  "specializations": [{
      "id": "14.749",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "14.762",
      "name": "Дошкольное образование",
      "laboring": false
  }, {
      "id": "14.37",
      "name": "Биотехнологии",
      "laboring": false
  }, {
      "id": "14.60",
      "name": "Гуманитарные науки",
      "laboring": false
  }, {
      "id": "14.87",
      "name": "Инженерные науки",
      "laboring": false
  }, {
      "id": "14.91",
      "name": "Информатика, Информационные системы",
      "laboring": false
  }, {
      "id": "14.141",
      "name": "Математика",
      "laboring": false
  }, {
      "id": "14.169",
      "name": "Науки о Земле",
      "laboring": false
  }, {
      "id": "14.178",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "14.217",
      "name": "Преподавание",
      "laboring": false
  }, {
      "id": "14.340",
      "name": "Физика",
      "laboring": false
  }, {
      "id": "14.349",
      "name": "Химия",
      "laboring": false
  }, {
      "id": "14.355",
      "name": "Экономика, Менеджмент",
      "laboring": false
  }, {
      "id": "14.364",
      "name": "Языки",
      "laboring": false
  }]
}, {
  "id": "6",
  "name": "Управление персоналом, тренинги",
  "specializations": [{
      "id": "6.758",
      "name": "Другое",
      "laboring": false
  }, {
      "id": "6.107",
      "name": "Компенсации и льготы",
      "laboring": false
  }, {
      "id": "6.184",
      "name": "Начальный уровень, Мало опыта",
      "laboring": false
  }, {
      "id": "6.247",
      "name": "Развитие персонала",
      "laboring": false
  }, {
      "id": "6.254",
      "name": "Рекрутмент",
      "laboring": false
  }, {
      "id": "6.309",
      "name": "Тренинги",
      "laboring": false
  }, {
      "id": "6.319",
      "name": "Управление персоналом",
      "laboring": false
  }, {
      "id": "6.336",
      "name": "Учет кадров",
      "laboring": false
  }]
}]

const specializationTypesUpdated = specializationTypes.map(item => ({ name: item["name"] }));

let specializationsUpdated = [];
specializationTypes.forEach((item, index) => {
  item["specializations"].forEach(spec => {
    specializationsUpdated.push({
      name: spec["name"],
      specializationTypeId: index+1,
    })
  })
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SpecializationTypes', specializationTypesUpdated, {});

    await queryInterface.bulkInsert('Specializations', specializationsUpdated, {});
    
  }, 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SpecializationTypes', null, {});
  }
};
