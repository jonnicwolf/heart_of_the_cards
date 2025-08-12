import { createClient } from "@supabase/supabase-js";

export const postnewUserHistory = async (userData) => {
  const { name, card_number, reading } = userData;
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  );

  const { data, error } = await supabase
    .from('readings')
    .insert({
      reading_text: {
        "name": `${name}`,
        "card_number": `${card_number}`,
        "reading": `${reading}`
      },
      spread_type: "three_card",
      tags: ["love"],
    });

  if (error) {
    console.error("Error inserting data:", error);
    throw new Error("Failed to insert user history");
  };

  return data;
};
