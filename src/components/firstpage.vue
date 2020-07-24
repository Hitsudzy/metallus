<template>
    <div class="home">
      <transition name="callBackArea">
      <div class="callBackArea" v-if="visible" style="transition: .5s">
        <div class="black" v-on:click="visible = !visible"></div>
        <ul id="callBackGrid">
          <li class="hex">
            <a class="hexIn" id="callbackPopUp">
                <div class="rectangle">
                  <input class="rectangleInput" type="text" placeholder="Ваше имя">
                </div>
                <div class="rectangle2">
                  <input class="rectangleInput" type="text" placeholder="Ваш номер телефона">
                </div>
                <div class="rectangle3">
                  <input class="rectangleInput" type="text" placeholder="Ваш e-mail">
                </div>
                <div class="rectangle4">
                  <label>
                  <input type="checkbox"/>
                  <span id="price">Хочу получить прайс</span>
                </label>
                </div>
                <div class="rectangle5">
                  Отправить
                </div>
                <div class="rectangle6">
                  Поделиться:
                </div>
                <div class="rectangle7">
                  <i class="share fab fa-twitter" style="font-size: 24px; margin-left: -36px; cursor: pointer;"></i>
                  <i class="share fab fa-vk" style="font-size: 24px; cursor: pointer;"></i>
                  <i class="share fab fa-facebook" style="font-size: 24px; margin-left: 42px; cursor: pointer;"></i>
                </div>
            </a>
          </li>
        </ul>
      </div>
      </transition>

      <div class="ovalGroup">
        <div class="activeOval"></div>
        <div class="deActiveOval"></div>
      </div>
      <div class="logo">
        <div></div>
        <div class="logotype">
          <div class="m"> <img src="../images/logo.png" style="width:60%"> </div>
          <div class="metallus"> <img src="../images/metallus.png" style="width:60%"> </div>
        </div>
        <div class="callBack" v-on:click="visible = !visible"> Позвоните мне </div>
      </div>
      <div class="header">
        Компания по изготовлению<br> металлоконструкций
      </div>
      <div class="middle">
        Делая упор на фактор честности и доброжелательное отношение к любому заказчику, мы предлагаем вам комфортный сервис и долгосрочное сотрудничество. В штате наших сотрудников - специалисты с огромным опытом работы на рынке металла. Менеджеры отдела продаж всегда готовы дать консультацию и помочь в выборе, оперативно собрать заявку любой сложности, а профессиональные водители-экспедиторы доставят продукцию на ваш объект точно в оговоренные сроки и в требуемой комплектации.
      </div>
      <div class="bitmap"> <img src="../images/bitmap.png"> </div>
    </div>
</template>
<script>
module.exports = {
 data: function () {
    return {
      visible: false
    }
  }
}
</script>
<style scopped>
/* PAGE */
.home{
  background-image: url('../images/group8.png');
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  -webkit-user-select: none;
}
/* NAVIGATION */
.ovalGroup{
  position: absolute;
  top: 50%;
  left: 1%
}
.activeOval, .deActiveOval{
  width: 10px;
  height: 10px;
  border: 1px solid #D8D8D8;
  border-radius: 50%;
  margin: 10px 0px;
}
.activeOval{background: #D8D8D8;}

/* ELEMENTS */
.logo, .header, .middle, .bitmap{
  max-width: 1200px;
  width: 60%;
  text-align: center;
}
.logo{
  display: grid;
  grid-template-columns: 33% 33% 33%;
  margin: 5px 0px;
}
.header{
  font-family: "RobotoMedium";
  font-style: normal;
  font-size: 60px;
  line-height: 58px;
}
.middle{
  font-family: 'RobotoThin';
  font-style: normal;
  font-size: 25px;
  line-height: 35px;
  width: 70%;
}
.callBack{
  height: 40%;
  width: 70%;
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  cursor: pointer;
}
.callBack:hover{border-color: #FF6718;color: #FF6718;}


/* callbackArea */

.callBackArea-enter-active, .callBackArea-leave-active{
  transition: 1s;
}
.callBackArea-enter, .callBackArea-leave-to{
  opacity: 0;
}

.rectangleInput{
  text-align: left !important;
  width: 90% !important;
  border-bottom: none !important;
  font-family: 'RobotoLight' !important;
  margin: 0 !important;
}
#price{
  color: #ffffff !important;
  font-family: 'RobotoLight';
  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  width: 249px;
  text-align: left;
  margin-left: 20px;
}

.rectangle, .rectangle2, .rectangle3, .rectangle5{
  margin-bottom: 55%;
  position: absolute;
  width: 249px;
  height: 42px;
  background: #FFFFFF;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.rectangle2{
  margin-top: 25%;
}
.rectangle3{
  margin-top: 50%;
}
.rectangle4{
  margin-top: 5%;
  position: absolute;
  width: 249px;
  height: 42px;
  display: flex;
  align-items: flex-end;
}
.rectangle5{
  margin-top: 95%;
  background: #FF6718;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  font-family: 'RobotoLight';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 12px;
}
.rectangle6{
  margin-top: 65%;
  position: absolute;
  font-family: 'RobotoLight';
  font-style: normal;
  font-weight: 300;
  font-size: 11px;
}
.rectangle7{
  margin-top: 75%;
  margin-right: 5%;
}
.callBackArea{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top:0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 5s;
}
.black{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top:0;
  background-color: black;
  opacity: 0.7;
}
/* HEXAGONS AREA */
#callBackGrid {
    overflow: hidden;
    width: 100%;
    padding:0.5% 0;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#callbackPopUp{
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(../images/polygon.png);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
}
</style>
