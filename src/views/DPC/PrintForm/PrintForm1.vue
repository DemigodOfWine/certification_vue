<template>

  <head>
    <meta charset="UTF-8">
    <title>Pasport</title>
  </head>

  <body>
  <div class="page">
    <header>
      <div>
        <h3>АКУСТИЧЕСКИЕ КОНТРОЛЬНЫЕ СИСТЕМЫ</h3>
      </div>
    </header>

    <hr class="horizon-line"/>

    <div id="main">
      <h4><b>ПАСПОРТ</b></h4>
      <b>Ультразвуковой преобразователь {{ model.model_name }} </b>
      <b>АПЯС {{ base.apyas }}</b>
      <b>Серийный номер: {{ certificate.serial_number }} </b>
    </div>

    <hr/>

    <div>
      <h4>Назначение</h4>
      <p>
        {{ model.intended_use_rus }}
      </p>
    </div>

    <hr/>

    <div>
      <h4>Основные характеристики</h4>
    </div>
    <div class="row">
      <div class="col-sm-5">
        <p>Основной тип возбуждаемых волн:</p>
        <p>Номинальная частота:</p>
        <p>Рабочая частота:</p>
        <p>Коэффициент двойного преобразования:</p>
        <p>Относительная полоса пропускания:</p>
        <p>Емкость пьезоэлемента:</p>
        <p>Максимальная амплитуда импульса возбуждения:</p>
        <p>Тип разъёма:</p>
        <p>Габаритные размеры:</p>
        <p>Масса:</p>
        <p>Диапазон рабочих температур:</p>
      </div>
      <div class="col-sm-3">
        <p> {{ base.wave_type }} </p>
        <p> {{ parseFloat(base.afc_frequency_maximum).toFixed(1) }} кГц</p>
        <p> {{ parseFloat(base.operating_frequency).toFixed(1) }} ( ± 10) кГц</p>
        <p> {{ parseFloat(base.afc_frequency_maximum_first_wave).toFixed(1) }} не менее дБ</p>
        <p> {{ parseFloat(base.relative_transmission_bandwidth).toFixed(1) }} не менее %</p>
        <p> {{ parseFloat(base.capacity).toFixed(1) }} пФ</p>
        <p> {{ parseFloat(base.maximum_excitation_pulse_voltage).toFixed(1) }} не более В</p>
        <p>///</p>
        <p> {{ parseFloat(base.diameter).toFixed(1) }} не более ×Ø мм</p>
        <p> {{ parseFloat(base.weight).toFixed(1) }} не более г</p>
        <p> {{ parseFloat(base.temp_down).toFixed(1) }} от °C до {{ parseFloat(base.temp_up).toFixed(1) }} + °C</p>
      </div>
      <div class="col">
        <h1>IMG</h1>
      </div>
    </div>
    <hr/>

    <div>
      <h4>Условия измерений и используемое оборудование</h4>
    </div>

    <div>
      <p>
        Преобразователь испытывается в контакте с аналогичным образцовым преобразователем при силе сжатия протекторов 4 Н.
        На испытуемый преобразователь подаётся возбуждающий импульс. Сигнал с образцового преобразователя анализируется.
        Коэффициент двойного преобразования вычисляется как отношение амплитуды сигнала образцового преобразователя к
        амплитуде возбуждающего импульса.
      </p>
    </div>

    <div class="row">
      <div class="col-sm">
        <b>Возбуждение:</b>
      </div>
      <div class="col-sm-10">
        прямоугольный импульс В, длительность 10 мкс, равная полупериоду колебаний номинальной частоты.
      </div>
    </div>

    <div class="row">
      <div class="col-sm">
        <b>Прием:</b>
      </div>
      <div class="col-sm-10">
        усилитель с полосой пропускания 0,01 – 400 кГц и входным сопротивлением 4 кОм. Эффективное значение шума,
        приведённого к входу усилителя, не более 10 мкВ,
        кабель с волновым сопротивлением 50 Ом.
      </div>
    </div>

    <div class="row">
      <div class="col-sm">
        <p><b>Окружающая среда:</b></p>
      </div>

      <div class="col-sm-10">
        температура {{ parseFloat(certificate.temp).toFixed(1) }} °C,
        {{ parseFloat(certificate.humid).toFixed(1) }} относительная влажность %.
      </div>
    </div>

    <hr/>

    <div>
      <h2>Результаты измерений</h2>
    </div>

    <div class="row">
      <div class="col">
        <h2>Форма принятого сигнала</h2>
      </div>
      <div class="col">
        <h2>АЧХ</h2>
      </div>
    </div>


    <hr/>
    <div class="container">
      <div class="row">

        <div class="col-sm-4  p-0 m-0">
          <p>Длительность сигнала (по -20 дБ) τ :</p>
          <p>Частота максимума АЧХ <i>ƒ<sub>p</sub></i> :</p>
          <p>Нижняя граничная частота АЧХ <i>ƒ<sub>l</sub></i> :</p>
          <p>Верхняя граничная частота АЧХ <i>ƒ<sub>u</sub></i> :</p>
        </div>

        <div class="col-sm  p-0 m-0">
          <p>{{ parseFloat(certificate.echo_pulse_duration).toFixed(2) }} мкс</p>
          <p>{{ parseFloat(certificate.afc_frequency_maximum).toFixed(2) }} кГц</p>
          <p>{{ parseFloat(certificate.lower_afc_frequency).toFixed(2) }} кГц</p>
          <p>{{ parseFloat(certificate.upper_afc_frequency).toFixed(2) }} кГц</p>
        </div>

        <div class="col-sm-4 p-0 m-0">
          <p>Рабочая частота <i>ƒ<sub>c</sub></i> :</p>
          <p>Коэф. двойного преобразования <i>S<sub>rel</sub></i> :</p>
          <p>Относительная полоса АЧХ (по -6 дБ) <i>B<sub>w</sub></i> :</p>
        </div>

        <div class="col-sm  p-0 m-0">
          <p>{{ parseFloat(certificate.operating_frequency).toFixed(2) }} кГц</p>
          <p>{{ parseFloat(certificate.afc_maximum_s_rel).toFixed(2) }} дБ</p>
          <p>{{ parseFloat(certificate.relative_transmission_bandwidth).toFixed(2)  }} %</p>
        </div>
      </div>
    </div>

    <hr/>
    <div>
      <b> Допуск к эксплуатации:</b> <i> {{ certificate.result }} </i>
      <div>
        <div>
          <b> Измерения выполнил </b> <i> {{ certificate.operator }} </i>
        </div>
        <div>
          <b> Приёмку провёл: </b> <i> {{ certificate.controller }} </i>
        </div>
      </div>
      <div>
        <div>
          Дата продажи:
        </div>

        <div>
          <em>Гарантийный скор 3 месяца с даты продажи</em>
        </div>
      </div>
    </div>
  </div>
  </body>

</template>

<script>
import axios from "axios";

export default {
  name: 'print-form-1',
  props: ['id_certificate'],
  data() {
    return {
      certificate: [],
      model: [],
      base: [],
      loading: false,
    }
  },
  mounted() {
    this.getCertificate()
  },
  methods: {
    async getCertificate() {
      console.log(this.id_certificate)
      this.loading = true
      await axios
          .get('http://127.0.0.1:8000/dpc/dpc_certificate_detail/' + this.id_certificate)
          .then((response) => {
            this.certificate = response.data
            this.base = this.certificate.base
            this.model = this.certificate.model
          })
          .catch(error => {
            alert(error)
          })
          .finally(() => (this.loading = false))
    },
  }
}
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  font: 10pt "Times New Roman";
}

* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

.page {
  width: 210mm;
  min-height: 297mm;
  padding: 5mm;
  margin: auto;
  border: 1px #D3D3D3 solid;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

@page {
  size: A4;
  margin: 0;
}

#main b {
  display: block;
}

p {
  text-align: justify;
  line-height: 1;
  margin: 1px;
}

.row {
  text-align: justify;
  line-height: 1;
}

.col {
  line-height: 1;
}

hr {
  margin: 0;
  padding: 0;
}

</style>