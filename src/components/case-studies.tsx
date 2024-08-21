import Link from 'next/link';
import Label from './ui/label';

const Casestudies = () => {
  return (
    <div id="services" className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 lg:grid grid-cols-[max-content_1fr]">
        <Label label={<h2>Case studies</h2>} />
        <p className="max-w-[700px]">
          Explore Real-Life Examples of Our Proven Digital
          Marketing Success through Our Case Studies
        </p>
      </div>
      <div className="rounded-2xl p-5 bg-dark flex flex-col gap-5 lg:grid grid-cols-3 text-white">
        <div className="flex flex-col gap-3 py-3 lg:py-0 lg:border-b-0 lg:px-3 border-b lg:border-r border-white justify-between">
          <p>
            For a local restaurant, we implemented a
            targeted PPC campaign that resulted in a 50%
            increase in website traffic and a 25% increase
            in sales.
          </p>
          <Link
            href="/"
            className="text-green opacity-80 hover:opacity-100"
          >
            Learn more
          </Link>
        </div>
        <div className="flex flex-col gap-3 py-3 lg:py-0 lg:border-b-0 lg:px-3 border-b lg:border-r border-white justify-between">
          <p>
            For a local restaurant, we implemented a
            targeted PPC campaign that resulted in a 50%
            increase in website traffic and a 25% increase
            in sales.
          </p>
          <Link
            href="/"
            className="text-green opacity-80 hover:opacity-100"
          >
            Learn more
          </Link>
        </div>
        <div className="flex flex-col gap-3 px-3 justify-between">
          <p>
            For a local restaurant, we implemented a
            targeted PPC campaign that resulted in a 50%
            increase in website traffic and a 25% increase
            in sales.
          </p>
          <Link
            href="/"
            className="text-green opacity-80 hover:opacity-100"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Casestudies;
