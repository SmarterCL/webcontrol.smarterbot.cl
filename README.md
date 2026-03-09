# webcontrol.smarterbot.cl

Landing page de Smarter OS v5 - Infraestructura Soberana Crossborder

## 🌐 URLs

- **Producción**: https://webcontrol.smarterbot.cl
- **VPS**: root@89.116.23.167
- **Puerto Docker**: 3003

## 🚀 Despliegue

```bash
# 1. Build local
cd /Users/mac/dev/2026/webcontrol.smarterbot.cl
npm run build

# 2. Sync a VPS
rsync -avz --exclude node_modules --exclude .git --exclude .next . root@89.116.23.167:/opt/webcontrol/

# 3. Build Docker en VPS
ssh root@89.116.23.167
cd /opt/webcontrol
docker build -t webcontrol-smarterbot:latest .

# 4. Reiniciar contenedor
docker stop webcontrol-smarterbot && docker rm webcontrol-smarterbot
docker run -d --name webcontrol-smarterbot -p 3003:3000 --network smarteros-web --restart unless-stopped webcontrol-smarterbot:latest
```

## 📁 Estructura

```
webcontrol.smarterbot.cl/
├── app/
│   ├── layout.tsx      # SEO metadata
│   ├── page.tsx        # Landing principal
│   └── globals.css     # Estilos parallax
├── public/
│   ├── robots.txt      # SEO
│   └── sitemap.xml     # SEO
├── Dockerfile          # Multi-stage build
└── README.md           # Este archivo
```

## 🔧 Stack

- **Framework**: Next.js 16
- **Estilos**: CSS puro (no Tailwind)
- **Icons**: Lucide React
- **Efectos**: Parallax, partículas, animaciones CSS
- **部署**: Docker + Caddy

## 🔒 SEO

- Metadata optimizada para Google
- Open Graph tags
- Twitter cards
- robots.txt
- sitemap.xml
- Favicon configurado
- Theme color

## 📱 Responsive

- Mobile-first
- Grid adaptativo
- Breakpoints: 768px, 1024px

## 🔐 Seguridad

- No expósición de API keys en código
- Headers de seguridad vía Caddy
- SSL automático via Let's Encrypt

## 🌍 Servicios Vinculados

| Servicio | URL |
|---------|-----|
| API Gateway | api.smarterbot.cl |
| Odoo ERP | odoo.smarterbot.cl |
| n8n | n8n.smarterbot.cl |
| Chatwoot | chat.smarterbot.cl |
| Grafana | bi.smarterbot.cl |
| Draw.ai | draw.smarterbot.cl |

## 📄 Licencia

MIT - Smarter OS
