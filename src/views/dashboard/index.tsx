import ContentWrapper from "./contentWrapper";
import SideNav from "../../components/sidenav";
import TopNav from "../../components/topnav";

function Dashboard() {
  return (
    <div>
      <SideNav />
      <TopNav />
      <ContentWrapper />
    </div>
  );
}

export default Dashboard;
