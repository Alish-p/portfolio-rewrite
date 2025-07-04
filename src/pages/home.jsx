import { Helmet } from 'react-helmet-async';

import { Ribbons } from 'src/components/ribbons';

import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Minimals UI: The starting point for your next project',
  description:
    'The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
        <Ribbons colors={['#ffffff']} />
      </div>

      <HomeView />
    </>
  );
}
