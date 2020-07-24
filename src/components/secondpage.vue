<template>
  <div class="activeBar">
    <div id="ovalGroup2"><div id="activeOval2"></div><div id="deactiveOval2"></div></div>
    <ul id="hexGrid">
      <li class="hex" style="display:'none'"></li><li class="hex" style="display:'none'"></li><li class="hex" style="display:'none'"></li>
      <li class="hex">
        <a class="hexIn" href="#" id="sert">
          <p>Сертификаты</p>
        </a>
      </li>
      <li class="hex">
        <a class="hexIn" href="#" id="contact">
          <p>Контакты</p>
        </a>
      </li>
      <li class="hex">
        <a class="hexIn" href="#" id="work">
          <p>Наши работы</p>
        </a>
      </li>
      <li class="hex">
        <a class="hexIn" href="#" id="services">
          <p>Услуги</p>
        </a>
      </li>
      <li class="hex">
        <a class="hexIn" href="#" id="reviews">
          <p>Отзывы</p>
        </a>
      </li>
    </ul>
    <div class="footer">
      <hr>
      <div class="footerContent">
        <div class="footerSubContentLeft">
          <i class="share fab fa-vk" style="font-size: 24px; margin: 0px 8px 0px 8px; cursor: pointer;"></i>
          <i class="share fab fa-facebook" style="font-size: 24px; margin: 0px 8px 0px 8px; cursor: pointer;"></i>
          <i class="share fab fa-twitter" style="font-size: 24px; margin: 0px 8px 0px 8px; cursor: pointer;"></i>
        </div>
        <div class="footerSubContentCenter">
          <p>ООО "МЕТАЛЛУС"<br>
            Офис: ПОМ/КОМ 9-Н/№7 Россия, Санкт-Петербург, проспект Стачек, 47<br>
            ИНН 7842156259 КПП 784201001 ОГРН 1187847190464 от 04.07.2018<br>
            Счет: 40702810532000005372<br>
            Банк: ФИЛИАЛ "САНКТ-ПЕТЕРБУРГСКИЙ" АО "АЛЬФА-БАНК"<br>
            Кор/сч. банка: 30101810600000000786<br><br>
            © Copyright 2020. All Rights Reserved.<br>
            This site was made Konstantin Krivokorytov.
            Designed by <a href="https://www.behance.net/toshka-punk769b" style="text-decoration: none; color: #ffffff;" target="_blank">Delendik.t</a></p>
        </div>
        <div class="footerSubContentRight">
          <div class="callBackActiveBar" role="button">Позвоните мне</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
</script>

