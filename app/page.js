
export const dynamic = 'force-dynamic'; // Forces server-side rendering

//components
import UsersTable from "@/components/users/list/UsersList";
import UserModal from "@/components/users/modal/UserModal";

//configs
import HttpService from "@/configs/HttpService";

async function getUsers(page = 1) {
    try {
      const response = await HttpService.get(
        `/users?_limit=5&_page=${page}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }

export default async function UsersPage({ searchParams }) {
    const page = searchParams.page || 1;
    const users = await getUsers(page);
    return (
      <>
        <UsersTable
         users={users}
          />
        <UserModal />
      </>
    );
  }