import { Metadata } from 'next';
import { listCard } from '@/app/lib/utils';
import { cacheFn } from '@/app/lib/utils';
import { Card } from '@/app/ui/dashboard/cards';
import Button from './button';


export const metadata: Metadata = {
	title: 'Customers',
};

export default function Page() {
	// const {
	// 	numberOfInvoices,
	// 	numberOfCustomers,
	// 	totalPaidInvoices,
	// 	totalPendingInvoices,
	// } = await listCard();
	return (
		<>
			<p>Customers Page</p>
			<p>{cacheFn('hello from cache')}</p>
			{/* <button onClick={() => setShow(!show)}>Show</button> */}
			{/* <Button totalPaidInvoices={totalPaidInvoices} /> */}
			{/* <Card
				title="Collected"
				value={totalPaidInvoices}
				type="collected"
			/>
			<Card title="Pending" value={totalPendingInvoices} type="pending" />
			<Card
				title="Total Invoices"
				value={numberOfInvoices}
				type="invoices"
			/>
			<Card
				title="Total Customers"
				value={numberOfCustomers}
				type="customers"
			/> */}
		</>
	);
}
