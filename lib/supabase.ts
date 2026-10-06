import { createClient } from '@supabase/supabase-js';

// Fallbacks seguros para demostración técnica pública sin expores secretos
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo-project.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-anon-key';

/**
 * Cliente de Supabase para consultas del catálogo y persistencia de datos.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);