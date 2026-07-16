import { createClient } from '@supabase/supabase-js'

const URL = 'https://wejlkdjmmszqbdpiuqkq.supabase.co' // supabase project URL
const API_KEY = 'sb_publishable_rGCIJDUA4JqprX1L3YrORQ_cFptieO5' // public API key

export const supabase = createClient(URL, API_KEY) // creates a new Supabase client instance that connects app to Supabase project