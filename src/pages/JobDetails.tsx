"use client";

import { useLoaderData } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { getJobDetail } from "../services/jobs";
import { Job } from "../utils/types";

export const jobDetailLoader = async ({ params }: any) => {
  const job = await getJobDetail(params.jobNumber);
  return { job };
};

const JobDetails = () => {
  const { job } = useLoaderData() as { job: Job };

  return (
    <PageLayout title="Job Details">
      <div className="bg-white border border-stroke min-h-[300px] rounded-md p-3">
        <h2 className="text-rich-black text-2xl font-medium mb-2">
          #{job.jobNumber} - {job.category}
        </h2>
        <div className="flex gap-2 mb-2">
          <span className="font-medium text-xl min-w-[200px]">Category</span>
          <span className="px-4 bg-input-bg text-gray-dark text-xl">
            {job.category}
          </span>
        </div>
        <div className="flex gap-2 mb-2">
          <span className="font-medium text-xl min-w-[200px]">Customer</span>
          <span className="px-4 bg-input-bg text-gray-dark text-xl">
            {job.customer}
          </span>
        </div>
        <div className="flex gap-2 mb-2">
          <span className="font-medium text-xl min-w-[200px]">
            Assigned Inspector
          </span>
          <span className="px-4 bg-input-bg text-gray-dark text-xl">
            {job.inspector}
          </span>
        </div>
        <div className="flex gap-2 mb-2">
          <span className="font-medium text-xl min-w-[200px]">Date</span>
          <span className="px-4 bg-input-bg text-gray-dark text-xl">
            {job.date}
          </span>
        </div>
        <div className="flex gap-2 mb-2">
          <span className="font-medium text-xl min-w-[200px]">Time</span>
          <span className="px-4 bg-input-bg text-gray-dark text-xl">
            {job.time}
          </span>
        </div>
        <div className="flex gap-2 mb-2">
          <span className="font-medium text-xl min-w-[200px]">
            Site Address
          </span>
          <span className="px-4 bg-input-bg text-gray-dark text-xl">
            {job.siteAddress}
          </span>
        </div>
        <div className="flex gap-2 mb-2">
          <span className="font-medium text-xl min-w-[200px]">Status</span>
          <span className="px-4 bg-input-bg text-gray-dark text-xl">
            {job.status}
          </span>
        </div>
        <div className="flex gap-1 mb-2 flex-col">
          <span className="font-medium text-xl min-w-[200px]">Description</span>
          <span className="px-4 bg-input-bg text-gray-dark text-xl">
            {job.description}
          </span>
        </div>
      </div>
    </PageLayout>
  );
};

export default JobDetails;
