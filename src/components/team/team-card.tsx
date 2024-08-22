import Image from 'next/image';

interface TeamcardProps {
  name: string;
  position: string;
  desc: string;
  img: string;
}

const Teamcard: React.FC<TeamcardProps> = ({
  name,
  position,
  desc,
  img,
}) => {
  return (
    <div className="p-5 rounded-2xl border border-dark flex flex-col gap-3 shadow-[0px_5px_0px_0px_rgb(0,0,0)]">
      <div className="flex flex-row gap-3 items-end">
        <div className="h-20 w-20 relative rounded-full bg-green overflow-hidden">
          <Image
            objectFit="contain"
            layout="fill"
            src={img}
            alt="team"
          />
        </div>
        <div className="flex flex-col">
          <h4>{name}</h4>
          <p>{position}</p>
        </div>
      </div>
      <hr className="border-0.5 border-dark" />
      <p>{desc}</p>
    </div>
  );
};

export default Teamcard;
