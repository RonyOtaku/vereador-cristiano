// Interatividade do formulário
const contatoForm = document.querySelector("#contatoForm");
if (contatoForm) {
  contatoForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Em breve retornaremos.");
  });
}

// Inicializa o FullCalendar
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  if (calendarEl) {
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
      events: [
        { title: 'Reunião com a comunidade', start: '2025-09-10' },
        { title: 'Visita ao bairro', start: '2025-09-15' },
        { title: 'Audiência pública', start: '2025-09-20' }
      ],
      eventDidMount: function(info) {
        // Tooltip simples ao passar o mouse
        info.el.setAttribute('title', info.event.title + '\nData: ' + info.event.start.toLocaleDateString());
      },
      eventClick: function(info) {
        // Redireciona para agenda.html ao clicar no evento
        window.location.href = 'agenda.html';
      },
    });

    calendar.render();
  }
});
