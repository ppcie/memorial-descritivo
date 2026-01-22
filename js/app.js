let projeto = {};

fetch("data/projeto.json")
  .then(r => r.json())
  .then(j => projeto = j);

function preencherDocumento() {
  projeto.identificacao.razao_social = razao_social.value;
  projeto.identificacao.cnpj = cnpj.value;
  projeto.identificacao.atividade = atividade.value;

  projeto.identificacao.endereco.logradouro = logradouro.value;
  projeto.identificacao.endereco.numero = numero.value;
  projeto.identificacao.endereco.bairro = bairro.value;
  projeto.identificacao.endereco.municipio = municipio.value;
  projeto.identificacao.endereco.uf = uf.value;
  projeto.identificacao.endereco.cep = cep.value;

  projeto.identificacao.situacao.em_atividade = em_atividade.value === "true";
  projeto.identificacao.situacao.ano = ano.value;

  pdf_razao.innerText = projeto.identificacao.razao_social;
  pdf_cnpj.innerText = projeto.identificacao.cnpj || "—";
  pdf_atividade.innerText = projeto.identificacao.atividade;

  pdf_endereco.innerText =
    `${logradouro.value}, nº ${numero.value}, ${bairro.value}, ${municipio.value}/${uf.value} – CEP ${cep.value}`;

  pdf_status.innerText =
    projeto.identificacao.situacao.em_atividade ? "SIM" : "NÃO";

  pdf_ano.innerText = projeto.identificacao.situacao.ano || "—";
}
