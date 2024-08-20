import Button from './ui/button';

const Banner = () => {
  return (
    <div
      id="banner"
      className="flex flex-col gap-5 my-5 md:my-10 lg:my-20 md:grid grid-cols-2"
    >
      <div className="flex flex-col h-full gap-5 justify-center">
        <h1>
          Navigating the digital landscape for success
        </h1>
        <p>
          Our digital marketing agency helps businesses grow
          and succeed online through a range of services
          including SEO, PPC, social media marketing, and
          content creation.
        </p>
        <Button label="Book a consultation" />
      </div>
      <div className="h-full flex items-center justify-end">
        <img src="./banner-image.svg" />
      </div>
    </div>
  );
};

export default Banner;
