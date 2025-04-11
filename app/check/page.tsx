import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {

  return (
    <main>
      <div className="w-full">
        <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
          Check
        </h1>
      </div>
    </main>
  );
}