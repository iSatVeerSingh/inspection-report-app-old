"use client";

import ButtonPrimary from "../components/ButtonPrimay";
import InputField from "../components/InputField";
import PageLayout from "../components/PageLayout";

const CreateCustomJob = () => {
  return (
    <PageLayout title="Create Custom Job">
      <div className="bg-white border border-stroke rounded-md min-h-[200px] p-10">
        <form className="grid gap-2">
          <InputField
            type="text"
            label="Job Number"
            name="jobNumber"
            placeholder="Enter job number"
          />
          <InputField
            type="text"
            label="Job Type"
            name="jobType"
            placeholder="Select a job type"
          />
          <InputField
            type="text"
            label="Name On The Report"
            name="customerName"
            placeholder="Enter customer name which you want on report"
          />
          <InputField
            type="email"
            label="Customer Email"
            name="customerEmail"
            placeholder="Enter customer email"
          />
          <InputField
            type="text"
            label="Customer Phone"
            name="customerPhone"
            placeholder="Enter customer phone"
          />
          <InputField
            type="text"
            label="Site Address"
            name="siteAddress"
            placeholder="Enter site address"
          />
          <InputField
            type="text"
            label="Inspector"
            name="inspector"
            placeholder="Select inspector from list"
          />
          <InputField
            type="date"
            label="Date"
            name="date"
            placeholder="Date"
          />
          <InputField
            type="time"
            label="Time"
            name="time"
            placeholder="00:00 AM"
          />
          <InputField
            type="text"
            label="Job Description"
            name="jobDescription"
            placeholder="Type job description here"
          />
          <ButtonPrimary className="max-w-[300px]" type="submit">Create Job</ButtonPrimary>
        </form>
      </div>
    </PageLayout>
  );
};

export default CreateCustomJob;
