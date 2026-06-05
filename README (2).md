# Manual para Reduzir Birras em 21 Dias

Aplicativo web premium para acompanhamento de uma jornada de 21 dias, voltado a mães que querem reduzir birras, crises emocionais e comportamentos desafiadores em seus filhos.

## Como usar

Abra o `index.html` diretamente no navegador — não precisa de servidor, build ou dependências instaladas localmente.

Para publicar no GitHub Pages:
1. Faça upload dos 4 arquivos no repositório
2. Vá em **Settings → Pages → Source: main branch / root**
3. Aguarde alguns minutos e o link estará ativo

## Estrutura de arquivos

```
birras-21dias/
├── index.html   → estrutura HTML das 5 telas
├── style.css    → design completo (mobile-first)
├── data.js      → todo o conteúdo dos 21 dias, ferramentas e conquistas
└── app.js       → lógica de navegação, progresso e persistência
```

## Funcionalidades

- **5 telas** com navegação inferior: Início, Jornada, Ferramentas, Progresso, Conquistas
- **Dashboard** com saudação, barra de progresso, sequência de dias e próxima atividade
- **Jornada de 21 dias** dividida em 3 fases, com status de cada dia
- **Experiência completa por dia**: objetivo, aprendizado, ação prática, checklist e reflexão
- **Área educativa** com 5 cards sobre birras e desenvolvimento infantil
- **Caixa de ferramentas** com 6 técnicas em painel deslizante
- **Progresso** com métricas e barras de evolução semanal
- **Conquistas** que desbloqueiam conforme o avanço
- **Persistência local** via localStorage — progresso salvo no navegador

## Tecnologias

- HTML, CSS e JavaScript puros — sem frameworks
- Fonte: [Nunito](https://fonts.google.com/specimen/Nunito) via Google Fonts
- Ícones: [Tabler Icons](https://tabler.io/icons) via CDN
- Sem dependências de servidor ou build

## Personalização

Todo o conteúdo está em `data.js`. Para alterar textos, adicionar dias ou modificar ferramentas, edite apenas esse arquivo.

---

Desenvolvido com foco em experiência mobile-first, design acolhedor e usabilidade intuitiva para mães.
