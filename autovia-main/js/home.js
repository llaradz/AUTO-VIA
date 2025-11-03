// Gráfico 1: Barras
const ctx1 = document.getElementById('grafico1');
new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Vendas Mensais',
      data: [12, 19, 8, 15, 22, 30],
      backgroundColor: '#0d6efd'
    }]
  },
  options: { responsive: true, scales: { y: { beginAtZero: true } } }
});

// Gráfico 2: Pizza
const ctx2 = document.getElementById('grafico2');
new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Carros', 'Caminhões', 'Motos'],
    datasets: [{
      label: 'Veículos Vendidos',
      data: [15, 7, 12],
      backgroundColor: ['#198754', '#ffc107', '#dc3545']
    }]
  },
  options: { responsive: true }
});
