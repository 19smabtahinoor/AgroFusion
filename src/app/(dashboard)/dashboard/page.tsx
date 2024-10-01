import { redirect } from 'next/navigation';
export default async function page({ params }) {
    redirect('/dashboard/field_overview');
}