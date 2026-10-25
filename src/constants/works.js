export const WORKS = [
  { id: 'zabor', title: 'Забор' },
  { id: 'krysha', title: 'Крыша' },
  { id: 'terassa', title: 'Терасса' },
];

export const FENCE_WORKS = [
  // Демонтаж
  { id: 'demontazh-setki-rabica',        title: 'Демонтаж сетки рабица',              unit: 'п.м.', price: 4 },
  { id: 'demontazh-profnastila',         title: 'Демонтаж профнастила',               unit: 'п.м.', price: 7.5 },
  { id: 'demontazh-evroshtaketnika',     title: 'Демонтаж евроштакетника',            unit: 'п.м.', price: 9.5 },
  { id: 'demontazh-derevyannogo-shtaketnika', title: 'Демонтаж деревянного штакетника', unit: 'п.м.', price: 8 },
  { id: 'demontazh-kirpichnoy-kladki',   title: 'Демонтаж кирпичной кладки',          unit: 'м²',   price: 12 },
  { id: 'demontazh-zhelezobetonnyh-plit', title: 'Демонтаж железобетонных плит',      unit: 'п.м.', price: 60 },
  { id: 'demontazh-metallokonstrukciy',  title: 'Демонтаж металлоконструкций',        unit: 'п.м.', price: 12 },
  { id: 'demontazh-stolby-zabitye',      title: 'Демонтаж столбов забитых',           unit: 'шт.',  price: 6 },
  { id: 'demontazh-stolby-zabetonirovannye', title: 'Демонтаж столбов забетонированных', unit: 'шт.', price: 9 },
  { id: 'demontazh-lentochnogo-fundamenta', title: 'Демонтаж ленточного фундамента',   unit: 'п.м.', price: 50 },
  { id: 'demontazh-kalitki',             title: 'Демонтаж калитки',                   unit: 'шт.',  price: 28 },
  { id: 'demontazh-vorot',               title: 'Демонтаж ворот',                     unit: 'шт.',  price: 48 },

  // Подготовка и фундамент
  { id: 'razmetka-i-burenie-lunok',      title: 'Разметка участка и бурение лунок',   unit: 'шт.',  price: 20 },
  { id: 'ustroystvo-lentochnogo-fundamenta', title: 'Устройство ленточного фундамента', unit: 'п.м.', price: 65 },
  { id: 'ustanovka-stolbov-s-betonirovaniem', title: 'Установка столбов с бетонированием', unit: 'шт.', price: 25 },

  // Монтаж
  { id: 'montazh-poperechnyh-lag',       title: 'Монтаж поперечных лаг',              unit: 'п.м.', price: 8 },
  { id: 'gruntovanie-i-pokraska-metallokonstrukciy', title: 'Грунтование и покраска металлоконструкций', unit: 'п.м.', price: 6 },
  { id: 'kreplenie-profnastila',         title: 'Крепление профнастила',              unit: 'п.м.', price: 25 },
  { id: 'kreplenie-evroshtaketnika',     title: 'Крепление евроштакетника',           unit: 'п.м.', price: 32 },
  { id: 'kreplenie-3d-setki',            title: 'Крепление 3D-сетки',                 unit: 'п.м.', price: 18 },
  { id: 'kreplenie-derevyannogo-shtaketnika', title: 'Крепление деревянного штакетника', unit: 'п.м.', price: 20 },

  // Калитки и ворота
  { id: 'ustanovka-kalitki',             title: 'Установка калитки',                  unit: 'шт.',  price: 300 },
  { id: 'ustanovka-vorot-raspashnyh',    title: 'Установка ворот распашных',          unit: 'шт.',  price: 750 },
  { id: 'ustanovka-vorot-otkatnyh-bez-motora', title: 'Установка ворот откатных (без мотора)', unit: 'шт.', price: 1200 },
  { id: 'ustanovka-vorot-otkatnyh-s-avtomatikoy', title: 'Установка ворот откатных (с автоматикой)', unit: 'шт.', price: 3000 },
];

