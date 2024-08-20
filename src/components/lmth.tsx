import Button from './ui/button';

const Lmth = () => {
  return (
    <div className="relative flex p-5  flex-col gap-5 lg:grid grid-cols-2 bg-gray rounded-xl">
      <div className="flex flex-col gap-5">
        <h3>Let&apos;s make things happen</h3>
        <p>
          Contact us today to learn more about how our
          digital marketing services can help your business
          grow and succeed online.
        </p>
        <Button label="Get your free proposal" />
      </div>
      <div className="hidden lg:flex absolute right-10 -top-10">
        <img src="./lmth.svg" className="h-min" />
      </div>
    </div>
  );
};

export default Lmth;
