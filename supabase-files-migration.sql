-- Run this once in the existing Supabase project for private workout documents.
alter table public.workouts add column if not exists file_path text;

insert into storage.buckets (id, name, public)
values ('workout-files', 'workout-files', false)
on conflict (id) do nothing;

create policy "Coaches and admins can upload workout files"
    on storage.objects for insert
    with check (
        bucket_id = 'workout-files'
        and public.current_user_role() in ('coach', 'admin')
    );

create policy "Users can read assigned workout files"
    on storage.objects for select
    using (
        bucket_id = 'workout-files'
        and (
            auth.uid()::text = split_part(name, '/', 1)
            or public.current_user_role() in ('coach', 'admin')
        )
    );
