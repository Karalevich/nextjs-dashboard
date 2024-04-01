import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";
import { fetchFilteredCustomers } from "@/app/lib/data";


export const metadata: Metadata = {
  title: 'Customers Table',
};

export default async function Page({
                                     searchParams,
                                   }: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query?.toString() || '';

console.log('query', query)
  const totalCustomers = await fetchFilteredCustomers(query);
console.log('totalCustomers', totalCustomers)
  return <CustomersTable customers={totalCustomers} />
}