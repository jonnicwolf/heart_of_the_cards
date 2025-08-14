import { createClient } from "@supabase/supabase-js";

export const postnewUserHistory = async (newReading) => {
  const { reading_text, spread_type, tags } = newReading;
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );

  const { data, error } = await supabase
    .from('readings')
    .insert({
      reading_text: reading_text,
      spread_type: spread_type,
      tags: tags,
    });

  if (error) {
    console.error("Error inserting data:", error);
    throw new Error("Failed to insert user history");
  };

  return data;
};