export const TERRACE_WORKS = [
  // Демонтаж
  { id: 'demontazh-dpk-s-sohraneniem',        title: 'Демонтаж ДПК (с сохранением)',                    unit: 'м²',  price: 15 },
  { id: 'demontazh-dpk-bez-sohraneniya',      title: 'Демонтаж ДПК (без сохранения)',                   unit: 'м²',  price: 11 },
  { id: 'demontazh-listvennicy-s-sohraneniem', title: 'Демонтаж лиственницы (с сохранением)',           unit: 'м²',  price: 25 },
  { id: 'demontazh-listvennicy-bez-sohraneniya', title: 'Демонтаж лиственницы (без сохранения)',        unit: 'м²',  price: 14 },
  { id: 'demontazh-plitki-bez-sohraneniya',   title: 'Демонтаж плитки (без сохранения)',                unit: 'м²',  price: 15 },
  { id: 'demontazh-lag',                      title: 'Демонтаж лаг (дерево или металл)',                unit: 'п.м.', price: 6 },
  { id: 'demontazh-betonirovannyh-stolbikov', title: 'Демонтаж бетонированных столбиков',               unit: 'шт.', price: 20 },
  { id: 'demontazh-monolitnogo-fundamenta',   title: 'Демонтаж монолитного фундамента',                 unit: 'м²',  price: 150 },
  { id: 'demontazh-gidroizolyacii',           title: 'Демонтаж старого гидроизоляционного покрытия',    unit: 'м²',  price: 30 },

  // Подготовка и основание
  { id: 'vyemka-grunta-pod-podushku',         title: 'Выемка грунта под песчаную подушку',              unit: 'м³',  price: 30 },
  { id: 'ukladka-geotekstilya',               title: 'Укладка геотекстиля',                             unit: 'м²',  price: 19 },
  { id: 'ustanovka-svay',                     title: 'Установка свай',                                  unit: 'шт.', price: 40 },
  { id: 'zalivka-monolita',                   title: 'Заливка монолита',                                unit: 'м³',  price: 140 },

  // Каркас и лаги
  { id: 'montazh-plastikovyh-opor-pod-lagi',  title: 'Монтаж пластиковых опор под лаги',                unit: 'шт.', price: 6 },
  { id: 'montazh-metallokarkasa',             title: 'Монтаж металлокаркаса',                           unit: 'кг.', price: 14 },
  { id: 'montazh-lag-dpk',                    title: 'Монтаж лаг ДПК',                                  unit: 'п.м.', price: 9 },
  { id: 'montazh-derevyannyh-lag',            title: 'Монтаж деревянных лаг',                           unit: 'п.м.', price: 8 },

  // Настил
  { id: 'montazh-dpk-pryamaya',               title: 'Монтаж ДПК прямая',                               unit: 'м²',  price: 32 },
  { id: 'montazh-dpk-diagonalnaya',           title: 'Монтаж ДПК диагональная',                         unit: 'м²',  price: 45 },
  { id: 'montazh-mpk-pryamaya',               title: 'Монтаж МПК прямая',                               unit: 'м²',  price: 95 },
  { id: 'montazh-mpk-diagonalnaya',           title: 'Монтаж МПК диагональная',                         unit: 'м²',  price: 120 },
  { id: 'montazh-listvennicy-otkrytyy-krepezh', title: 'Монтаж лиственницы открытый крепёж',            unit: 'м²',  price: 28 },
  { id: 'montazh-listvennicy-skrytyy-montazh', title: 'Монтаж лиственницы скрытый монтаж',              unit: 'м²',  price: 40 },
  { id: 'trotuarnaya-plitka',                 title: 'Тротуарная плитка',                               unit: 'м²',  price: 32 },
  { id: 'keramogranit-na-beton',              title: 'Керамогранит на бетонное основание',              unit: 'м²',  price: 45 },

  // Доборные элементы
  { id: 'zapilka-uglov-45',                   title: 'Запилка углов под 45°',                           unit: 'п.м.', price: 13 },
  { id: 'montazh-ugolka',                     title: 'Монтаж уголка',                                   unit: 'п.м.', price: 8 },
  { id: 'zashivka-torca',                     title: 'Зашивка торца',                                   unit: 'п.м.', price: 25 },
  { id: 'pokrytie-doski-maslom-2-sloya',      title: 'Покрытие доски маслом в 2 слоя',                  unit: 'м²',  price: 12 },
  { id: 'ustanovka-ograzhdeniy',              title: 'Установка ограждений',                            unit: 'п.м.', price: 55 },
  { id: 'montazh-stupeni',                    title: 'Монтаж ступени',                                  unit: 'п.м.', price: 35 },
];

