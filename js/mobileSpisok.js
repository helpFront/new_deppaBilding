const mobileSpisok = `
                <div class="spisok__row">
                    <div class="spisok__block spisok__block_row">
                        <div class="spisok__first-row">
                            <img src="img/spisok/ico6.jpg" alt="комплексное обслуживание">
                            <h5>Комплексное обслуживание</h5>
                        </div>
                        <div class="spisok__info spisok__info_left">
                            <p>Наш сервис построен таким образом: чем больше услуг вы отдаете нам на обслуживание, тем больше времени сможете уделить своему бизнесу. Все процессы сервиса подготовлены для компаний разного уровня</p>
                        </div>
                    </div>
                </div>
                <div class="spisok__row">
                <div class="spisok__block spisok__block_row">
                    <div class="spisok__first-row">
                        <img src="img/spisok/ico3.jpg" alt="комплексное обслуживание">
                        <h5>Короткие сроки выполнения</h5>
                    </div>
                    <div class="spisok__info spisok__info_left">
                        <p>Самое важное в нашей работе с каждым клиентом, это обязательства договора. Мы тщетно соблюдаем каждый пункт и с пониманием относимся к любым пожеланиям и требованиям.</p>
                    </div>
                </div>
            </div>
            <div class="spisok__row">
                <div class="spisok__block spisok__block_row">
                    <div class="spisok__first-row">
                        <img src="img/spisok/ico4.jpg" alt="комплексное обслуживание">
                        <h5>Гарантия качества любой услуги или товара</h5>
                    </div>
                    <div class="spisok__info spisok__info_left">
                        <p>Качественное оказание услуги и лучшие товары - наш дивиз! Только мы предоставляем нашим клиентам такие гарантии, которые смогут убедить их в надёжности и качестве нашей компании.</p>
                    </div>
                </div>
            </div>
            <div class="spisok__row">
                <div class="spisok__block spisok__block_row">
                    <div class="spisok__first-row">
                        <img src="img/spisok/ico5.jpg" alt="комплексное обслуживание">
                        <h5>Выгодные условия оплаты</h5>
                    </div>
                    <div class="spisok__info spisok__info_left">
                        <p>Наша компания обеспечивает гибкую ценовую политику, превосходное качество, индивидуальный подход</p>
                    </div>
                </div>
            </div>
            <div class="spisok__row">
                <div class="spisok__block spisok__block_row">
                    <div class="spisok__first-row">
                        <img src="img/spisok/ico1.jpg" alt="комплексное обслуживание">
                        <h5>Выезд специалиста на объект и расчёт сметы бесплатно</h5>
                    </div>
                    <div class="spisok__info spisok__info_left">
                        <p>Выезд специалиста на ваш объект и подсчёт сметы в течении 24 часов. Все услуги, которые будут проведены, абсолютно бесплатно.</p>
                    </div>
                </div>
            </div>`

if (width < 550) {
    document.querySelector('.spisok').innerHTML = mobileSpisok;
}

if (width < 450) {
    document.querySelector(`hr`).remove();
    document.querySelector(`.project:last-child div:last-child`).remove();
}

