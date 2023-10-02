"use client";
import { MouseEvent } from "react";
import PageLayout from "../components/PageLayout";
import jobs from "../demo/jobs";
import { LocationIcon, PersonIcon } from "../icons/Icons";

const Jobs = () => {
  const createCustomJob = (e: MouseEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <PageLayout
      title="All Jobs"
      titleBtn="Create Custom Job"
      onTitleBtnClick={createCustomJob}
    >
      <div className="grid gap-1">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-stroke rounded-md p-2 grid gap-1"
          >
            <div className="flex justify-between">
              <span className="text-xl font-medium text-rich-black">
                #{job.jobNumber} - {job.category}
              </span>
              <span className="text-gray-dark">{job.date}</span>
            </div>
            <div className="flex text-gray-dark items-center">
              <div className="min-w-[200px] flex items-center">
                <PersonIcon size={20} color="#2E3A59" />
                <span className="text-lg">{job.customer}</span>
              </div>
              <div className="flex items-center">
                <LocationIcon size={20} color="#2E3A59" />
                <span className="text-lg">{job.siteAddress}</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="px-4 bg-very-light-gray rounded-sm text-rich-black">{job.category}</span>
              <span className="px-3 bg-status-bg text-orange-400 min-w-[150px] text-center">{job.status}</span>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Jobs;
