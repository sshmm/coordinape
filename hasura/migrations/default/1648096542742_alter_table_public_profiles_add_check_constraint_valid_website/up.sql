update "public"."profiles" set website = CONCAT('https://',website) where website not ilike 'https://%' and website not ilike 'http://%' and website is not null;

alter table "public"."profiles" add constraint "valid_website" check (website::text ~* 'https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,255}\.[a-z]{2,9}\y([-a-zA-Z0-9@:%_\+.,~#?!&>//=]*)$'::text);
