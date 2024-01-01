import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string | undefined = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey: string | undefined = process.env.REACT_APP_SUPABASE_KEY;

export const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
