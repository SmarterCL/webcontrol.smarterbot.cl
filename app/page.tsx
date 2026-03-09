'use client'

import React, { useEffect, useState } from 'react';
import {
  Zap, Activity, Server, Gauge, TrendingUp,
  ShieldCheck, BrainCircuit, Cpu, MapPin, Lock,
  Database, FileText, AlertTriangle, Workflow,
  Bot, Cloud, ExternalLink, CheckCircle, Cpu as Chip
} from 'lucide-react';

interface Status {
  nodes: number;
  uptime: string;
  requests: string;
  latency: string;
}

export default function Home() {
  const [status, setStatus] = useState<Status>({ nodes: 3, uptime: '99.9%', requests: '1.2M', latency: '12ms' });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const interval = setInterval(() => {
      setStatus(prev => ({ ...prev, requests: `${(Math.random() * 0.5 + 1).toFixed(1)}M` }));
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const services = [
    { name: 'API Gateway', icon: <Server size={20} /> },
    { name: 'Odoo ERP', icon: <Database size={20} /> },
    { name: 'n8n Workflows', icon: <Workflow size={20} /> },
    { name: 'Chatwoot', icon: <Bot size={20} /> },
    { name: 'Supabase', icon: <Cloud size={20} /> },
    { name: 'Grafana', icon: <Gauge size={20} /> },
  ];

  return (
    <main className="parallax-wrapper">
      {/* Hero Section with Parallax */}
      <section className="hero-section">
        <div className="hero-bg-layer bg-1" style={{ transform: `translateY(${scrollY * 0.3}px)` }}></div>
        <div className="hero-bg-layer bg-2" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
        <div className="hero-bg-layer bg-3"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{ 
              left: `${Math.random() * 100}%`, 
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
        <div className="hero-grid"></div>
        
        <div className="hero-content">
          <div className="hero-glow"></div>
          <div className="hero-badge">
            <Zap size={14} />
            Smarter OS v5.0
          </div>
          <h1>La Red es el <span className="highlight">Territorio</span></h1>
          <p className="hero-subtitle">
            Infraestructura Soberana Crossborder. Santiago ↔ Mendoza ↔ Buenos Aires.<br/>
            <span className="mono">Identidad Inmutable + Cumplimiento SII/AFIP + Organoid Intelligence</span>
          </p>
          <div className="hero-cta-group">
            <a href="#dashboard" className="btn btn-primary">
              <Activity size={18} />
              Panel de Control
            </a>
            <a href="#draw-demo" className="btn btn-secondary">
              <Chip size={18} />
              Demo draw.ai
            </a>
          </div>
          <code className="install-cmd">curl -sL smarter.sh | bash</code>
        </div>
        
        <div className="scroll-hint">
          <span>Scroll</span>
          <Activity size={20} />
        </div>
      </section>

      {/* Network Status Bar */}
      <nav className="network-bar">
        <div className="network-stat">
          <Activity size={16} />
          <span className="stat-value">{status.nodes}</span>
          <span className="stat-label">Nodos</span>
        </div>
        <div className="network-stat">
          <Server size={16} />
          <span className="stat-value">{status.uptime}</span>
          <span className="stat-label">Uptime</span>
        </div>
        <div className="network-stat">
          <TrendingUp size={16} />
          <span className="stat-value">{status.requests}</span>
          <span className="stat-label">Requests</span>
        </div>
        <div className="network-stat">
          <Gauge size={16} />
          <span className="stat-value">{status.latency}</span>
          <span className="stat-label">Latencia</span>
        </div>
      </nav>

      {/* Nodes Section */}
      <section className="section section-dark">
        <div className="nodes-container">
          <div className="section-header">
            <h2>Red de Nodos</h2>
            <p>Infraestructura distribuida en Latam</p>
          </div>
          <div className="nodes-grid">
            <div className="node-card cabernet">
              <div className="node-header">
                <span className="node-tag">Nodo Cabernet</span>
                <span className="node-status">ONLINE</span>
              </div>
              <div className="node-info">
                <div className="node-icon-wrap"><BrainCircuit size={32} /></div>
                <h3>Santiago 🇨🇱</h3>
                <p>Capa Cloud & Inferencia Crítica</p>
              </div>
              <ul className="node-features">
                <li><CheckCircle size={14} /> Groq Turbo - 1000+ req/s</li>
                <li><CheckCircle size={14} /> RAG SII tiempo real</li>
                <li><CheckCircle size={14} /> Cumplimiento SII</li>
              </ul>
              <div className="node-metrics">
                <div className="metric"><span className="metric-value">847</span><span className="metric-label">req/s</span></div>
                <div className="metric"><span className="metric-value">8ms</span><span className="metric-label">latencia</span></div>
              </div>
            </div>

            <div className="node-card malbec">
              <div className="node-header">
                <span className="node-tag">Nodo Malbec</span>
                <span className="node-status">ONLINE</span>
              </div>
              <div className="node-info">
                <div className="node-icon-wrap"><Cpu size={32} /></div>
                <h3>Mendoza 🇦🇷</h3>
                <p>Capa Hardware Industrial</p>
              </div>
              <ul className="node-features">
                <li><CheckCircle size={14} /> Rack SSL Validation</li>
                <li><CheckCircle size={14} /> Tokenización activos</li>
                <li><CheckCircle size={14} /> CoPaw Bridge</li>
              </ul>
              <div className="node-metrics">
                <div className="metric"><span className="metric-value">24/7</span><span className="metric-label">disponible</span></div>
                <div className="metric"><span className="metric-value">UNCuyo</span><span className="metric-label">partner</span></div>
              </div>
            </div>

            <div className="node-card ba">
              <div className="node-header">
                <span className="node-tag">Hub BA</span>
                <span className="node-status">ONLINE</span>
              </div>
              <div className="node-info">
                <div className="node-icon-wrap"><MapPin size={32} /></div>
                <h3>Buenos Aires 🇦🇷</h3>
                <p>Orquestador Crossborder</p>
              </div>
              <ul className="node-features">
                <li><CheckCircle size={14} /> Cumplimiento AFIP</li>
                <li><CheckCircle size={14} /> Smart City</li>
                <li><CheckCircle size={14} /> Expansión Latam</li>
              </ul>
              <div className="node-metrics">
                <div className="metric"><span className="metric-value">156</span><span className="metric-label">operaciones</span></div>
                <div className="metric"><span className="metric-value">12ms</span><span className="metric-label">latencia</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-card">
        <div className="services-container">
          <div className="section-header">
            <h2>Servicios Activos</h2>
            <p>Todos los sistemas operando normalmente</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-name">{s.name}</div>
                <div className="service-status">● online</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Draw Demo */}
      <section className="section section-dark" id="draw-demo">
        <div className="draw-section">
          <div className="draw-header">
            <div className="draw-header-left">
              <Chip size={32} />
              <div>
                <h2>Draw.ai - Visual Automation</h2>
                <p>Crea diagramas con IA. Integración MCP activa.</p>
              </div>
            </div>
            <a href="https://draw.smarterbot.cl" target="_blank" rel="noopener" className="btn btn-secondary">
              <ExternalLink size={16} />
              Abrir Editor
            </a>
          </div>
          <div className="draw-frame">
            <iframe src="https://draw.smarterbot.cl" title="Draw.ai" />
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="section section-dark" id="dashboard">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <h2>Panel de Control</h2>
            <div className="status-badge">
              <span className="dot"></span>
              SISTEMA ONLINE
            </div>
          </div>

          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-icon"><ShieldCheck size={24} /></div>
              <div className="kpi-data">
                <span className="kpi-label">Monto Protegido</span>
                <span className="kpi-value">$1.825.000</span>
                <span className="kpi-change">+12%</span>
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon"><Lock size={24} /></div>
              <div className="kpi-data">
                <span className="kpi-label">Firma Digital</span>
                <span className="kpi-value">ACTIVA</span>
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon"><Activity size={24} /></div>
              <div className="kpi-data">
                <span className="kpi-label">Nodos</span>
                <span className="kpi-value">3 / 3</span>
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon"><FileText size={24} /></div>
              <div className="kpi-data">
                <span className="kpi-label">Facturas SII</span>
                <span className="kpi-value">1.247</span>
                <span className="kpi-change">+8%</span>
              </div>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="dash-col">
              <div className="module">
                <div className="module-head">
                  <div className="module-title">
                    <ShieldCheck size={20} />
                    <h3>WebControl</h3>
                  </div>
                  <span className="module-tag">TELEGRAM</span>
                </div>
                <p className="module-desc">Control via API + Mini Apps activas</p>
                <div className="terminal">
                  <div className="terminal-top">
                    <span className="term-dot r"></span>
                    <span className="term-dot y"></span>
                    <span className="term-dot g"></span>
                    <span className="term-title">webcontrol@smarteros:~$</span>
                  </div>
                  <div className="terminal-body">
                    <div className="term-line cmd">{'>'} status check</div>
                    <div className="term-line ok">✓ API: n8n.smarterbot.cl [CONNECTED]</div>
                    <div className="term-line ok">✓ Bot: @SmarterReg_Bot [READY]</div>
                    <div className="term-line ok">✓ Kaggle: smarteros/smarteros [OK]</div>
                    <div className="term-line">{'>'} <span className="term-cursor"></span></div>
                  </div>
                </div>
              </div>

              <div className="module">
                <div className="module-head">
                  <div className="module-title">
                    <Database size={20} />
                    <h3>Odoo 19 ERP</h3>
                  </div>
                  <a href="https://odoo.smarterbot.cl" target="_blank" className="btn" style={{padding: '4px 8px', fontSize: '0.75rem'}}>
                    <ExternalLink size={12} />
                  </a>
                </div>
                <div className="odoo-stats-row">
                  <div><div className="odoo-stat-num">847</div><div className="odoo-stat-label">Pedidos</div></div>
                  <div><div className="odoo-stat-num">23.4K</div><div className="odoo-stat-label">Productos</div></div>
                  <div><div className="odoo-stat-num">156</div><div className="odoo-stat-label">Clientes</div></div>
                </div>
                <div className="odoo-tags">
                  <span className="odoo-tag">CONTABLE</span>
                  <span className="odoo-tag">INVENTARIO</span>
                  <span className="odoo-tag">CRM</span>
                  <span className="odoo-tag">VENTAS</span>
                </div>
              </div>
            </div>

            <div className="dash-col">
              <div className="module">
                <div className="module-head">
                  <div className="module-title"><AlertTriangle size={20} /><h3>Anti-fraude</h3></div>
                  <span className="fraud-alert-count">3</span>
                </div>
                <div className="fraud-list">
                  <div className="fraud-row">
                    <div><div className="fraud-id">ORD-005</div><div className="fraud-cust">Luis T.</div></div>
                    <span className="fraud-risk">RIESGO 100</span>
                  </div>
                  <div className="fraud-row">
                    <div><div className="fraud-id">ORD-003</div><div className="fraud-cust">Pedro S.</div></div>
                    <span className="fraud-risk">RIESGO 70</span>
                  </div>
                  <div className="fraud-row med">
                    <div><div className="fraud-id">ORD-004</div><div className="fraud-cust">Ana M.</div></div>
                    <span className="fraud-risk">RIESGO 40</span>
                  </div>
                </div>
              </div>

              <div className="module">
                <div className="module-head">
                  <div className="module-title"><Activity size={20} /><h3>Actividad</h3></div>
                </div>
                <div className="activity-feed">
                  <div className="activity-row">
                    <span className="activity-time">14:35</span>
                    <div><span className="activity-node">Nodo Malbec</span><div className="activity-desc">Firma digital sincronizada</div></div>
                  </div>
                  <div className="activity-row">
                    <span className="activity-time">14:32</span>
                    <div><span className="activity-node">SII</span><div className="activity-desc">Factura #1234 emitida</div></div>
                  </div>
                  <div className="activity-row">
                    <span className="activity-time">14:22</span>
                    <div><span className="activity-node">Kaggle</span><div className="activity-desc">Dataset actualizado</div></div>
                  </div>
                </div>
              </div>

              <div className="module">
                <div className="module-head">
                  <div className="module-title"><Zap size={20} /><h3>Acciones</h3></div>
                </div>
                <div className="actions-grid">
                  <a href="https://n8n.smarterbot.cl" target="_blank" className="action-link"><Workflow size={14} /> n8n</a>
                  <a href="https://chat.smarterbot.cl" target="_blank" className="action-link"><Bot size={14} /> Chatwoot</a>
                  <a href="https://bi.smarterbot.cl" target="_blank" className="action-link"><Gauge size={14} /> Grafana</a>
                  <a href="https://draw.smarterbot.cl" target="_blank" className="action-link"><Chip size={14} /> Draw.ai</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