<style scopped>
/* PAGE AREA */
.activeBar{
  background-image: url('../images/group5.png');
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.activeBarContent{
  max-width: 1200px;
  width: 80%;
  height: 80%;
  margin-top: 10px;
}
.callBackActiveBar{
  position: absolute;
  width: 180px;
  text-align: center;
  color: #ffffff;
  padding: 10px 5px 10px 5px;
  border: solid white 1px;
  cursor: pointer;
  font-family: "RobotoLight";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
}
.callBackActiveBar:hover{
  color: #ff6718;
  border-color: #ff6718;
}
#ovalGroup2{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#deactiveOval2, #activeOval2{
  width: 10px;
  height: 10px;
  border: 1px solid #D8D8D8;
  border-radius: 50%;
  position: absolute;
  left: 1.32%;
  right: 98.16%;
  top: 150%;
  bottom: 74.02%;
}
#activeOval2{
  margin-bottom: 10px;
  background-color: #D8D8D8;
  position: absolute;
  left: 1.32%;
  right: 98.16%;
  top: 152.5%;
  bottom: 75.49%;
}
.footer{
  color: #ffffff;
  max-width: 1200px;
  width: 60%;
  position: absolute;
  bottom: -101.5%;
}
.footerContent{
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.footerSubContentCenter, .footerSubContentLeft, .footerSubContentRight{
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footerSubContentCenter{
  text-align: center;
  font-family: "RobotoThin";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
}
.footerSubContentRight{
  width: 180px;
}
.share:hover{
  color: #ff6718;
}
.polygonZone{
  text-align: center;
}
/* HEXAGONS AREA */
#hexGrid {
    overflow: hidden;
    width: 60%;
    margin: 0 auto;
    margin-top: -27.5%;
    padding:0.5% 0;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
}
#hexGrid:after {
    content: "";
    display: block;
    clear: both;
}
.hex {

    position: relative;
    list-style-type: none;
    float: left;
    overflow: hidden;
    visibility: hidden;
    outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
    -webkit-transform: rotate(-60deg) skewY(30deg) translatez(-1px);
        -ms-transform: rotate(-60deg) skewY(30deg) translatez(-1px);
            transform: rotate(-60deg) skewY(30deg) translatez(-1px);

}
.hex * {
    position: absolute;
    visibility: visible;
    outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
    text-align: center;
}
.hexIn {
    display:block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    overflow: hidden;
    -webkit-transform: skewY(-30deg) rotate(60deg);
        -ms-transform: skewY(-30deg) rotate(60deg);
            transform: skewY(-30deg) rotate(60deg);
                transition: 0.5s;
}
.hexIn:hover{
  /* transform: skewY(-30deg) rotate(60deg) scale(1.2); */
}
/*** HEX CONTENT **********************************************************************/
#sert, #contact, #reviews, #services, #work{
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
#sert           {background-image: url('../images/sert.png');}
#contact        {background-image: url('../images/contact.png');}
#reviews        {background-image: url('../images/reviews.png');}
#services       {background-image: url('../images/services.png');}
#work           {background-image: url('../images/work.png');}
#sert:hover     {background-image: url('../images/sert-hover.png');}
#contact:hover  {background-image: url('../images/contact-hover.png');}
#reviews:hover  {background-image: url('../images/reviews-hover.png');}
#services:hover {background-image: url('../images/services-hover.png');}
#work:hover     {background-image: url('../images/work-hover.png');}
.hex p{
  top: calc(50% - 100px/2);
  font-family: 'RobotoLight';
  font-size: 26px;
  width: 100%;
  opacity: 0.6;
}
/*** HOVER EFFECT  **********************************************************************/
/*** SPACING AND SIZING *****************************************************************/
@media (min-width:1201px) { /* <- 5-4  hexagons per row */
  .hex {
      width: 30.666%; /* = (100-2) / 3 */
      padding-bottom: 37.720%; /* =  width / sin(60) */
  }
  .hex:nth-child(5n+4),
  .hex:nth-child(5n+5) {
      margin-top: -9.564%;
      margin-bottom: -8.264%;
      -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
          -ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
              transform: translateX(50%) rotate(-60deg) skewY(30deg);
  }
  .hex:nth-child(5n+4):last-child,
  .hex:nth-child(5n+5):last-child {
      margin-bottom: 0;
  }
  .hex:nth-child(5n+4) {
      margin-right: 3%;
      margin-left: 1.7%;
  }
  .hex:nth-child(5n+2) {
      margin-left: 3%;
      margin-right: 3%;
  }
  .hex:nth-child(5n+6) {
      clear: left;
  }
}
@media (max-width: 1200px) and (min-width:901px) {/* <- 4-3  hexagons per row */
    .hex {
        width: 24.25%; /* = (100-3) / 4 */
        padding-bottom: 28.001%; /* =  width / sin(60deg) */
    }
    .hex:nth-child(7n+5),
    .hex:nth-child(7n+6),
    .hex:nth-child(7n+7) {
        margin-top: -6.134%;
        margin-bottom: -6.134%;
        -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
            -ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
                transform: translateX(50%) rotate(-60deg) skewY(30deg);
    }
    .hex:nth-child(7n+5):last-child,
    .hex:nth-child(7n+6):last-child,
    .hex:nth-child(7n+7):last-child {
        margin-bottom: 0;
    }
    .hex:nth-child(7n+2),
    .hex:nth-child(7n+6) {
        margin-left: 1%;
        margin-right: 1%;
    }
    .hex:nth-child(7n+3) {
        margin-right: 1%;
    }
    .hex:nth-child(7n+8) {
        clear: left;
    }
    .hex:nth-child(7n+5) {
        clear: left;
        margin-left: 0.5%;
    }
}
@media (max-width: 900px) and (min-width:601px) { /* <- 3-2  hexagons per row */
    .hex {
        width: 32.666%; /* = (100-2) / 3 */
        padding-bottom: 37.720%; /* =  width / sin(60) */
    }
    .hex:nth-child(5n+4),
    .hex:nth-child(5n+5) {
        margin-top: -8.564%;
        margin-bottom: -8.564%;
        -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
            -ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
                transform: translateX(50%) rotate(-60deg) skewY(30deg);
    }
    .hex:nth-child(5n+4):last-child,
    .hex:nth-child(5n+5):last-child {
        margin-bottom: 0;
    }
    .hex:nth-child(5n+4) {
        margin-right: 1%;
        margin-left: 0.5%;
    }
    .hex:nth-child(5n+2) {
        margin-left: 1%;
        margin-right: 1%;
    }
    .hex:nth-child(5n+6) {
        clear: left;
    }
}
@media (max-width: 600px) { /* <- 2-1  hexagons per row */
    .hex {
        width: 49.5%; /* = (100-1) / 2 */
        padding-bottom: 57.158%; /* =  width / sin(60) */
    }
    .hex:nth-child(3n+3) {
        margin-top: -13.423%;
        margin-bottom: -13.423%;
        -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
            -ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
                transform: translateX(50%) rotate(-60deg) skewY(30deg);
    }
    .hex:nth-child(3n+3):last-child {
        margin-bottom: 0;
    }
    .hex:nth-child(3n+3) {
        margin-left: 0.5%;
    }
    .hex:nth-child(3n+2) {
        margin-left: 1%;
    }
    .hex:nth-child(3n+4) {
        clear: left;
    }
}
@media (max-width: 400px) {
    #hexGrid {
        font-size: 13px;
    }
}
</style>
