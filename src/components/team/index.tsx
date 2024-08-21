import Label from '../ui/label';

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
    </div>
  );
};

export default Team;
