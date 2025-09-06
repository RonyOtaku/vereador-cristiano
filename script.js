document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  if (!calendarEl) return;

  // Lista de eventos
  var eventos = [
    { title: 'Reunião com a comunidade', start: '2025-09-10', descricao: 'Reunião aberta para discutir melhorias na cidade.' },
    { title: 'Visita ao bairro', start: '2025-09-15', descricao: 'Visita aos bairros para ouvir a população local.' },
    { title: 'Audiência pública', start: '2025-09-20', descricao: 'Audiência pública para discutir orçamento municipal.' },
    { title: 'Inauguração', start: '2025-09-30', descricao: 'Inauguração da praça central da cidade.' }
  ];

  // Função para criar a data correta evitando o problema do fuso horário
  function formatarData(evStart) {
    var partes = evStart.split('-');
    var data = new Date(partes[0], partes[1] - 1, partes[2]);
    return data.toLocaleDateString('pt-BR');
  }

  // Inicializa o FullCalendar
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'pt-BR',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    buttonText: {
      today: 'Hoje',
      month: 'Mês',
      week: 'Semana',
      day: 'Dia'
    },
    events: eventos,
    eventDidMount: function(info) {
      info.el.setAttribute('title', info.event.title + '\nData: ' + formatarData(info.event.startStr));
    },
    eventClick: function(info) {
      window.location.href = 'agenda.html';
    },
    datesSet: function(info) {
      atualizarListaEventos(info.start, info.end);
    }
  });

  calendar.render();

  function atualizarListaEventos(inicioMes, fimMes) {
    var listaContainer = document.getElementById('eventosLista');
    var listaUl = document.getElementById('listaEventos');

    listaUl.innerHTML = ''; // limpa a lista

    // Filtra apenas os eventos do mês exibido
    var eventosDoMes = eventos.filter(ev => {
      var partes = ev.start.split('-');
      var data = new Date(partes[0], partes[1] - 1, partes[2]);
      return data >= inicioMes && data < fimMes;
    });

    if (eventosDoMes.length === 0) {
      listaContainer.style.display = 'none'; // esconde se não houver eventos
      return;
    }

    listaContainer.style.display = 'block'; // mostra a caixa
    eventosDoMes.forEach(ev => {
      var li = document.createElement('li');
      li.innerHTML = `<strong>${ev.title}</strong> (${formatarData(ev.start)}): ${ev.descricao}`;
      listaUl.appendChild(li);
    });
  }
});