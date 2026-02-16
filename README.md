# FightHub

FightHub e um projeto front-end focado no universo do MMA classico. O site organiza conteudo em varias paginas tematicas com navegacao simples, visual escuro e cards responsivos para leitura e consumo de videos.

## Objetivo do projeto

O objetivo do FightHub e centralizar conteudos sobre lutas em uma experiencia unica, incluindo:
- contexto historico do MMA;
- estilos de luta e perfis taticos;
- lista de lutadores com informacoes rapidas;
- lutas marcantes do UFC e do PRIDE FC;
- entrevistas com nomes importantes do esporte.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Deploy na Vercel

## Como executar localmente

1. Clone o repositorio:
```bash
git clone https://github.com/MatheusDiogenes951/FightHub.git
```

2. Entre na pasta:
```bash
cd FightHub
```

3. Abra o `index.html` no navegador.

## Deploy

Projeto publicado em:
- https://fighthub-jet.vercel.app/

## Estrutura de arquivos

```text
FightHub/
|- index.html
|- historia.html
|- estilos.html
|- ufc.html
|- pride.html
|- fighters.html
|- entrevistas.html
|- estilos/
|  |- style.css
|- js/
|  |- script.js
|- imagens/
|- README.md
```

## Mapa de paginas

- `index.html`: pagina inicial com apresentacao do projeto e menu principal.
- `historia.html`: linha historica da evolucao do MMA (origens, vale-tudo, UFC, PRIDE e fase moderna).
- `estilos.html`: resumo das principais artes marciais e tipos de game plan.
- `ufc.html`: cards com lutas do UFC em iframes do YouTube (modo nocookie).
- `pride.html`: cards com lutas classicas do PRIDE FC.
- `fighters.html`: galeria de lutadores com foto, categoria, estilo e recorde.
- `entrevistas.html`: entrevistas em video com atletas relevantes.

## Metodos e funcoes (JavaScript)

Arquivo: `js/script.js`

### `mudouTamanho()`

Funcao criada para comportamento responsivo do menu.

Responsabilidade:
- mostrar o menu (`itens`) quando a largura da tela for maior ou igual a 768px;
- esconder o menu em telas menores que 768px.

Logica atual:

```js
function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}
```

Observacoes de implementacao no estado atual do projeto:
- em `index.html`, o `body` usa `onresize="mudoutamanho()"` (nome diferente de `mudouTamanho()`);
- o `index.html` nao referencia `js/script.js` com `<script src="...">`.

Esses dois pontos explicam por que a funcao pode nao ser executada hoje no carregamento real da pagina.

## Organizacao dos estilos (CSS)

Arquivo: `estilos/style.css`

O CSS foi dividido por blocos de responsabilidade:

### 1) Base global

- Reset com `* { margin, padding, box-sizing }`.
- Fonte padrao sem serifa para todo o projeto.
- Tema geral escuro no `body` com alto contraste de texto.

### 2) Cabecalho e navegacao

Classes e seletores principais:
- `header`, `header > h1`, `header > p`
- `menu`, `menu > ul`, `menu > ul > li > a`
- `.header-row`
- `.back-button`

Destaques:
- gradiente escuro no cabecalho;
- links com hover e leve elevacao (`transform: translateY(-2px)`);
- layout de titulo com botao de voltar alinhado via grid em `.header-row`.

### 3) Conteudo principal

- `main`: container central com largura em viewport (`90vw`), borda arredondada e sombra.
- `article`, `article > h2`, `article > p`: padronizacao de tipografia, espacamento e contraste.

### 4) Lista de lutadores (`fighters.html`)

Classes:
- `.fighters-list`
- `.fighter-card`
- `.fighter-info`
- `.fighter-photo`
- `.fighter-photo img`

Destaques:
- grid de cards em 2 colunas no desktop;
- card horizontal com informacoes + foto;
- imagem recortada com `object-fit: cover` para manter proporcao visual.

### 5) Cards de lutas e entrevistas (`ufc.html`, `pride.html`, `entrevistas.html`)

Classes:
- `.fights-list`
- `.fight-card`
- `.fight-title`
- `.fight-video`
- `.fight-video iframe`

Destaques:
- cards empilhando titulo e player;
- video responsivo com tecnica de proporcao 16:9 (`padding-top: 56.25%` + `position: absolute` no iframe).

### 6) Cards de estilos (`estilos.html`)

Classes:
- `.styles-grid`
- `.style-card`
- `.style-card h3`
- `.style-card p`

Destaques:
- grid em 2 colunas para leitura rapida;
- titulos de secao em destaque (`text-transform: uppercase` e cor de acento vermelha).

### 7) Responsividade

Breakpoints aplicados:
- `@media (max-width: 900px)`

Comportamento:
- `.fighters-list`, `.fights-list` e `.styles-grid` passam de 2 colunas para 1 coluna.

## Recursos de UX e integracao

- `loading="lazy"` nos iframes para otimizar carregamento.
- `youtube-nocookie.com` para embed com maior foco em privacidade.
- fallback de imagens em varios cards de lutadores usando `onerror` + `data-fallback`.

