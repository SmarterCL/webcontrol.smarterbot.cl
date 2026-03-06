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
    // Simple intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.slide').forEach(slide => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Slide 1: Hero */}
      <section className="slide" id="hero-slide">
        <div className="slide-bg" style={{ backgroundImage: 'url("/hero.png")' }}></div>
        <div className="slide-content">
          <div className="slide-text" style={{ borderLeft: '6px solid #ff6b00' }}>
            <span className="node-tag" style={{ background: '#ff6b00', color: 'white' }}>Smarter OS v2.2</span>
            <h2>La Red es el Territorio</h2>
            <p>Infraestructura Soberana para el Mercado Crossborder. De la Ferretería al Nodo Cabernet, conectando Santiago y Mendoza bajo una Identidad Registrada.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="#dashboard" className="cta-button">VER MANIFIESTO</a>
              <code className="mono" style={{ color: '#4ade80', fontFamily: 'JetBrains Mono, monospace' }}>curl -sL smarter.sh | bash</code>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ShieldCheck size={240} style={{ color: 'white', opacity: 0.1 }} />
          </div>
        </div>
        <div className="scroll-hint">
          <ChevronDown style={{ animation: 'bounce 2s infinite' }} />
        </div>
      </section>

      {/* Slide 2: Cabernet */}
      <section className="slide" id="cabernet-slide">
        <div className="slide-bg" style={{ backgroundImage: 'url("/hero.png")' }}></div>
        <div className="slide-content">
          <div style={{ order: 2 }}>
            <div className="slide-text" style={{ borderLeft: 0, borderRight: '6px solid #ff6b00', textAlign: 'right' }}>
              <span className="node-tag" style={{ background: '#ff6b00', color: 'white' }}>Nodo Cabernet</span>
              <h2>Santiago 🍷🟠</h2>
              <p>Capa Cloud & Inferencia Crítica. 1000+ req/s procesando el RAG del SII en tiempo real via Groq Turbo. La mente maestra del cumplimiento digital.</p>
            </div>
          </div>
          <div style={{ order: 1, display: 'flex', justifyContent: 'center' }}>
            <BrainCircuit size={180} style={{ color: '#ff6b00' }} />
          </div>
        </div>
      </section>

      {/* Slide 3: Malbec */}
      <section className="slide" id="malbec-slide">
        <div className="slide-bg" style={{ backgroundImage: 'url("/malbec.png")' }}></div>
        <div className="slide-content">
          <div className="slide-text" style={{ borderLeft: '6px solid #ff4500' }}>
            <span className="node-tag" style={{ background: '#ff4500', color: 'white' }}>Nodo Malbec</span>
            <h2>Mendoza 🍷🟠🟠</h2>
            <p>Capa Hardware Industrial (UNCuyo). Tokenización de activos físicos y racks de validación SSL industrial. Donde el bit toca el chasis.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Cpu size={180} style={{ color: '#ff4500' }} />
          </div>
        </div>
      </section>

      {/* Slide 4: Hub BA */}
      <section className="slide" id="ba-slide">
        <div className="slide-bg" style={{ backgroundImage: 'url("/ba.png")' }}></div>
        <div className="slide-content">
          <div style={{ order: 2 }}>
            <div className="slide-text" style={{ borderLeft: 0, borderRight: '6px solid #facc15', textAlign: 'right' }}>
              <span className="node-tag" style={{ background: '#facc15', color: 'black' }}>Hub BA</span>
              <h2>Buenos Aires 🟡</h2>
              <p>Estrategia Smart City y Gestión Crossborder. Cumplimiento AFIP y expansión Latam. El orquestador de la Identidad Registrada.</p>
            </div>
          </div>
          <div style={{ order: 1, display: 'flex', justifyContent: 'center' }}>
            <MapPin size={180} style={{ color: '#facc15' }} />
          </div>
        </div>
      </section>

      {/* Slide 5: Dashboard Empresarial Total */}
      <section className="slide dashboard-slide" id="dashboard">
        <div style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>Dashboard Empresarial Total</h2>
          <p style={{ color: '#8b949e' }}>Smarter OS + Odoo 19 + WebControl. Identidad inmutable en cada transacción.</p>
        </div>

        <div className="dashboard-mockup">
          {/* Sidebar */}
          <div className="db-sidebar" style={{ background: '#1e293b', color: 'white', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="db-logo" style={{ fontWeight: 900, fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Zap style={{ color: '#facc15' }} />
              Smarter OS
            </div>
            <div className="db-nav-item active" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', cursor: 'pointer', color: '#facc15' }}>
              <LayoutDashboard size={18} /> Dashboard
            </div>
            <div className="db-nav-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', opacity: 0.7, cursor: 'pointer' }}>
              <Shield size={18} /> WebControl
            </div>
            <div className="db-nav-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', opacity: 0.7, cursor: 'pointer' }}>
              <Database size={18} /> Odoo Integration
            </div>
            <div className="db-nav-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', opacity: 0.7, cursor: 'pointer' }}>
              <ShoppingCart size={18} /> eCommerce
            </div>
            <div className="db-nav-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', opacity: 0.7, cursor: 'pointer' }}>
              <Users size={18} /> Clientes
            </div>
          </div>

          {/* Main Content */}
          <div className="db-main" style={{ padding: '2rem', background: '#f8fafc', overflowY: 'auto' }}>
            <div className="db-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontWeight: 700 }}>Panel de Control Sovereign</h3>
              <div className="status-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', padding: '4px 10px', borderRadius: '99px', fontSize: '0.7rem', fontWeight: 700 }}>
                <span style={{ animation: 'pulse 1.5s infinite' }}>●</span> SISTEMA ONLINE
              </div>
            </div>

            <div className="db-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              <div className="db-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Monto Protegido</h4>
                <div className="value" style={{ fontSize: '1.8rem', fontWeight: 800 }}>$1.825.000 <span style={{ fontSize: '0.8rem', color: '#22c55e' }}>+12%</span></div>
              </div>
              <div className="db-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Firma Digital</h4>
                <div className="value" style={{ fontSize: '1.8rem', fontWeight: 800 }}>ACTIVA</div>
              </div>
              <div className="db-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Nodos Conectados</h4>
                <div className="value" style={{ fontSize: '1.8rem', fontWeight: 800 }}>3 / 3</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.5rem' }}>
              {/* WebControl Module */}
              <div className="webcontrol-overlay" style={{ background: 'linear-gradient(135deg, #242f3d 0%, #17212b 100%)', color: 'white', padding: '1.5rem', borderRadius: '12px', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h4 style={{ fontWeight: 700 }}>WEB_CONTROL INTERFACE</h4>
                  <Send size={18} />
                </div>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#cbd5e1' }}>Control centralizado vía Telegram API. Mini Apps de gestión de torque activas.</p>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '8px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem' }}>
                  <div style={{ color: '#60a5fa' }}>{'>'} status check</div>
                  <div>- API Webhook: n8n.smarterbot.cl [CONNECTED]</div>
                  <div>- Bot Identity: @SmarterReg_Bot [READY]</div>
                  <div>- Regional Switch: Santiago {"->"} Mendoza [SYNKED]</div>
                </div>
              </div>

              {/* Antifraude Module */}
              <div className="antifraude-mini" style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', border: '1px solid #fee2e2' }}>
                <h4 style={{ marginBottom: '1rem', color: '#ef4444', fontWeight: 700 }}>ALERTA ANTIFRAUDE</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f1f5f9', fontSize: '0.8rem' }}>
                  <span>ORD-005 (Luis T.)</span>
                  <span style={{ color: '#ef4444', fontWeight: 700 }}>RIESGO 100</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f1f5f9', fontSize: '0.8rem' }}>
                  <span>ORD-003 (Pedro S.)</span>
                  <span style={{ color: '#ef4444', fontWeight: 700 }}>RIESGO 70</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontSize: '0.8rem' }}>
                  <span>ORD-004 (Ana M.)</span>
                  <span style={{ color: '#f59e0b', fontWeight: 700 }}>RIESGO 40</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ marginBottom: '1rem', fontWeight: 700 }}>Odoo 19: Flujo Operativo Total</h4>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span className="node-tag" style={{ background: '#e2e8f0', color: '#475569', fontSize: '0.6rem' }}>CONTABILIDAD</span>
                <span className="node-tag" style={{ background: '#e2e8f0', color: '#475569', fontSize: '0.6rem' }}>INVENTARIO</span>
                <span className="node-tag" style={{ background: '#e2e8f0', color: '#475569', fontSize: '0.6rem' }}>CRM</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '10px' }}>Optimización de procesos crossborder con inteligencia de negocio avanzada y cumplimiento SII nativo.</p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="db-right" style={{ background: 'white', borderLeft: '1px solid #e2e8f0', padding: '2rem 1.5rem' }}>
            <h4 style={{ marginBottom: '1.5rem', fontWeight: 700 }}>Actividad de Red</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontSize: '0.75rem' }}>
                <div style={{ fontWeight: 700 }}>Nodo Malbec (Mendoza)</div>
                <div style={{ color: '#94a3b8' }}>Sincronizando firma digital...</div>
              </div>
              <div style={{ fontSize: '0.75rem' }}>
                <div style={{ fontWeight: 700 }}>Factura SII #1234</div>
                <div style={{ color: '#94a3b8' }}>Emitida con éxito.</div>
              </div>
              <div style={{ fontSize: '0.75rem' }}>
                <div style={{ fontWeight: 700 }}>CoPaw Bridge</div>
                <div style={{ color: '#94a3b8' }}>Hardware detectado en Node Malbec.</div>
              </div>
            </div>
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.6rem', color: '#94a3b8', textTransform: 'uppercase' }}>User Identity</div>
              <div style={{ fontWeight: 900, marginTop: '5px' }}>Domingo C.</div>
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
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #ff6b00;
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 800;
          box-shadow: 0 10px 30px rgba(255, 107, 0, 0.3);
          transition: 0.3s;
        }
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 107, 0, 0.4);
        }
      `}</style>
    </main>
  );
}
