import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';

const LayoutPage = dynamic(() => import('@containers/layout'));

const Custom404 = () => {
  const router = useRouter();

  return (
    <LayoutPage>
      <Head>
        <title>Not Found</title>
      </Head>
      <div className="w-full min-h-[100vh] flex flex-col items-center justify-center space-y-4">
        <h1>404 - Halaman yang Anda Cari Belum Tersedia </h1>
        <button
          className="py-2 px-4 border-[1px] border-[black] rounded-[10px]"
          onClick={() => router.push('/')}>
          Back to Home
        </button>
      </div>
    </LayoutPage>
  );
};

export default Custom404;
