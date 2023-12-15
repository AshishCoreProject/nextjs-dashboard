// import { Card } from '@/app/(ui)/dashboard/cards';
import RevenueChart from '@/app/(ui)/dashboard/revenue-chart';
import LatestInvoices from '@/app/(ui)/dashboard/latest-invoices';
import { whisper } from '../fonts';
import { Suspense } from 'react';
import CardWrapper from '@/app/(ui)/dashboard/cards';
import {
  LatestInvoicesSkeleton,
  CardsSkeleton,
  RevenueChartSkeleton,
} from '@/app/(ui)/skeletons';

export default async function Page() {
  return (
    <main>
      <h1
        className={`${whisper.className} mb-4 rounded-md border border-blue-400 bg-zinc-300 text-xl md:text-2xl`}
      >
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
