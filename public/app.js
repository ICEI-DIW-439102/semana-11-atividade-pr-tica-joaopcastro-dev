const dados = [
  {
    "id": 1,
    "nome": "Kung Fu Panda",
    "descricao": "Um panda improvável se torna herói",
    "conteudo": "Um panda desajeitado é escolhido para ser o Dragão Guerreiro e deve defender seu vale de um vilão feroz. Uma jornada hilariante de autodescoberta e respeito.",
    "genero": "Animação • Ação",
    "diretor": "Mark Osborne",
    "ano": 2008,
    "duracao": "92 min",
    "classificacao": "Livre",
    "destaque": true,
    "imagem_principal": "img/filmes/kungfu.png",
    "fotos": [
      { "id": 1, "titulo": "Po e sua gangue", "imagem": "img/filmes/kungfu2.png" },
      { "id": 2, "titulo": "O mestre", "imagem": "img/filmes/kungfupanda3.jpg" },
      { "id": 3, "titulo": "O vale", "imagem": "img/filmes/kungfupanda4.jpg" }
    ]
  },
  {
    "id": 2,
    "nome": "O Show de Truman",
    "descricao": "Uma vida transmitida sem saber",
    "conteudo": "Truman é o protagonista involuntário de um reality show contínuo. Gradualmente, ele começa a notar anomalias em seu mundo perfeito e questiona a realidade ao seu redor.",
    "genero": "Drama • Ficção",
    "diretor": "Peter Weir",
    "ano": 1998,
    "duracao": "103 min",
    "classificacao": "12 anos",
    "destaque": true,
    "imagem_principal": "img/filmes/showdetruman.png",
    "fotos": [
      { "id": 1, "titulo": "Saindo do estúdio", "imagem": "img/filmes/showdetruman2.png" },
      { "id": 2, "titulo": "Olhando para câmera", "imagem": "img/filmes/trumanshow3.png" }
    ]
  },
  {
    "id": 3,
    "nome": "Seven: Os 7 Pecados",
    "descricao": "Um serial killer baseado nos pecados",
    "conteudo": "Dois detetives, um veterano e outro novato, caçam um serial killer que mata suas vítimas baseado nos sete pecados capitais. Um thriller psicológico tenso e sombrio.",
    "genero": "Suspense • Crime",
    "diretor": "David Fincher",
    "ano": 1995,
    "duracao": "127 min",
    "classificacao": "14 anos",
    "destaque": true,
    "imagem_principal": "img/filmes/seven.png",
    "fotos": [
      { "id": 1, "titulo": "Brad Pitt", "imagem": "img/filmes/seven.jpg" },
      { "id": 2, "titulo": "Brad Pitt descobrindo", "imagem": "img/filmes/seven3.jpg" },
      { "id": 3, "titulo": "Vilão do filme", "imagem": "img/filmes/seven4.jpg" }
    ]
  },
  {
    "id": 4,
    "nome": "Dexter",
    "descricao": "Um assassino com código moral",
    "conteudo": "Dexter é um analista forense que secretamente é um assassino em série. Ele segue um código moral passado por seu padrasto, perseguindo apenas criminosos perigosos.",
    "genero": "Crime • Drama",
    "diretor": "Showtime",
    "ano": 2006,
    "duracao": "45 min/ep",
    "classificacao": "16 anos",
    "destaque": false,
    "imagem_principal": "img/filmes/dexter3.png",
    "fotos": [
      { "id": 1, "titulo": "Dexter banner", "imagem": "img/filmes/dexter.png" },
      { "id": 2, "titulo": "Dexter e sua irmã Debra", "imagem": "img/filmes/dexter2.png" }
    ]
  },
  {
    "id": 5,
    "nome": "Breaking Bad",
    "descricao": "Professor vira produtor de drogas",
    "conteudo": "Um professor de química desempregado se torna produtor de metanfetamina para garantir o futuro financeiro de sua família. Uma transformação épica do bem ao mal.",
    "genero": "Drama • Crime",
    "diretor": "Vince Gilligan",
    "ano": 2008,
    "duracao": "47 min/ep",
    "classificacao": "16 anos",
    "destaque": true,
    "imagem_principal": "img/filmes/bb.png",
    "fotos": [
      { "id": 1, "titulo": "Pinkman drogado", "imagem": "img/filmes/bb2.png" },
      { "id": 2, "titulo": "Walter White e Pinkman", "imagem": "img/filmes/bb3.png" },
      { "id": 3, "titulo": "No deserto", "imagem": "img/filmes/bb4.jpg" }
    ]
  },
  {
    "id": 6,
    "nome": "Peaky Blinders",
    "descricao": "Gangue inglesa pós-guerra",
    "conteudo": "A família Shelby lidera uma gangue de Birmingham no pós-Primeira Guerra Mundial. Ambição, poder e violência definem essa saga épica da Inglaterra nos anos 1920.",
    "genero": "Crime • Drama",
    "diretor": "Steven Knight",
    "ano": 2013,
    "duracao": "60 min/ep",
    "classificacao": "16 anos",
    "destaque": false,
    "imagem_principal": "img/filmes/pb.jpg",
    "fotos": [
      { "id": 1, "titulo": "Thomas Shelby", "imagem": "img/filmes/pb2.jpg" },
      { "id": 2, "titulo": "A tia da gangue", "imagem": "img/filmes/pb3.jpg" },
      { "id": 3, "titulo": "Os pilares da gangue", "imagem": "img/filmes/pb4.jpg" }
    ]
  }
];



