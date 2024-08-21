import Label from '../ui/label';
import { teamArr } from './constants';
import Teamcard from './team-card';

const Team = () => {
  return (
    <div
      id="working-process"
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-3 lg:grid grid-cols-[max-content_1fr]">
        <Label label={<h2>Team</h2>} />
        <p className="max-w-[700px]">
          Meet the skilled and experienced team behind our
          successful digital marketing strategies
        </p>
      </div>
      <div className="flex flex-col gap-5 md:grid grid-cols-2 lg:grid-cols-3">
        {teamArr.map((team, index) => (
          <Teamcard
            key={index}
            name={team.name}
            position={team.position}
            desc={team.desc}
            img={team.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
