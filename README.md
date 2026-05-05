# ☀️ Weather Monitor

⚠️ **Atenção** para visualizar os dados do site, rode o backend hospedado primeiro: https://weather-monitor-backend.onrender.com/

## 🎯 Visão Geral

**Weather Monitor** é uma aplicação web fullstack que fornece informações completas sobre condições climáticas em diferentes localizações ao redor do mundo. O projeto utiliza a API do OpenWeatherMap para obter dados meteorológicos em tempo real.

### ✨ Funcionalidades Principais

-   🌍 Visualização de clima em múltiplas localizações
-   📊 Exibição de detalhes meteorológicos (temperatura, umidade, pressão, velocidade do vento)
-   🎨 Interface moderna com tema dinâmico baseado em condições climáticas
-   📱 Design responsivo (mobile-first)
-   🔄 Seleção dinâmica de localizações pré-configuradas
-   🌅 Fundos dinâmicos baseados nas condições do tempo

* * *

## 🎨 UI/UX

O layout e a experiência do usuário (UI/UX) deste projeto foram desenvolvidos utilizando o seguinte conceito visual, do artista [Arthur K](https://dribbble.com/thearthurk) como [referência](https://dribbble.com/shots/7376567-Weather-App-Website?utm_source=Clipboard_Shot&utm_campaign=thearthurk&utm_content=Weather%20App%20Website&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=thearthurk&utm_content=Weather%20App%20Website&utm_medium=Social_Share):

<div align="center">
  <img src="https://cdn.dribbble.com/userupload/25002437/file/original-30114913091e8d953a02a6d0083e5f69.png?resize=1504x1128&vertical=center" alt="Referência de Design UI/UX" width="700">
</div>

O projeto segue uma estética **minimalista e funcional**. A estrutura visual foi dividida entre uma *sidebar* de controle e uma área principal de conteúdo, onde os dados são apresentados em um *card*. Essa disposição prioriza a legibilidade e a facilidade de uso, mantendo a interface leve e livre de distrações.

<div align="center">
  <img src="https://github.com/user-attachments/assets/bfbe6e76-057a-47e3-b8e3-bce7fa9de2fe" alt="Referência de Design UI/UX" width="700">
</div>

* * *

## 🏗️ Arquitetura do Projeto

```text
┌──────────────────────────────────────┐
│  Frontend (Vue 3 + Vite)             │
│  - SPA com componentes reativos      │
│  - Tailwind CSS                      │
│  - Pinia para gerenciamento estado   │
└─────────────────┬────────────────────┘
                  │ HTTP/CORS
┌─────────────────▼────────────────────┐
│  Nginx (Servidor Web)                │
│  - Port 8080                         │
└─────────────────┬────────────────────┘
                  │ FastCGI
┌─────────────────▼────────────────────┐
│  Backend (PHP 8.2 FPM)               │
│  - API RESTful                       │
│  - Integração OpenWeatherMap         │
└──────────────────────────────────────┘
```
    

* * *

## 🛠️ Stack Tecnológico

### Frontend

| Tecnologia | Versão | Propósito |
| --- | --- | --- |
| **Vue** | 3.5.25 | Framework frontend |
| **TypeScript** | ~5.9.0 | Tipagem estática |
| **Vite** | 7.2.4 | Bundler & dev server |
| **Tailwind CSS** | 4.1.17 | Utilitários de estilo |
| **Pinia** | 3.0.4 | State management |
| **Shadcn-vue** |  | Biblioteca de componentes |
| **Reka-ui** | 2.6.0 | Componentes headless |
| **Lucide Vue Next** | 0.555.0 | Ícones SVG |

### Backend

| Tecnologia | Versão | Propósito |
| --- | --- | --- |
| **PHP** | 8.2 | Runtime |
| **Nginx** | Latest | Servidor web |

### DevOps

| Tecnologia | Versão | Propósito |
| --- | --- | --- |
| **Docker** | Latest | Containerização |
| **Docker Compose** | 3.8 | Orquestração |

* * *

## 📁 Estrutura de Diretórios

```text
weather-monitor/
├── backend/
│   └── index.php
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   └── AppSideBar.vue
│   │   │   └── ui/
│   │   │       ├── button/
│   │   │       ├── card/
│   │   │       ├── input/
│   │   │       ├── separator/
│   │   │       ├── sheet/
│   │   │       ├── sidebar/
│   │   │       ├── skeleton/
│   │   │       └── tooltip/
│   │   ├── helpers/
│   │   │   └── weather-bg-selector.ts
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── models/
│   │   │   └── weather.ts
│   │   ├── stores/
│   │   │   └── weather.ts
│   │   ├── App.vue
│   │   ├── main.ts
│   │   └── style.css
│   ├── public/
│   │   └── weather-background/
│   │       ├── broken-clouds.jpg
│   │       ├── clear-sky.jpg
│   │       ├── few-clouds.jpg
│   │       ├── mist.jpg
│   │       ├── rain.jpg
│   │       ├── scattered-clouds.jpg
│   │       ├── shower-rain.jpg
│   │       ├── snow.jpg
│   │       └── thunderstorm.jpg
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── nginx.conf
│   ├── dockerfile
│   ├── package.json
│   └── README.md
├── docker-compose.yml
├── .env
├── .gitignore
├── LICENSE
└── README.md
```
    

* * *

## 📥 Guia de Instalação

### ✅ Pré-requisitos

-   Docker & Docker Compose instalados
-   Node.js 20.19.0+ (desenvolvimento local)
-   Chave API OpenWeatherMap (gratuita)

### 🚀 Passos de Instalação

#### 1️⃣ Clone o Repositório

```text
git clone https://github.com/seu-usuario/weather-monitor.git
cd weather-monitor
```
    

#### 2️⃣ Configure Variáveis de Ambiente

```text
# Crie arquivo .env na raiz
OPENWEATHER_API_KEY=sua_chave_aqui
```
    

**Como obter a chave:**

1.  Acesse [openweathermap.org](https://openweathermap.org/)
2.  Crie uma conta
3.  Gere API Key

#### 3️⃣ Inicie com Docker Compose

```text
# Sem rebuild
docker-compose up -d

# Com rebuild
docker-compose up --build -d
```
    

#### 4️⃣ Acesse a Aplicação

```text
http://localhost:8080
```
    

✅ **Pronto!** A aplicação está rodando.

### 💻 Desenvolvimento Local (Frontend)

```text
cd frontend

# Instalar dependências
npm install

# Servidor de desenvolvimento (hot reload)
npm run dev

# Build para produção
npm run build
``` 
    

* * *

## 📚 Recursos Úteis

### Documentação Oficial

-   [Vue 3 Docs](https://vuejs.org/guide/quick-start.html)
-   [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
-   [Pinia](https://pinia.vuejs.org/getting-started.html)
-   [OpenWeatherMap API](https://openweathermap.org/api)
-   [Docker](https://docs.docker.com/get-started/)
-   [Shadcn-vue](https://www.shadcn-vue.com/docs/introduction)

* * *

## 📄 Licença

GNU General Public License v3.0 - Veja [LICENSE](https://github.com/KaykyDeSouzaDias/weather-monitor?tab=GPL-3.0-1-ov-file#readme)

* * *

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para:

1.  Fork o projeto
2.  Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3.  Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4.  Push para a branch (`git push origin feature/AmazingFeature`)
5.  Abra um Pull Request

* * *

## ⭐ Suporte

Se este projeto foi útil para você, considere dar uma ⭐ no repositório!
