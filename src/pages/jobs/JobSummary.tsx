"use client";

import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimay";
import ButtonSecondary from "../../components/ButtonSecondary";
import JobDetailItemMini from "../../components/JobDetailItemMini";
import PageLayout from "../../components/PageLayout";

const JobSummary = () => {
  const navigate = useNavigate();

  return (
    <PageLayout title="Job Summary">
      <div className="bg-white border border-stroke p-3 rounded-md">
        <h2 className="text-rich-black text-2xl font-medium mb-2">
          #34398 - Frame Inspection
        </h2>
        <div className="px-3">
          <JobDetailItemMini property="Category" value="Frame Inspection" />
          <JobDetailItemMini property="Customer" value="John Abrahm" />
          <JobDetailItemMini property="Date" value="23-02-2023" />
          <JobDetailItemMini
            property="Site Address"
            value="P.O. Box 22, Greensborough"
          />
        </div>
        <h3 className="text-rich-black text-2xl font-medium">
          Inspection Notes
        </h3>
        <div className="px-3 mb-2">
          <JobDetailItemMini property="Total Notes" value="5" />
          <div className="flex justify-between">
            <ButtonPrimary
              className="min-w-[150px]"
              onClick={() => navigate("/jobs/99899/add-notes")}
            >
              Add Notes
            </ButtonPrimary>
            <ButtonSecondary>View / Edit / Delete Notes</ButtonSecondary>
          </div>
        </div>
        <h3 className="text-rich-black text-2xl font-medium">
          Previous Inspection Items
        </h3>
        <div className="px-3 mb-2">
          <JobDetailItemMini
            property="Total items from previous report"
            value="5"
          />
          <div className="flex justify-between">
            <ButtonPrimary className="min-w-[150px]">
              Add / View Previous Items
            </ButtonPrimary>
          </div>
        </div>
        <h3 className="text-rich-black text-2xl font-medium">
          New Report Items
        </h3>
        <div className="px-3 mb-2">
          <JobDetailItemMini
            property="Total new items in this report"
            value="5"
          />
          <div className="flex justify-between">
            <ButtonPrimary className="min-w-[150px]">
              Add New Items
            </ButtonPrimary>
            <ButtonSecondary>View Added Items</ButtonSecondary>
          </div>
        </div>
        <h3 className="text-rich-black text-2xl font-medium">Recommendation</h3>
        <div className="px-3 mb-2">
          <ButtonPrimary className="min-w-[150px]">
            Add Recommendation
          </ButtonPrimary>
        </div>
        <div className="flex justify-between px-3 mt-5">
          <ButtonPrimary>Generate PDF</ButtonPrimary>
          <ButtonPrimary>Send Report</ButtonPrimary>
        </div>
      </div>
    </PageLayout>
  );
};

export default JobSummary;
