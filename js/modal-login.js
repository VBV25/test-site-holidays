// Скрипт для работы c модальными окнами

(function() {
    /*присваеваем переменной спан для вывода ошибкок заполнения поля ЛОГИН*/
    var spanLoginErr = document.querySelector('.span-login-err');
    /**/

    /*присваеваем переменной спан для вывода ошибкок заполнения поля ПАРОЛЬ*/
    var spanPasswordErr = document.querySelector('.span-password-err');
    /**/

    /*-переменная ЛИНК обращается к классу кнопки вызывающей форму-*/
    var link = document.querySelector('.login-link');
    /**/

    /*- переменная ПОПАП это сама секция с формой(сама форма)-*/
    var popap = document.querySelector('.modal-login');
    /**/

    /*-ОВЕРЛЕЙ это див элемент который находится за гранью формы(отдельный элемент)-*/
    var overlay = document.querySelector('.modal-overlay-login');
    /**/

    /*-КЛОЗЕ это переменная связана с кнопкой закрытия формы-*/
    var close = document.querySelector('.modal-close-login');
    /**/

    /*-данной переменной ЛОГИН мы присваеваем значение переменной попап (обертку поля с формой) в котором ищем поле инпут со значением нейм,присваеваиваем введенное в инпут у которого селектор нейм равен ПАРОЛЬ-*/
    var login = popap.querySelector('[name=login]');
    /**/

    /*-данной переменной ПАРОЛЬ мы присваеваем значение переменной попап (обертку поля с формой) в котором ищем поле инпут со значением нейм,присваеваиваем введенное в инпут у которого селектор нейм равен ПАРОЛЬ-*/
    var password = popap.querySelector('[name=password]');
    /**/

    /*-данной переменной ФОРМ мы присваеваем значение переменной попап(т.е. блок обертку в которой есть форма ) в которой мы находим саму форму и ее присваиваем-*/
    var form = popap.querySelector('.login-form');
    /**/

    /*-В переменную СТОРАДЖЕ мы заносим данные для хранения. вводя данные нажимая на кнопку в переменную запишется вводимый логин в поле с помощью метода ГЕТИТЕМ он возвращает это значение, а ЛОКАЛСТОРЕДЖ его запоминает-*/
    var storage = localStorage.getItem('login');
    /**/

    /*-----------------------------------------------------------*/
    /*
		 *	!!!		querySelector() — возвращает первый элемент ( Element ) документа, который соответствует указанному селектору или группе селекторов. Если совпадений не найдено, возвращает значение null 

		 *  !!!		localStorage — новая особенность HTML5, позволяющая хранить любую информацию в пользовательском браузере благодаря JavaScript. Это старый добрый JS-объект, в который можно добавлять и удалять пары ключ/значение.
		
		 *	!!!		JavaScript метод getItem() — объекта Storage при передаче имени ключа возвращает значение этого ключа, или null, если ключ не существует в данном объекте хранилища (Storage).
		 * 
		 * 
		 *	!!!		addEventListener —  это способ зарегистрировать обработчик события, описанный в документации W3C DOM. Вот список преимуществ его использования: Позволяет добавлять множество обработчиков для одного события.
		 * 
		 * 
		 *	!!!		Метод preventDefault () интерфейса Event  —  сообщает User agent, что если событие не обрабатывается явно, его действие по умолчанию не должно выполняться так, как обычно.
		 * 
		 * 
		 *	!!!		classList  —  это специальный объект с методами для добавления/удаления одного класса. Так что мы можем работать как со строкой полного класса, используя className , так и с отдельными классами, используя classList 
		 * 
		 * 
		 * 	!!!		.VALUE (свойство) - устанавливает или возвращает значение атрибута.
		 * 
         * 
		 * 	!!!		nextElementSibling - содержит следующий элемент, находящийся в этом же родителе. Если такого элемента нет - возвращается null.
		 * 
         * 
		 * 	!!!		Метод test() выполняет поиск сопоставления регулярного выражения указанной строке. Возвращает true или false .
		 * 
         *
		 * 	!!!		setItem() -  объекта Storage при передаче имени и значения ключа этот ключ добавляется в хранилище (объект Storage) или обновляется, если он уже существует. Для того, чтобы получить из хранилища (объект Storage) значение определенного ключа воспользуйтесь методом getItem().
		 * 
		 * /
/*-----------------------------------------------------------*/

    /*-обращаемся к переменной ЛИНК и с помощью присвоения обработчика событий присваиваем ей действие по клику. при клике срабатывает функция(событие)-,,,, -*/
    link.addEventListener('click', function(event) {
        /*событиеюметод сообщает если что то не так то действие не выполняется как обычно*/
        event.preventDefault(); //команда отправки формы не выполняется

        /*Присваеваем переменной ПОПАП (блок содержащий форму) новый класс который показывает нашу форму с анимацией(дисплей-блок)*/
        popap.classList.add('modal-show');

        /*Переменной (диву который за пределами формы) присваиваем новый класс тем самым делаем его видимым*/
        overlay.classList.add('overlay-show');

        /*делаем фокус на поле логина через переменную ЛОГИН*/
        login.focus();

        /*если Сторадже(переменная для хранения логинов)*/
        if (storage) {
            login.value = storage; //данные переменной логин возращают значение в переменную сторадж(сохраняя там это значение)
            password.focus(); //происходит фокус на пароле
        } else {
            login.focus(); //фокус на логине
        }
    });
    /**/

    /*при нажатии на кнопку закрытия срабатывает метод назначения события данной кнопке*/
    close.addEventListener('click', function(event) {
        event.preventDefault(); //пояснение выше
        popap.classList.remove('modal-show'); //скрываем блок формы меняя его класс на класс закрытия с анимацией
        overlay.classList.remove('overlay-show'); //скрываем див с затемнением фона
        login.nextElementSibling.innerHTML = ''; // очищаем поле логина
        password.nextElementSibling.innerHTML = ''; //очищаем поле пароля
        login.nextElementSibling.classList.remove('error-message'); //удаляет клас ошибки у логина
        login.classList.remove('error-background'); //удаляет цвет заливки ошибки у логина
        password.nextElementSibling.classList.remove('error-message'); //удаляет класс ошибки у пароля
        password.classList.remove('error-background'); //удаляет цвет заливки ошибки у пароля
    });

    /**/

    /*обращаемся к диву (заливка фона всего окна при всплывании формы) при клике срабатывает функция(при нажатии на фон все элементы скрываются как при нажатии на кнопку закрыть*/
    overlay.addEventListener('click', function() {
        popap.classList.remove('modal-show'); //удаляет класс отображения у модального окна с формой(прячет его)
        this.classList.remove('overlay-show'); //удаляет у текущго элемента(дива с фоном) класс отображения
        login.nextElementSibling.innerHTML = ''; // очищаем поле логина
        password.nextElementSibling.innerHTML = ''; //очищаем поле пароля
        login.nextElementSibling.classList.remove('error-message'); //удаляет клас ошибки у логина
        login.classList.remove('error-background'); //удаляет цвет заливки ошибки у логина
        password.nextElementSibling.classList.remove('error-message'); //удаляет класс ошибки у пароля
        password.classList.remove('error-background'); //удаляет цвет заливки ошибки у пароля
    });

    /* */

    /*Обращаемся ко всему документу при нажатии на кнопку ESC и так же закрываем модальное окно с формой*/
    /*все описания подобны выше*/
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 27) {
            popap.classList.remove('modal-show');
            overlay.classList.remove('overlay-show');
            login.nextElementSibling.innerHTML = '';
            password.nextElementSibling.innerHTML = '';
            login.nextElementSibling.classList.remove('error-message');
            login.classList.remove('error-background');
            password.nextElementSibling.classList.remove('error-message');
            password.classList.remove('error-background');
        }
    });

    /* */

    /*Обращаемся к самой форме при команде отправить(сабмит команда отправления формы) и тем самым проверяем поля на заполнение и на правильность заполнения */

    form.addEventListener('submit', function(event) {
        var pattern = /^[A-Za-z\d]+$/; // присваиваем переменной паттерн значение роверки на соответствие введенным символам(буквы латинича как заглавные так и строчные и цифровые значения)

        if (!login.value) {
            //данная запись показывает ЕСЛИ в поле логина не показывается и не возвращается событие то происходит следующее
            event.preventDefault(); //если событие не обрабатывается явно то его действие по умолчанию не должно выполняться(т.е. форма не отправляется)
            spanLoginErr.innerHTML = 'Введите логин!'; //здесь в ставленный тег SPAN мы выводим текст ошибки что поле не заполнено
            spanLoginErr.classList.add('error-message'); //добавляем данному спану класс стилизации ошибки
            login.classList.add('error-background'); //присваеваем полю логин класс с фоном ошбки
        } else {
            // если первое действие не выполняется, т.е. поле заполнено, то срабатывает функция валидации(проверки на правильность заполнения формы)
            var loginResult = pattern.test(login.value); //присваиваем переменной значение: проводим сопоставление(проверку на совпадение) переменной паттерн и вводимыми значениями на соответствие знаков и присваиваем переменной значение true или false

            if (!loginResult) {
                //если результат не равен является false
                event.preventDefault(); //команда отправки формы не выполняется

                spanLoginErr.innerHTML = 'Только латинские буквы или цифры!'; //выводим сообщение предупреждения в SPAN ошибки
                spanLoginErr.classList.add('error-message'); //добавляем данному спану класс стилизации ошибки
                login.classList.add('error-background'); //присваеваем полю логин класс с фоном ошбки
            }

            localStorage.setItem('login', login.value); //хранимую в браузере с помощью js пару ключ/значение (логин пароль) получаем с помощью метода setItem, и вставляем сохраненный логин в поле логин ЕСЛИ ВСЕ СРАВНЕНИЕ ПРОШЛО ПРАВИЛЬНО
        }
        /* Здесь все так же как с логином*/
        if (!password.value) {
            event.preventDefault();

            spanPasswordErr.innerHTML = 'Введите пароль!';
            spanPasswordErr.classList.add('error-message');
            password.classList.add('error-background');
        } else {
            var passwordResult = pattern.test(password.value);

            if (!passwordResult) {
                event.preventDefault();

                spanPasswordErr.innerHTML = 'Только латинские буквы или цифры!';
                spanPasswordErr.classList.add('error-message');
                password.classList.add('error-background');
            }
        }
    });
})();