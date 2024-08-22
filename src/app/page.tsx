import Banner from '@/components/banner';
import Casestudies from '@/components/case-studies';
import Footer from '@/components/footer';
import Lmth from '@/components/lmth';
import Services from '@/components/services';
import Team from '@/components/team';
import Workingprocess from '@/components/working-process';

export default function Home() {
  return (
    <main className="mt-10 flex flex-col gap-20">
      <Banner />
      <Services />
      <Lmth />
      <Casestudies />
      <Workingprocess />
      <Team />
      <Footer />
    </main>
  );
}