function renderCarrossel(filtro) {
  const carouselInner = document.querySelector('#carouselDestaques .carousel-inner');
  if (!carouselInner) return;

  let filmes = dados.filter(f => f.destaque);

  if (filtro) {
    filmes = filmes.filter(f =>
      f.nome.toLowerCase().includes(filtro.toLowerCase()) ||
      f.genero.toLowerCase().includes(filtro.toLowerCase())
    );
  }

  if (filmes.length === 0) {
    carouselInner.innerHTML = '<div class="carousel-item active"><div style="height:100%;display:flex;align-items:center;justify-content:center;background:#222;"><h3 style="color:#fff;">Nenhum destaque encontrado</h3></div></div>';
    return;
  }

  carouselInner.innerHTML = filmes.map((filme, index) => `
    <div class="carousel-item ${index === 0 ? 'active' : ''}">
      <img src="${filme.imagem_principal}" alt="${filme.nome}" class="d-block w-100">
      <div class="carousel-caption d-none d-md-block">
        <h2>${filme.nome}</h2>
        <p>${filme.descricao}</p>
        <a href="detalhes.html?id=${filme.id}" class="btn btn-warning">Ver Detalhes</a>
      </div>
    </div>
  `).join('');
}

function renderCards(filtro) {
  const container = document.getElementById('filmesContainer');
  if (!container) return;

  let filmes = dados;

  if (filtro) {
    filmes = filmes.filter(f =>
      f.nome.toLowerCase().includes(filtro.toLowerCase()) ||
      f.genero.toLowerCase().includes(filtro.toLowerCase()) ||
      f.descricao.toLowerCase().includes(filtro.toLowerCase())
    );
  }

  if (filmes.length === 0) {
    container.innerHTML = '<div class="col-12"><p class="text-center py-5">Nenhum filme ou série encontrado para "<strong>' + filtro + '</strong>".</p></div>';
    return;
  }

  container.innerHTML = filmes.map(filme => `
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="card-filme h-100">
        <img src="${filme.imagem_principal}" alt="${filme.nome}" class="img-card">
        <div class="info-card">
          <p class="texto-cardtit">${filme.nome}</p>
          <p class="texto-card">${filme.genero}</p>
          <p class="texto-card">${filme.descricao}</p>
        </div>
        <a href="detalhes.html?id=${filme.id}" class="botao-ver">Ver Detalhes</a>
      </div>
    </div>
  `).join('');
}



function obterItemPorId(id) {
  return dados.find(f => f.id === parseInt(id));
}

function renderDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const filme = obterItemPorId(id);

  if (!filme) {
    document.getElementById('detalheContainer').innerHTML = `
      <div class="text-center py-5">
        <h2>Filme não encontrado</h2>
        <a href="index.html" class="btn btn-warning mt-3">← Voltar para Home</a>
      </div>`;
    return;
  }

  document.title = `${filme.nome} - Cinefy`;

  const container = document.getElementById('detalheContainer');
  container.innerHTML = `
    <a href="index.html" class="btn btn-warning mb-4">← Voltar</a>

    <div class="row mb-5">
      <div class="col-lg-5 mb-4">
        <img src="${filme.imagem_principal}" alt="${filme.nome}" class="img-fluid rounded shadow">
      </div>

      <div class="col-lg-7">
        <h1>${filme.nome}</h1>
        <p class="lead">${filme.descricao}</p>
        <div class="info-detalhes">
          <p><strong>Gênero:</strong> ${filme.genero}</p>
          <p><strong>Diretor / Produção:</strong> ${filme.diretor}</p>
          <p><strong>Ano:</strong> ${filme.ano}</p>
          <p><strong>Duração:</strong> ${filme.duracao}</p>
          <p><strong>Classificação:</strong> <span class="badge bg-warning text-dark">${filme.classificacao}</span></p>
        </div>
        <p class="mt-4">${filme.conteudo}</p>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12 mb-3">
        <h2>Fotos</h2>
      </div>
      ${filme.fotos.map(foto => `
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
          <div class="card">
            <img src="${foto.imagem}" alt="${foto.titulo}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${foto.titulo}</h5>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}



function initPesquisa() {
  const input = document.querySelector('.campo-pesquisa');
  const form = document.querySelector('.formulario-pesquisa');
  if (!input || !form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const termo = input.value.trim();
    if (termo) {
      
      window.location.href = 'index.html?busca=' + encodeURIComponent(termo);
    } else {
      window.location.href = 'index.html';
    }
  });
}


document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const busca = params.get('busca') || '';

  // Home-page
  if (document.getElementById('carouselDestaques')) {
    renderCarrossel(busca);
  }
  if (document.getElementById('filmesContainer')) {
    renderCards(busca);
    // Preenche campo de busca se veio filtrado
    if (busca) {
      const input = document.querySelector('.campo-pesquisa');
      if (input) input.value = busca;
    }
  }

  if (document.getElementById('detalheContainer')) {
    renderDetalhes();
  }

 
  initPesquisa();
});
