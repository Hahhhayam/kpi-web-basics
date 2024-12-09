import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import Button from "./components/Button";

function Task1() {
    return (
        <div className="App">
            <Header size="medium" data="Решетняк Сергій Олексійович" />
            <Content
                data={["Дата народження: 21 листопада 2004 року, місто: Сан-Франциско, США",
                    "Освіта: Школа #25, Краматорськ"]}/>

            <Header size="small" data="Мої хобі:"/>
            <Content
                data={["Читання наукової літератури",
                    "Подорожі",
                    "Гра на гітарі"]}
                action={[1, 2]}/>

            <Header size="small" data="Три улюблені книги:"/>
            <Content
                data={["«Гаррі Поттер і філософський камінь» — Дж.К.Роулінг",
                    "«Вбивство в 'Східному експресі'» — Агата Крісті",
                    "«.NET 9» — Ендрю Лок та Троєлсен"]}/>

            <Content
                data={["Моє улюблене місто — Краматорськ.\n" +
                "Краматорськ - місто в Донецькій області України, адміністративний центр Краматорського району та Краматорської міської громади.\n" +
                "З 11 жовтня 2014 року фактично виконує функції адміністративного центру області."]}/>

            <div id="images">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Myru_Square_in_Kramatorsk.jpg/1200px-Myru_Square_in_Kramatorsk.jpg"/>
            </div>
            <Button func={() => {
                let images = document.getElementById("images");
                images.innerHTML += "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Myru_Square_in_Kramatorsk.jpg/1200px-Myru_Square_in_Kramatorsk.jpg\" alt=\"Фото Краматорськ\">";
            }} label='add'/>
            <Button func={() => {
                let images = document.getElementById("images");
                const lastImage = images.lastElementChild
                if (lastImage.classList.contains("zoom-out")) {
                    lastImage.classList.remove("zoom-out");
                    return;
                }
                lastImage.classList.add("zoom-in");
            }} label='zoomIn' />
            <Button func={() => {
                let images = document.getElementById("images");
                const lastImage = images.lastElementChild
                if (lastImage.classList.contains("zoom-in")) {
                    lastImage.classList.remove("zoom-in");
                    return;
                }
                lastImage.classList.add("zoom-out");
            }} label='zoomOut'/>
            <Button func={() => {
                let images = document.getElementById("images");
                images.removeChild(images.lastElementChild);
            }} label='remove'/>

            <Content
                data={["Більше про Краматорськ ви можете знайти тут."]}></Content>
        </div>
    );
}

export default Task1;
