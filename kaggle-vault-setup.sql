-- =============================================
-- KAGGLE VAULT - Supabase SQL
-- Ejecutar en: https://supabase.com/dashboard → SQL Editor
-- =============================================

-- 1. Crear esquema vault
CREATE SCHEMA IF NOT EXISTS vault;

-- 2. Crear tabla credentials
CREATE TABLE IF NOT EXISTS vault.credentials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_name TEXT NOT NULL,
  credential_key TEXT NOT NULL,
  credential_value TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(service_name, credential_key)
);

-- 3. Insertar credenciales de Kaggle
INSERT INTO vault.credentials (service_name, credential_key, credential_value)
VALUES 
  ('kaggle', 'username', 'smarteros'),
  ('kaggle', 'key', 'd4eddfe2b7080da2be8a16aff890e7fe'),
  ('kaggle', 'account_number', '32823079')
ON CONFLICT (service_name, credential_key) 
DO UPDATE SET 
  credential_value = EXCLUDED.credential_value,
  updated_at = NOW();

-- 4. Verificar
SELECT * FROM vault.credentials WHERE service_name = 'kaggle';
