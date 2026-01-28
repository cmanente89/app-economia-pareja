import { createClient } from '@supabase/supabase-js';

// Usamos el prefijo EXPO_PUBLIC para que Expo las reconozca
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);