import Label from '../ui/label';
import { services } from './constants';
import Servicecard from './service-card';

const Services = () => {
  return (
    <div id="services" className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 lg:grid grid-cols-[max-content_1fr]">
        <Label label={<h2>Services</h2>} />
        <p className="max-w-[700px]">
          At our digital marketing agency, we offer a range
          of services to help businesses grow and succeed
          online. These services include:
        </p>
      </div>
      <div className="flex flex-col gap-5 md:grid grid-cols-2">
        {services.map((service, index) => (
          <Servicecard
            variant={
              index === 0
                ? 'gray'
                : index === 1
                  ? 'green'
                  : index === 2
                    ? 'dark'
                    : index === 3
                      ? 'gray'
                      : index === 4
                        ? 'green'
                        : 'dark'
            }
            title1={service.title1}
            title2={service.title2}
            link={service.link}
            img={service.img}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
