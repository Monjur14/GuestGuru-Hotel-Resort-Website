import UseAuth from "../CustomHook/UseAuth"

const UserProfile = () => {
    const {user} = UseAuth()
  return (
    <div className="contain flex flex-col items-center">
      <img src={user.photoURL} alt="" className="w-40 h-40 rounded-full border-4 border-blue-600 mt-10"/>
      <h1 className="text-2xl font-bold mt-2">Name: {user.displayName}</h1>
      <h1 className="text-lg font-bold ">Email: {user.email}</h1>
    </div>
  )
}

export default UserProfile
