# Pixel64 Studio

Ferramenta web estática para conversão e inspeção de conteúdo em Base64, com foco principal em imagens e suporte adicional a PDF.

O projeto oferece uma interface única para:

- converter arquivos em Base64
- renderizar imagens a partir de Base64
- transformar Base64 em byte array
- trabalhar com múltiplos arquivos na mesma seleção

## Visão geral

O Pixel64 Studio foi construído como uma aplicação front-end sem dependências externas e sem etapa de build. Isso reduz complexidade operacional e facilita uso local, publicação simples e manutenção direta.

## Recursos

- interface responsiva com visual profissional
- suporte a tema claro e escuro com persistência local
- upload múltiplo de arquivos
- suporte a arrastar e soltar
- cópia rápida do conteúdo Base64
- exportação da saída em arquivo `.txt`
- painel de saída Base64 em modo compacto e expandido
- alternância entre `Base64 puro` e `Data URL`
- validação de tipos suportados no seletor e no drag and drop
- renderização de imagem a partir de Data URL ou Base64 puro
- conversão de Base64 para byte array

## Formatos aceitos

Entrada de arquivos para conversão:

- `.png`
- `.jpg`
- `.jpeg`
- `.webp`
- `.gif`
- `.bmp`
- `.svg`
- `.pdf`

## Estrutura do projeto

- [index.html](index.html): estrutura da interface
- [style.css](style.css): estilos, layout, responsividade e temas
- [script.js](script.js): lógica de conversão, validações e interação
- [favicon.svg](favicon.svg): ícone da aplicação

## Como usar

### 1. Converter arquivo para Base64

1. Abra [index.html](index.html) no navegador.
2. Selecione um ou mais arquivos ou arraste os itens para a área de upload.
3. O sistema gera automaticamente o conteúdo Base64.
4. Use o seletor `Formato` para escolher entre `Base64 puro` e `Data URL`.
5. Use os botões para copiar, baixar, expandir ou limpar o resultado.

### 2. Converter PDF para Base64 menor

1. Faça upload de um arquivo `.pdf`.
2. Mantenha o seletor `Formato` em `Base64 puro`.
3. O resultado será exibido sem o prefixo `data:application/pdf;base64,`, ficando mais curto.
4. Esse formato é útil para integrações e payloads onde apenas a string Base64 é necessária.

### 3. Renderizar imagem a partir de Base64

1. Cole um Data URL ou Base64 puro no bloco de visualização.
2. Clique em `Renderizar`.
3. A pré-visualização será exibida no painel lateral.

### 4. Gerar byte array

1. Cole um Data URL ou Base64 puro na área de conversão de bytes.
2. Clique em `Converter`.
3. O byte array será exibido no painel de saída.

## Comportamento da aplicação

- o upload aceita múltiplos arquivos em uma única ação
- tipos inválidos são rejeitados com feedback visual
- o resumo do upload mostra quantidade de arquivos e tamanho total
- a saída Base64 mostra metadados com quantidade de itens, total de caracteres e formato selecionado
- o modo `Base64 puro` remove o prefixo `data:...;base64,` e produz uma string mais curta
- arquivos PDF são aceitos na conversão para Base64
- o tema escolhido é salvo no navegador via `localStorage`

## Execução

Como este é um projeto estático, basta abrir [index.html](index.html) diretamente no navegador.

Se preferir servir localmente por um servidor HTTP, qualquer servidor estático simples é suficiente.

## Casos de uso

- preparação de payloads para integrações
- testes com APIs que exigem conteúdo em Base64
- inspeção rápida de imagens codificadas
- conversão de PDFs para envio em APIs e formulários
- geração de byte array para ambientes de desenvolvimento
- validação visual de Data URLs

## Limitações atuais

- a renderização visual continua focada em imagens
- não há backend para armazenamento ou processamento remoto
- não existe suíte de testes automatizados neste momento

## Próximos passos possíveis

- exportar a imagem renderizada em arquivo
- modularizar o JavaScript em arquivos separados
- transformar o projeto em PWA instalável
- adicionar reconstrução genérica de arquivo a partir de Base64, se voltar a fazer sentido no escopo

## Licença

Defina a licença conforme a política do projeto antes de distribuição pública.