import Label from './ui/label';

const Contactus = () => {
  return (
    <div id="services" className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 lg:grid grid-cols-[max-content_1fr]">
        <Label label={<h2>Contact us</h2>} />
        <p className="max-w-[700px]">
          Connect with Us: Let&apos;s Discuss Your Digital
          Marketing Needs
        </p>
      </div>
      <div className="bg-gray p-5 rounded-2xl relative lg:grid grid-cols-[2fr_1fr] overflow-hidden">
        <div className="flex flex-col gap-5">
          <span className="flex flex-col gap-1">
            <label>Name</label>
            <input className="py-2 px-3 rounded-xl focus:outline-none border border-dark text-sm placeholder:opacity-80" />
          </span>
          <span className="flex flex-col gap-1">
            <label>Email</label>
            <input className="py-2 px-3 rounded-xl focus:outline-none border border-dark text-sm placeholder:opacity-80" />
          </span>
          <span className="flex flex-col gap-1">
            <label>Message</label>
            <textarea
              rows={5}
              className="py-2 px-3 rounded-xl focus:outline-none border border-dark text-sm placeholder:opacity-80"
            />
          </span>
        </div>
        <div className="hidden lg:flex justify-end absolute bottom-0 top-0 -right-[200px]">
          <img
            src="./contact-illustration.svg"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
