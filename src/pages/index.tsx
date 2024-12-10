import DashboardPage from "@/components/dashboard/page";
import PageContainer from "@/components/layout/PageContainer";
import { useMemo, useState } from "react";
import LoginForm from "../components/login";

export default function Home() {
  const [token, setToken] = useState(false);

  const memoValue = useMemo(() => {
    if (token) {
      return <DashboardPage />;
    } else {
      return <LoginForm setToken={setToken} />;
    }
  }, [token]);

  return (
    <PageContainer>
      {memoValue}
    </PageContainer>
  );
}
