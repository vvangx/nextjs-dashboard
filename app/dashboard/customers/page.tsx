import { lusitana } from '@/app/ui/fonts';
import CustomersTable from '@/app/ui/customers/table';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Search from '@/app/ui/search';

export const metadata: Metadata = {
	title: 'Customers',
};

export default async function Page(props: {
	searchParams?: Promise<{
		query?: string;
	}>;
}) {
	const searchParams = await props.searchParams;
	const query = searchParams?.query || '';
	return (
		<div className="w-full">
			<div className="w-full flex items-center justify-between">
				<h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
			</div>
			<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
				<Search placeholder="Search customers..." />
			</div>
			<Suspense fallback={<CustomersTableSkeleton />}>
				<CustomersTable query={query} />
			</Suspense>
		</div>
	);
}
