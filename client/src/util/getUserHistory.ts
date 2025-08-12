import { createClient } from '@supabase/supabase-js';

const supabaseURL =     import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

console.log('Supabase URL:', supabaseURL);
console.log('Supabase Anon Key:', supabaseAnonKey);

if (!supabaseURL || !supabaseAnonKey) throw new Error('Missing Supabase environment variables')
else console.log('Supabase environment variables loaded');

const supabase = createClient(supabaseURL, supabaseAnonKey);

export const getUserHistory = async () => {
  const {data: {user}, error: userError} = await supabase.auth.getUser();

  if (userError) throw userError;
  if (!user) throw new Error('No user logged in');

  const { data, error } = await supabase
    .from('readings')
    .select('*')
    .eq('user_id', user?.id)
    .order('created_at', { ascending: false });

  if (error) throw error
  return data || [];
};
