"use client";

import ButtonPrimary from "../../components/ButtonPrimay";
import ButtonSecondary from "../../components/ButtonSecondary";
import FileInput from "../../components/FileInput";
import InputField from "../../components/InputField";
import InputTextArea from "../../components/InputTextArea";
import PageLayout from "../../components/PageLayout";

const AddInspectionItems = () => {
  return (
    <PageLayout title="Add Inspection Items">
      <div className="bg-white border border-stroke p-3 rounded-md">
        <h2 className="text-rich-black text-2xl font-medium">
          #34398 - Frame Inspection - John Abrahm
        </h2>
        <p className="text-gray-dark text-lg">P.O. Box 22, Greensborough</p>
        <form className="grid gap-2 mt-5">
          <InputField
            type="text"
            label="Category"
            name="category"
            placeholder="Select items from category"
          />
          <InputField
            type="text"
            label="Item Name"
            name="itemName"
            placeholder="Search item name here"
          />
          <FileInput name="itemImage" label="Item Images" subLabel="Max 8 images" />
          <InputTextArea name="itemNotes" placeholder="Type item notes here" label="Item Notes" />
          <ButtonPrimary type="submit" className="max-w-[250px]" >Add Item</ButtonPrimary>
        </form>
      </div>
      <div className="flex items-center px-3 mt-4 justify-between">
        <ButtonPrimary className="min-w-[250px]" >See Added Items</ButtonPrimary>
        <ButtonSecondary>Create Custom Item</ButtonSecondary>
      </div>
    </PageLayout>
  );
};

export default AddInspectionItems;
