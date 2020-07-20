<template>
  <div class="main">
    <div id="ovalGroup1"><div id="activeOval1"></div><div id="deactiveOval1"></div></div>
    <div class="callback" role="button">Позвоните мне</div>
    <div class="content">
      <div class="firstPageLogo">
        <img src="../images/logo.png" srcset="../images/logo@2x.png 2x, ../images/logo@3x.png 3x" width='35%'>
        <img src="../images/metallus.png" width='35%'>
      </div>
      <div class="firstPage">
        Компания по изготовлению<br>металлоконтрукций
      </div>
      <div class="firstPageContent">
        <div>Делая упор на фактор честности и доброжелательное отношение к любому заказчику, мы предлагаем вам комфортный сервис и долгосрочное сотрудничество. В штате наших сотрудников - специалисты с огромным опытом работы на рынке металла. Менеджеры отдела продаж всегда готовы дать консультацию и помочь в выборе, оперативно собрать заявку любой сложности, а профессиональные водители-экспедиторы доставят продукцию на ваш объект точно в оговоренные сроки и в требуемой комплектации.</div>
      </div>
      <div class="bitmap">
        <img src="../images/bitmap.png" srcset="../images/bitmap@2x.png 2x, ../images/bitmap@3x.png 3x">
      </div>
    </div>
  </div>
</template>


<script>
</script>

<style scopped>
.main{
  background-image: url('../images/group8.png');
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  justify-content: center;
  -moz-user-select: none; /* Mozilla Firefox */
  -ms-user-select: none; /* Internet Explorer (не поддерживается) */
  -o-user-select: none; /* Opera Presto (не поддерживается) */
  -webkit-user-select: none; /* Google Chrome, Opera Next, Safari */
}
.content{
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.firstPageLogo{
  margin-bottom: 5.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}
.firstPage{
  width: 100%;
  text-align: center;
  font-size: 50px;
  font-family: "RobotoMedium";
  color: #ffffff;
}
.firstPageContent{
  text-align: center;
  font-size: 25px;
  font-family: "RobotoLight";
  color: #ffffff;
}
.bitmap{
    margin-top: 2%;
    pointer-events: none;
}
#ovalGroup1{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#deactiveOval1, #activeOval1{
  width: 10px;
  height: 10px;
  border: 1px solid #D8D8D8;
  border-radius: 50%;
  position: absolute;
  left: 1.32%;
  right: 98.16%;
  top: 52.5%;
  bottom: 74.02%;
}
#activeOval1{
  margin-bottom: 10px;
  background-color: #D8D8D8;
  position: absolute;
  left: 1.32%;
  right: 98.16%;
  top: 50%;
  bottom: 75.49%;
}
.callback{
  position: absolute;
  margin-left: 20%;
  margin-top: 5%;
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
.callback:hover{
  color: #ff6718;
  border-color: #ff6718;
}

</style>
