import React,{useState} from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Camera, User, Mail } from 'lucide-react';
import avatarImg from "../assets/avatar.png";



const ProfilePage = () => {
  const {authUser, isUpdatingProfile, updateProfile} = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);


  const resizeImage = (file, maxSize = 500) =>
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const scale = maxSize / Math.max(img.width, img.height);
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          const resizedBase64 = canvas.toDataURL("image/jpeg", 0.7); // 0.7 = quality
          resolve(resizedBase64);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });


  // const handleImageUpload = async (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = async () => {
  //     const base64Image = reader.result;

  //     try {
  //       setSelectedImg(base64Image); // Preview
  //       await updateProfile({ profilePic: base64Image });
  //     } catch (error) {
  //       console.error("Failed to update profile", error);
  //     }
  //   };

  const handleImageUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    const resizedImage = await resizeImage(file);
    setSelectedImg(resizedImage); // Preview
    await updateProfile({ profilePic: resizedImage });
  } catch (error) {
    console.error("Failed to update profile", error);
  }
};
    
  

  return (
    <div className='h-screen pt-20'>
      <div className='max-w-2xl mx-auto p-4 py-8'>
        <div className='bg-base-300 rounded-xl p-6 space-y-8'>
          {/* Profile Heading */}
          <div className='text-center'>
            <h1 className='text-2xl font-semibold'>Profile</h1>
            <p className='mt-2'>Your Profile information</p>
          </div>

          {/* Avatar Upload */}
           <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImg || authUser?.profilePic || avatarImg}
                alt="Profile"
                className="size-32 rounded-full object-cover border-4 "
              />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                `}
              >
                <Camera className="w-5 h-5 text-base-200" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-zinc-400">
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
            </p>
          </div>

          {/* Fullname and Email address */}
          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.fullName}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.email}</p>
            </div>
          </div>

          {/* Additional Info Fields */}
          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium  mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default ProfilePage
