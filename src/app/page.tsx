import Banner from '@/components/banner';
import Casestudies from '@/components/case-studies';
import { Icons } from '@/components/icons';
import Lmth from '@/components/lmth';
import Services from '@/components/services';
import Team from '@/components/team';
import Label from '@/components/ui/label';
import Workingprocess from '@/components/working-process';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="mt-10 flex flex-col gap-20">
      <Banner />
      <Services />
      <Lmth />
      <Casestudies />
      <Workingprocess />
      <Team />
      <div className="p-5 rounded-t-2xl bg-dark text-white">
        <div className="flex flex-col gap-5 items-center lg:items-start">
          <div className="flex flex-col lg:flex-row gap-5 items-center justify-between w-full">
            <div className="flex flex-row gap-2 items-center">
              <Icons.icon className="text-white" />
              <h2>Inspiritus</h2>
            </div>
            <div className="flex flex-col gap-3 lg:flex-row items-center">
              <Link
                className="opacity-80 hover:opacity-100 underline"
                href="#"
              >
                About us
              </Link>
              <Link
                className="opacity-80 hover:opacity-100 underline"
                href="#"
              >
                Services
              </Link>
              <Link
                className="opacity-80 hover:opacity-100 underline"
                href="#"
              >
                Use cases
              </Link>
              <Link
                className="opacity-80 hover:opacity-100 underline"
                href="#"
              >
                Pricing
              </Link>
              <Link
                className="opacity-80 hover:opacity-100 underline"
                href="#"
              >
                Blog
              </Link>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Link href="#">
                <Icons.facebook_icon />
              </Link>
              <Link href="#">
                <Icons.linkedin_icon />
              </Link>
              <Link href="#">
                <Icons.twitter_icon />
              </Link>
            </div>
          </div>
          <Label
            label={
              <h4 className="text-dark">Contact us</h4>
            }
          />
          <div className="flex flex-col gap-3 text-center lg:text-start">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St Moonstone City, Stardust
              State 12345
            </p>
          </div>
          <div className="border-t border-white pt-5 w-full">
            <p className="text-center lg:text-start">
              © 2023 Positivus. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
