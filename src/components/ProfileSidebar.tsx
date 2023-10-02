"use client";

type ProfileSidebarProps = {
  className?: string;
};

const ProfileSidebar = ({ className }: ProfileSidebarProps) => {
  return (
    <div
      className={`px-3 flex items-center gap-2 ${className ? className : ""}`}
    >
      <div className="border border-black w-10 h-10 rounded-full overflow-hidden">
        <img src="./vite.svg" alt="" className="block w-full h-full" />
      </div>
      <div className="font-medium text-2xl">Michhele</div>
    </div>
  );
};

export default ProfileSidebar;
