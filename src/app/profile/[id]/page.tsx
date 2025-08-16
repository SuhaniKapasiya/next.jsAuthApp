export default function userProfilePage({params}) {
    return (
        <div className="flex items-center flex-col justify-center min-h-screen p-8 text-4xl">
            <h1 className="text-4xl">User Profile Page</h1>
            <p className="mt-4">This is your user profile page.</p>
            <p className="mt-2 bg-amber-300 text-gray-900">User ID: {params.id}</p>
        </div>
    );
}