import jobs from "../demo/jobs";
import { Job } from "../utils/types";

export const getJobs = async () => {
  return jobs;
};

export const loader = async () => {
  const jobs: Job[] = await getJobs();
  return { jobs };
};

export const getJobDetail = async (jobNumber: string) => {
  const job = jobs.find((job) => job.jobNumber === Number(jobNumber));
  return job;
};
