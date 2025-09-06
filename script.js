// Exemplo de interatividade
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Em breve retornaremos.");
});

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'pt-br',
    initialView: 'dayGridMonth',
    height: 'auto',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
      { title: 'Reunião com a comunidade', start: '2025-09-10' },
      { title: 'Visita ao bairro', start: '2025-09-15' },
      { title: 'Audiência pública', start: '2025-09-20' }
    ]
  });
  calendar.render();
});

