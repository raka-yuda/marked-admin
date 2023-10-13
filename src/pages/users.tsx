import DashboardLayout from "../layouts/dashboard-layout";

interface Props {
  title: String;
}

const users = ({ title = "Users" }: Props) => {
  return (
    <DashboardLayout titlePage={title}>
      <p>Users Page</p>
    </DashboardLayout>
  );
};
export default users;
