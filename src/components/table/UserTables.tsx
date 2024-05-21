import { FC } from 'react'
import { UserData } from '../../types/response.types'
import { FaDownload } from "react-icons/fa6";
import { actions } from '../../services/common/Actions';
import Placeholder from "../../assets/PlaceholderImage.png";

type Props = {
    users: UserData[]
}
const UserTables: FC<Props> = ({ users }) => {
    return (
        <div className="p-10 max-sm:p-5">
            <section>
                <h1 className="text-3xl font-medium">Users</h1>
                <p className="text-md text-gray-600">All app users are listed below</p>
            </section>
            <section className="overflow-auto">
                <button onClick={actions.exportUserAsCSV} className='flex items-center ml-auto gap-2 bg-primaryGreen py-2 px-7 rounded-md my-2'>
                    <FaDownload /> Download
                </button>
                <table className='table-auto w-full text-left border rounded-md'>
                    <thead className='border bg-primaryGreen text-sm capitalize h-10'>
                        <tr>
                            <th className='pl-5 font-normal'>Profile</th>
                            <th className='pl-5 font-normal'>Name</th>
                            <th className='pl-5 font-normal'>Email</th>
                            <th className='pl-5 font-normal'>gender</th>
                            <th className='pl-5 font-normal'>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(({ _id, name, email, profile_url, gender, phone_number }) => (
                            <tr key={_id} className='border capitalize text-sm h-14'>
                                <td className='pl-5'>
                                    <img src={profile_url || Placeholder} alt='User Profile'
                                        className='rounded-full w-10 h-10 object-cover object-center shadow' />
                                </td>
                                <td className='pl-5'>{name}</td>
                                <td className='pl-5'>{email}</td>
                                <td className='pl-5'>{gender}</td>
                                <td className='pl-5'>{phone_number}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default UserTables