import { updateProfile } from "firebase/auth"
import auth from "../Firebase/Firebase.init"

const UpdateProfile = () => {
    const handleUpdateProfile = (e) => {
        e.preventDefault()
        const name = e.target.name.value 
        const url = e.target.url.value 
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
          })
    }
  return (
    <form className="contain px-2 lg:px-0" onSubmit={handleUpdateProfile}>
      <div className="max-w-[500px] mt-10">
      <label htmlFor="name" className="block text-lg font-semibold">Update Name</label>
				<input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div className="max-w-[500px] mt-5">
      <label htmlFor="url" className="block text-lg font-semibold">Update Photo</label>
				<input type="url" name="url" id="url" placeholder="Your URL" className="w-full px-3 py-2 border rounded-md" />
      </div>
      <button type="submit" className="bg-blue-700 border-2 px-5 py-1 mt-5 text-white rounded-md text-lg font-semibold">Update Profile</button>
    </form>
  )
}

export default UpdateProfile
