
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
      content.classList.toggle('full');
    });
    
      const commissionsBtn = document.getElementById("commissionsBtn");

  commissionsBtn.addEventListener("click", () => {
    content.innerHTML = `
      <div class="dashboard-box">
        <h1>Commissions</h1>
        <p>Here’s where you explain your commissions details, pricing, etc.</p>
      </div>
    `;
  });
  
  const aboutBtn = document.getElementById("aboutBtn");

aboutBtn.addEventListener("click", () => {
  content.innerHTML = `
    <div class="dashboard-box">
      <h1>knoturaverageshop</h1>
      <p>variety of products from apparel to accessories</p>
    </div>
  `;
});

      const readyBtn = document.getElementById("readyBtn");

  readyBtn.addEventListener("click", () => {
    content.innerHTML = `
      <div class="dashboard-box">
        <h1>Ready To Ship</h1>
        <p>Here’s where you can see all inventory and what products are available to ship out</p>
      </div>
    `;
  });
  
        const pdfBtn = document.getElementById("pdfBtn");

  pdfBtn.addEventListener("click", () => {
    content.innerHTML = `
      <div class="dashboard-box">
        <h1>PDF Patterns</h1>
        <p>Here you can find all custom made patterns</p>
      </div>
    `;
  });