export const ROOF_WORKS = [
  // Демонтаж
  { id: 'demontazh-shifera',                     title: 'Демонтаж шифера',                                   unit: 'м²',  price: 6 },
  { id: 'demontazh-falcevoy-krovli',             title: 'Демонтаж фальцевой кровли',                         unit: 'м²',  price: 8 },
  { id: 'demontazh-metallocherepicy',            title: 'Демонтаж металлочерепицы',                          unit: 'м²',  price: 7 },
  { id: 'demontazh-ondulina',                    title: 'Демонтаж ондулина',                                 unit: 'м²',  price: 6 },
  { id: 'demontazh-glinyanoy-cementnoy',         title: 'Демонтаж глиняной/цементной черепицы',              unit: 'м²',  price: 15 },
  { id: 'demontazh-obreshetki',                  title: 'Демонтаж обрешётки',                                unit: 'м²',  price: 5 },
  { id: 'demontazh-stropilnoy-sistemy',          title: 'Демонтаж стропильной системы',                      unit: 'м²',  price: 12 },
  { id: 'demontazh-teplo-gidroizolyacii',        title: 'Демонтаж тепло-/гидроизоляции',                     unit: 'м²',  price: 4 },
  { id: 'demontazh-vodostochnoy-sistemy',        title: 'Демонтаж водосточной системы',                      unit: 'п.м.', price: 5 },

  // Подготовка и каркас
  { id: 'obrabotka-dereva',                      title: 'Обработка дерева от гниения и пожара',              unit: 'м²',  price: 35 },
  { id: 'montazh-opornogo-brusa',                title: 'Монтаж опорного бруса',                             unit: 'п.м.', price: 16 },
  { id: 'ustanovka-stropilnoy-prostaya',         title: 'Установка стропильной системы (простая двухскатная)', unit: 'м²', price: 25 },
  { id: 'ustanovka-stropilnoy-slozhnaya',        title: 'Установка стропильной системы (сложная вальмовая, с изгибами)', unit: 'м²', price: 40 },

  // Пирог кровли
  { id: 'ukladka-membran-i-kontrbrusa',          title: 'Укладка ветро-/влаго-мембран и монтаж контрбруса',  unit: 'м²',  price: 5.5 },
  { id: 'uteplenie-minvatoy',                    title: 'Утепление кровли минватой',                         unit: 'м²',  price: 11 },
  { id: 'ukladka-paroizolyacii',                 title: 'Укладка пароизоляции',                              unit: 'м²',  price: 4.5 },
  { id: 'obreshetka-pod-metallocherepicu',       title: 'Установка обрешётки под металлочерепицу',           unit: 'м²',  price: 8 },
  { id: 'obreshetka-sploshnaya-osb',             title: 'Установка обрешётки сплошной (ОСБ) под мягкую кровлю', unit: 'м²', price: 13 },

  // Кровельное покрытие
  { id: 'montazh-profnastila',                   title: 'Монтаж профнастила (прямые скаты)',                 unit: 'м²',  price: 19 },
  { id: 'montazh-metallocherepicy-prostaya',     title: 'Монтаж металлочерепицы (простая)',                  unit: 'м²',  price: 22 },
  { id: 'montazh-metallocherepicy-slozhnaya',    title: 'Монтаж металлочерепицы (сложная)',                  unit: 'м²',  price: 28 },
  { id: 'montazh-gibkoy-cherepicy',              title: 'Монтаж гибкой черепицы с подкладочным ковром',      unit: 'м²',  price: 32 },
  { id: 'montazh-klikfalc',                      title: 'Монтаж кликфальца',                                 unit: 'м²',  price: 35 },

  // Доборные элементы и прочее
  { id: 'montazh-planok-i-endov',                title: 'Монтаж коньковых, карнизных, торцевых планок, ендов', unit: 'п.м.', price: 10 },
  { id: 'ustanovka-primykaniy',                  title: 'Установка примыканий к дымоходам и стенам',         unit: 'шт.', price: 95 },
  { id: 'montazh-vodostochnoy-sistemy',          title: 'Монтаж водосточной системы',                        unit: 'п.м.', price: 15 },
  { id: 'podshivka-svesov',                      title: 'Подшивка свесов кровли (софиты)',                   unit: 'п.м.', price: 23 },
  { id: 'ustanovka-snegoderzhateley',            title: 'Установка снегодержателей',                         unit: 'п.м.', price: 18 },
  { id: 'montazh-mansardnogo-okna',              title: 'Монтаж мансардного окна',                           unit: 'шт.', price: 350 },
];