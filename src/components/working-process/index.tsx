'use client';
import Label from '../ui/label';
import { workProcess } from './constants';
import Processcard from './process-card';

const Workingprocess = () => {
  return (
    <div
      id="working-process"
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-3 lg:grid grid-cols-[max-content_1fr]">
        <Label label={<h2>Our working process</h2>} />
        <p className="max-w-[700px]">
          Step-by-Step Guide to Achieving Your Business
          Goals
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {workProcess.map((process, index) => (
          <Processcard
            key={index}
            title={process.title}
            desc={process.desc}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Workingprocess;
