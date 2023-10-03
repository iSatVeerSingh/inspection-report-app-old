"use client";

import JobDetailItemMini from "../../components/JobDetailItemMini";
import PageLayout from "../../components/PageLayout";

const AddInspectionNotes = () => {
  return (
    <PageLayout title="Add Inspection Notes">
      <div className="bg-white border border-stroke p-3 rounded-md">
        <h2 className="text-rich-black text-2xl font-medium mb-2">
          #34398 - Frame Inspection
        </h2>
        <div>
          <JobDetailItemMini property="Category" value="Frame Inspection" />
          <JobDetailItemMini property="Customer" value="John Abrahm" />
          <JobDetailItemMini
            property="Site Address"
            value="P.O. Box 22, Greensborough"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default AddInspectionNotes;
