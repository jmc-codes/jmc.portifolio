# Johnathan Portfolio - Site Profissional

Este é o repositório do portfólio profissional de Johnathan Campos, desenvolvido com React, Tailwind CSS e GSAP para um visual empresarial e animações de alta qualidade.

## 🚀 Configuração do Projeto

Para configurar e rodar o projeto localmente, siga os passos abaixo:

### 1. Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) (versão 18 ou superior) e o [pnpm](https://pnpm.io/installation) instalados em sua máquina.

### 2. Instalação das Dependências

Navegue até o diretório do projeto e instale as dependências:

```bash
cd johnathan-portfolio
pnpm install
```

### 3. Rodar em Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento e visualizar o site em seu navegador (geralmente em `http://localhost:5173/`):

```bash
pnpm run dev
```

O site será automaticamente atualizado a cada alteração no código.

### 4. Build para Produção

Para criar uma versão otimizada do site para deploy, execute o comando de build:

```bash
pnpm run build
```

Após a execução, uma pasta `dist` será criada no diretório raiz do projeto, contendo todos os arquivos estáticos e otimizados prontos para serem servidos.

## 📦 Estrutura de Pastas Essencial

A pasta `dist` é a que você precisará para subir o site. Ela contém:

```
johnathan-portfolio/dist/
├── assets/         # Arquivos CSS e JS otimizados
├── favicon.ico     # Ícone do site
└── index.html      # Página HTML principal
```

## 🌐 Como Subir o Site (Deploy)

Você pode fazer o deploy da pasta `dist` em qualquer serviço de hospedagem de sites estáticos. Algumas opções populares incluem:

### GitHub Pages

Se você estiver usando GitHub Pages, você pode configurar seu repositório para servir o conteúdo da pasta `dist`.

1.  **Crie um novo branch (ex: `gh-pages`)**:
    ```bash
    git subtree push --prefix dist origin gh-pages
    ```
    Ou configure seu fluxo de CI/CD para fazer o build e deploy automaticamente.

2.  **Configurações do Repositório**: Vá para as configurações do seu repositório no GitHub, na seção "Pages", e selecione o branch `gh-pages` (ou o branch onde você fez o deploy da pasta `dist`) como a fonte de deploy.

### Netlify / Vercel / Cloudflare Pages

Esses serviços são ideais para deploy contínuo:

1.  **Conecte seu Repositório**: Conecte seu repositório GitHub/GitLab/Bitbucket ao serviço.
2.  **Configurações de Build**: Configure o comando de build como `pnpm run build`.
3.  **Diretório de Publicação**: Defina o diretório de publicação como `dist`.

O serviço fará o build e deploy automaticamente a cada push para o seu branch principal.

### Servidor Web Estático (Nginx, Apache, etc.)

Você pode copiar o conteúdo da pasta `dist` para o diretório de publicação do seu servidor web (ex: `/var/www/html/` para Nginx/Apache).

Exemplo com Nginx:

```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    root /caminho/para/johnathan-portfolio/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 💡 Dicas Adicionais

*   **Otimização de Imagens**: Para um melhor desempenho, otimize as imagens antes de adicioná-las ao projeto.
*   **SEO**: Certifique-se de que as meta tags no `index.html` e os títulos das páginas estejam otimizados para SEO.
*   **Analytics**: Integre ferramentas de analytics (ex: Google Analytics) para monitorar o tráfego do seu portfólio.

---

