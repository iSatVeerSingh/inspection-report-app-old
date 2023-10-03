"use client";

import ButtonPrimary from "../../components/ButtonPrimay";
import ButtonSecondary from "../../components/ButtonSecondary";
import InputField from "../../components/InputField";
import JobDetailItemMini from "../../components/JobDetailItemMini";
import PageLayout from "../../components/PageLayout";

const AddInspectionNotes = () => {
  return (
    <PageLayout title="Add Inspection Notes" titleBtn="Suggest Note">
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
        <div className="max-w-[90%] mt-7">
          <InputField
            type="text"
            name="predefinedNote"
            placeholder="Search here for relevant notes"
            label="Add Note for Frame Inspection"
          />
          <ButtonPrimary className="mt-3 px-10">Add Note</ButtonPrimary>
        </div>
        <div className="mt-5">
          <p className="text-center text-xl">OR</p>
          <p className="text-gray-dark text-lg mb-2">
            If you have not found relevant note to job category, please see in
            all categories
          </p>
          <ButtonSecondary>See All Notes from All Categories</ButtonSecondary>
        </div>
        <div className="mt-5">
          <p className="text-center text-xl">OR</p>
          <p className="text-gray-dark text-lg mb-2">
            If you have not found the desired not in any of common categories,
            you can create a custom note.
          </p>
          <InputField
            type="text"
            label="Add Custom Note"
            name="customNote"
            placeholder="Start typing here"
          />
          <ButtonPrimary className="mt-3">Add Custom Note</ButtonPrimary>
        </div>

        <ButtonPrimary className="min-w-[300px] mt-4">Save And Close</ButtonPrimary>
      </div>
    </PageLayout>
  );
};

export default AddInspectionNotes;
