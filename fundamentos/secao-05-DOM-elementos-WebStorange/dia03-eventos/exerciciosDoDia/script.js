function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
  function appendDays () {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const days = document.querySelector('#days');

    for (let index = 0; index < decemberDaysList.length; index += 1) {
      const day = decemberDaysList[index];
      const addDayList = document.createElement('li');
      addDayList.innerHTML = day;
      addDayList.className = 'day'

      if (day === 24 || day === 25 || day === 31) {
        addDayList.classList.add('holiday');
      }

      if (day === 4 || day === 11 || day === 18 || day === 25) {
        addDayList.classList.add('friday')
      }

      days.appendChild(addDayList);

    }
  }

  appendDays();

  function addHolidays (holidays) {
    const buttonContainer = document.querySelector('.buttons-container')
    const holiday = document.createElement('button');
    holiday.id = 'btn-holiday';
    holiday.innerText = holidays;

    buttonContainer.appendChild(holiday);
  }

  addHolidays('Feriados');

  const daysHolidays = document.getElementById('btn-holiday');
  const holidays = document.getElementsByClassName('holiday');

  daysHolidays.addEventListener('click', function (event) {
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.background = 'rgb(144,238,144)';
    }
    daysHolidays.addEventListener('dblclick', function () {
      for (let index1 = 0; index1 < holidays.length; index1 += 1) {
        holidays[index1].style.background = 'rgb(238,238,238)';
      }
    })
  })

  function creatFriday (friday) {
    const conteinerButton = document.querySelector('.buttons-container');
    const buttons = document.createElement('button');
    buttons.id = 'btn-friday';
    buttons.innerText = friday;
    
    conteinerButton.appendChild(buttons);
  } 

  creatFriday('Sexta-Feira');

  const dayFriday = document.getElementsByClassName('friday');
  const btn_friday = document.getElementById('btn-friday');

  btn_friday.addEventListener('click', function () {
    for (let index = 0; index < dayFriday.length; index += 1) {
      dayFriday[index].innerHTML = 'SEXTOUUUUU!';
    }
    let arrayDays = [4, 11, 18, 25];
    btn_friday.addEventListener('dblclick', function () {
      for (let index1 = 0; index1 < arrayDays.length; index1 += 1) {
        dayFriday[index1].innerHTML = arrayDays[index1];
      }
    })
  })

  


  