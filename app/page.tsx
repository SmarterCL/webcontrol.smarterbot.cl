'use client'

import React, { useEffect } from 'react';
import {
  ShieldCheck,
  BrainCircuit,
  Cpu,
  MapPin,
  Zap,
  LayoutDashboard,
  Shield,
  Database,
  ShoppingCart,
  Users,
  Send,
  ChevronDown
} from 'lucide-react';

export default function Home() {
  useEffect(() => {
    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.slide').forEach(slide => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Slide 1: Hero */}
      <section className="slide" id="hero-slide">
        <div className="slide-bg" style={{ backgroundImage: 'url("/hero.png")' }}></div>
        <div className="slide-content">
          <div className="slide-text hero-text">
            <span className="node-tag primary-tag">Smarter OS v2.2</span>
            <h2>La Red es el Territorio</h2>
            <p>Infraestructura Soberana para el Mercado Crossborder. Conectando Santiago y Mendoza bajo una Identidad Registrada e Inmutable.</p>
            <div className="cta-container">
              <a href="#dashboard" className="cta-button">VER MANIFIESTO</a>
              <code className="mono install-cmd">curl -sL smarter.sh | bash</code>
            </div>
          </div>
          <div className="hero-icon-container">
            <ShieldCheck size={240} className="floating-icon" />
          </div>
        </div>
        <div className="scroll-hint">
          <ChevronDown />
        </div>
      </section>

      {/* Slide 2: Cabernet */}
      <section className="slide" id="cabernet-slide">
        <div className="slide-bg" style={{ backgroundImage: 'url("/hero.png")' }}></div>
        <div className="slide-content">
          <div className="content-order-right">
            <div className="slide-text cabernet-text">
              <span className="node-tag cabernet-tag">Nodo Cabernet</span>
              <h2>Santiago 🍷🟠</h2>
              <p>Capa Cloud & Inferencia Crítica. 1000+ req/s procesando el RAG del SII en tiempo real via Groq Turbo. La soberanía del cumplimiento.</p>
            </div>
          </div>
          <div className="content-order-left">
            <BrainCircuit size={180} className="node-icon cabernet-icon" />
          </div>
        </div>
      </section>

      {/* Slide 3: Malbec */}
      <section className="slide" id="malbec-slide">
        <div className="slide-bg" style={{ backgroundImage: 'url("/malbec.png")' }}></div>
        <div className="slide-content">
          <div className="slide-text malbec-text">
            <span className="node-tag malbec-tag">Nodo Malbec</span>
            <h2>Mendoza 🍷🟠🟠</h2>
            <p>Capa Hardware Industrial (UNCuyo). Tokenización de activos físicos y racks de validación SSL industrial logic.</p>
          </div>
          <div className="malbec-icon-container">
            <Cpu size={180} className="node-icon malbec-icon" />
          </div>
        </div>
      </section>

      {/* Slide 4: Hub BA */}
      <section className="slide" id="ba-slide">
        <div className="slide-bg" style={{ backgroundImage: 'url("/ba.png")' }}></div>
        <div className="slide-content">
          <div className="content-order-right">
            <div className="slide-text ba-text">
              <span className="node-tag ba-tag">Hub BA</span>
              <h2>Buenos Aires 🟡</h2>
              <p>Estrategia Smart City y Gestión Crossborder. Cumplimiento AFIP y expansión Latam. El orquestador del Ecosistema.</p>
            </div>
          </div>
          <div className="content-order-left">
            <MapPin size={180} className="node-icon ba-icon" />
          </div>
        </div>
      </section>

      {/* Slide 5: Dashboard Empresarial Total */}
      <section className="slide dashboard-slide" id="dashboard">
        <div className="dashboard-intro">
          <h2>Dashboard Empresarial Total</h2>
          <p>Smarter OS + Odoo 19 + WebControl. Identidad inmutable en cada transacción.</p>
        </div>

        <div className="dashboard-mockup">
          {/* Sidebar */}
          <div className="db-sidebar">
            <div className="db-logo">
              <Zap className="zap-icon" />
              Smarter OS
            </div>
            <div className="db-nav-item active">
              <LayoutDashboard size={18} /> Dashboard
            </div>
            <div className="db-nav-item">
              <Shield size={18} /> WebControl
            </div>
            <div className="db-nav-item">
              <Database size={18} /> Odoo Integration
            </div>
            <div className="db-nav-item">
              <ShoppingCart size={18} /> eCommerce
            </div>
            <div className="db-nav-item">
              <Users size={18} /> Clientes
            </div>
          </div>

          {/* Main Content */}
          <div className="db-main">
            <div className="db-header">
              <h3>Panel de Control Sovereign</h3>
              <div className="status-badge">
                <span className="pulse-dot">●</span> SISTEMA ONLINE
              </div>
            </div>

            <div className="db-card-grid">
              <div className="db-card">
                <h4>Monto Protegido</h4>
                <div className="value">$1.825.000 <span className="growth">+12%</span></div>
              </div>
              <div className="db-card">
                <h4>Firma Digital</h4>
                <div className="value">ACTIVA</div>
              </div>
              <div className="db-card">
                <h4>Nodos Conectados</h4>
                <div className="value">3 / 3</div>
              </div>
            </div>

            <div className="module-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.5rem' }}>
              {/* WebControl Module */}
              <div className="webcontrol-overlay">
                <div className="module-header">
                  <h4>WEB_CONTROL INTERFACE</h4>
                  <Send size={18} />
                </div>
                <p className="module-desc">Control centralizado vía Telegram API. Mini Apps de gestión de torque activas.</p>
                <div className="terminal-mock">
                  <div className="term-line cmd">{'>'} status check</div>
                  <div className="term-line">- API Webhook: n8n.smarterbot.cl [CONNECTED]</div>
                  <div className="term-line">- Bot Identity: @SmarterReg_Bot [READY]</div>
                  <div className="term-line">- Regional Switch: Santiago {"->"} Mendoza [SYNKED]</div>
                </div>
              </div>

              {/* Antifraude Module */}
              <div className="antifraude-mini">
                <h4 className="alert-title">ALERTA ANTIFRAUDE</h4>
                <div className="order-row">
                  <span>ORD-005 (Luis T.)</span>
                  <span className="risk-high">RIESGO 100</span>
                </div>
                <div className="order-row">
                  <span>ORD-003 (Pedro S.)</span>
                  <span className="risk-high">RIESGO 70</span>
                </div>
                <div className="order-row border-none">
                  <span>ORD-004 (Ana M.)</span>
                  <span className="risk-med">RIESGO 40</span>
                </div>
              </div>
            </div>

            <div className="odoo-integration-card">
              <h4>Odoo 19: Flujo Operativo Total</h4>
              <div className="odoo-tags">
                <span className="odoo-tag">CONTABILIDAD</span>
                <span className="odoo-tag">INVENTARIO</span>
                <span className="odoo-tag">CRM</span>
              </div>
              <p className="odoo-desc">Optimización de procesos crossborder con inteligencia de negocio avanzada y cumplimiento SII nativo.</p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="db-right">
            <h4>Actividad de Red</h4>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-node">Nodo Malbec (Mendoza)</div>
                <div className="activity-desc">Sincronizando firma digital...</div>
              </div>
              <div className="activity-item">
                <div className="activity-node">Factura SII #1234</div>
                <div className="activity-desc">Emitida con éxito.</div>
              </div>
              <div className="activity-item">
                <div className="activity-node">CoPaw Bridge</div>
                <div className="activity-desc">Hardware detectado en Node Malbec.</div>
              </div>
            </div>
            <div className="user-profile">
              <div className="profile-tag">User Identity</div>
              <div className="profile-name">Domingo C.</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .active {
          animation: fadeIn 1s forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
